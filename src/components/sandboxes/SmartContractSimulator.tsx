import React, { useState } from 'react';
import { Card, VStack, HStack, Button } from '@astryxdesign/core';
import { ShieldAlert, ShieldCheck, Play, RotateCcw } from 'lucide-react';
import { runReentrancySimulation, SimulationResult } from '../../lib/contractSimulator';

export const SmartContractSimulator: React.FC = () => {
  const [isGuarded, setIsGuarded] = useState(true);
  const [simulation, setSimulation] = useState<SimulationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      const res = runReentrancySimulation(isGuarded);
      setSimulation(res);
      setIsRunning(false);
    }, 450);
  };

  const handleReset = () => {
    setSimulation(null);
  };

  const vaultBalance = simulation ? simulation.finalVaultBalance : 10.0;
  const attackerBalance = simulation ? simulation.finalAttackerBalance : 1.0;

  return (
    <Card
      className="glass-cyber-card"
      style={{
        padding: '24px',
        backgroundColor: 'var(--cyber-bg-card)',
        border: '1px solid var(--cyber-border-subtle)'
      }}
    >
      <VStack gap={4}>
        {/* Header */}
        <HStack justify="between" align="center" wrap="wrap" style={{ borderBottom: '1px solid var(--cyber-border-subtle)', paddingBottom: '16px' }}>
          <VStack gap={1}>
            <HStack gap={2} align="center">
              {isGuarded ? <ShieldCheck size={20} color="#10B981" /> : <ShieldAlert size={20} color="#EF4444" />}
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                EVM Reentrancy Guard Simulator
              </h3>
            </HStack>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--cyber-text-secondary)' }}>
              Interactive call-stack engine demonstrating OpenZeppelin reentrancy protection vs. recursive drains.
            </p>
          </VStack>

          <HStack gap={2} align="center">
            <button
              onClick={() => {
                setIsGuarded(!isGuarded);
                setSimulation(null);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: isGuarded ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: isGuarded ? '1px solid #10B981' : '1px solid #EF4444',
                color: isGuarded ? '#10B981' : '#EF4444',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {isGuarded ? 'Status: Guarded (Safe)' : 'Status: Vulnerable'}
            </button>
          </HStack>
        </HStack>

        {/* Live On-Chain State Meter */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)'
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', fontWeight: 700 }}>
              VAULT PROTOCOL BALANCE
            </span>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 900,
                color: vaultBalance > 0 ? 'var(--cyber-cyan)' : '#EF4444',
                marginTop: '4px'
              }}
            >
              {vaultBalance.toFixed(1)} ETH
            </div>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>
              {vaultBalance === 0 ? '⚠️ DRAINED BY ATTACKER' : 'Protected in Escrow'}
            </span>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)'
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', fontWeight: 700 }}>
              ATTACKER BALANCE
            </span>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 900,
                color: attackerBalance > 1.0 ? '#EF4444' : 'var(--cyber-text-primary)',
                marginTop: '4px'
              }}
            >
              {attackerBalance.toFixed(1)} ETH
            </div>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>
              {attackerBalance > 1.0 ? '🚨 STOLEN FROM VAULT' : 'Initial deposited funds'}
            </span>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)'
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', fontWeight: 700 }}>
              SIMULATED GAS USAGE
            </span>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#10B981', marginTop: '4px' }}>
              {simulation ? `${simulation.totalGasUsed.toLocaleString()} gas` : '0 gas'}
            </div>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>
              {simulation ? (isGuarded ? 'Revert prevented waste' : 'High gas consumption') : 'Awaiting execution'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <HStack gap={3} align="center" wrap="wrap">
          <Button
            label={isRunning ? 'Executing Call Frames...' : 'Simulate Reentrancy Exploit'}
            variant="primary"
            icon={<Play size={15} />}
            isDisabled={isRunning}
            onClick={handleSimulate}
          />

          <Button
            label="Reset Vault State"
            variant="secondary"
            icon={<RotateCcw size={14} />}
            onClick={handleReset}
          />
        </HStack>

        {/* Live Call Trace Screen */}
        {simulation && (
          <VStack gap={2}>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: simulation.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${simulation.success ? '#10B981' : '#EF4444'}`,
                color: simulation.success ? '#10B981' : '#EF4444',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              {simulation.message}
            </div>

            <div
              style={{
                backgroundColor: 'var(--cyber-inner-box)',
                borderRadius: '8px',
                border: '1px solid var(--cyber-border-subtle)',
                padding: '14px',
                fontFamily: 'Fira Code, monospace',
                fontSize: '12px',
                maxHeight: '260px',
                overflowY: 'auto'
              }}
            >
              <div style={{ color: 'var(--cyber-text-muted)', marginBottom: '8px' }}>// EVM EXECUTION CALL-STACK TRACE:</div>
              {simulation.callFrames.map((frame) => (
                <div
                  key={frame.id}
                  style={{
                    padding: '8px 10px',
                    marginLeft: `${frame.depth * 14}px`,
                    borderLeft: `2px solid ${frame.status === 'reverted' ? '#EF4444' : 'var(--cyber-cyan)'}`,
                    marginBottom: '6px',
                    backgroundColor: frame.status === 'reverted' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '4px'
                  }}
                >
                  <HStack justify="between" align="center">
                    <span style={{ color: frame.status === 'reverted' ? '#EF4444' : 'var(--cyber-cyan)', fontWeight: 700 }}>
                      [Depth {frame.depth}] {frame.action}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>{frame.gasUsed} gas</span>
                  </HStack>
                  <div style={{ color: 'var(--cyber-text-secondary)', marginTop: '2px', fontSize: '11px' }}>{frame.log}</div>
                </div>
              ))}
            </div>
          </VStack>
        )}
      </VStack>
    </Card>
  );
};
