export interface CallFrame {
  id: string;
  depth: number;
  caller: string;
  target: string;
  action: string;
  value: string;
  gasUsed: number;
  status: 'pending' | 'success' | 'reverted';
  log: string;
}

export interface SimulationResult {
  success: boolean;
  message: string;
  finalVaultBalance: number;
  finalAttackerBalance: number;
  totalGasUsed: number;
  callFrames: CallFrame[];
}

export const runReentrancySimulation = (isGuarded: boolean): SimulationResult => {
  const frames: CallFrame[] = [];
  let vaultBalance = 10.0;
  let attackerBalance = 1.0;
  let totalGas = 0;

  // Frame 0: Initial call from Attacker contract
  frames.push({
    id: 'f-0',
    depth: 0,
    caller: '0xAttackerContract (0x7a...4b)',
    target: '0xVaultProtocol (0x12...99)',
    action: 'withdraw(1.0 ETH)',
    value: '0 ETH',
    gasUsed: 21500,
    status: 'success',
    log: 'Attacker requests withdrawal of previously deposited 1.0 ETH.'
  });
  totalGas += 21500;

  if (!isGuarded) {
    // VULNERABLE CONTRACT EXECUTION (Checks-Interactions-Effects Anti-Pattern)
    frames.push({
      id: 'f-1',
      depth: 1,
      caller: '0xVaultProtocol',
      target: '0xAttackerContract.receive()',
      action: 'msg.sender.call{value: 1.0 ETH}("")',
      value: '1.0 ETH',
      gasUsed: 9800,
      status: 'success',
      log: 'Vault transfers 1.0 ETH to attacker BEFORE updating internal balance storage slot.'
    });
    totalGas += 9800;
    vaultBalance -= 1.0;
    attackerBalance += 1.0;

    // Frame 2: Reentrant call
    frames.push({
      id: 'f-2',
      depth: 2,
      caller: '0xAttackerContract.receive()',
      target: '0xVaultProtocol.withdraw(1.0 ETH)',
      action: 'REENTRANT CALL: withdraw(1.0 ETH)',
      value: '0 ETH',
      gasUsed: 18400,
      status: 'success',
      log: 'Attacker fallback contract re-enters withdraw() before first frame concludes!'
    });
    totalGas += 18400;

    // Frame 3: Drain continues recursively
    frames.push({
      id: 'f-3',
      depth: 3,
      caller: '0xVaultProtocol',
      target: '0xAttackerContract',
      action: 'msg.sender.call{value: 1.0 ETH}("")',
      value: '1.0 ETH',
      gasUsed: 9800,
      status: 'success',
      log: 'Vault sends second 1.0 ETH because state balance is STILL unchanged (1.0 ETH).'
    });
    totalGas += 9800;
    vaultBalance -= 1.0;
    attackerBalance += 1.0;

    // Cascade drain
    frames.push({
      id: 'f-4',
      depth: 4,
      caller: '0xAttackerContract',
      target: '0xVaultProtocol',
      action: 'RECURSIVE DRAIN COMPLETE',
      value: '8.0 ETH DRAINED',
      gasUsed: 45000,
      status: 'success',
      log: 'Attacker loops until Vault balance is depleted. Total 10.0 ETH stolen.'
    });
    totalGas += 45000;
    attackerBalance += 8.0;
    vaultBalance = 0;

    return {
      success: false,
      message: 'CRITICAL EXPLOIT SUCCESSFUL: Vault depleted to 0 ETH due to missing reentrancy guard.',
      finalVaultBalance: vaultBalance,
      finalAttackerBalance: attackerBalance,
      totalGasUsed: totalGas,
      callFrames: frames
    };
  } else {
    // GUARDED CONTRACT EXECUTION (OpenZeppelin ReentrancyGuard + CEI)
    frames.push({
      id: 'f-1',
      depth: 1,
      caller: '0xVaultProtocol',
      target: '0xStorageSlot(_status)',
      action: '_status = _ENTERED (2)',
      value: '0 ETH',
      gasUsed: 5000,
      status: 'success',
      log: 'nonReentrant modifier sets guard lock in storage slot before execution.'
    });
    totalGas += 5000;

    frames.push({
      id: 'f-2',
      depth: 1,
      caller: '0xVaultProtocol',
      target: '0xStorageSlot(balances[msg.sender])',
      action: 'balances[msg.sender] = 0 (CHECKS-EFFECTS)',
      value: '0 ETH',
      gasUsed: 5000,
      status: 'success',
      log: 'Internal balance zeroed OUT BEFORE initiating external value transfer.'
    });
    totalGas += 5000;

    frames.push({
      id: 'f-3',
      depth: 2,
      caller: '0xVaultProtocol',
      target: '0xAttackerContract.receive()',
      action: 'msg.sender.call{value: 1.0 ETH}("")',
      value: '1.0 ETH',
      gasUsed: 9800,
      status: 'success',
      log: 'External call initiated with 1.0 ETH transfer.'
    });
    totalGas += 9800;
    vaultBalance -= 1.0;
    attackerBalance += 1.0;

    frames.push({
      id: 'f-4',
      depth: 3,
      caller: '0xAttackerContract.receive()',
      target: '0xVaultProtocol.withdraw(1.0 ETH)',
      action: 'REENTRANT CALL: withdraw(1.0 ETH)',
      value: '0 ETH',
      gasUsed: 2100,
      status: 'reverted',
      log: 'REVERTED: OpenZeppelin ReentrancyGuard detected _status == _ENTERED! Execution halted.'
    });
    totalGas += 2100;

    frames.push({
      id: 'f-5',
      depth: 1,
      caller: '0xVaultProtocol',
      target: '0xStorageSlot(_status)',
      action: '_status = _NOT_ENTERED (1)',
      value: '0 ETH',
      gasUsed: 5000,
      status: 'success',
      log: 'Call frame cleans up. Remaining 9.0 ETH in vault preserved with 100% integrity.'
    });
    totalGas += 5000;

    return {
      success: true,
      message: 'SECURITY VERIFIED: OpenZeppelin ReentrancyGuard intercepted exploit. Vault funds secured.',
      finalVaultBalance: vaultBalance,
      finalAttackerBalance: attackerBalance,
      totalGasUsed: totalGas,
      callFrames: frames
    };
  }
};
