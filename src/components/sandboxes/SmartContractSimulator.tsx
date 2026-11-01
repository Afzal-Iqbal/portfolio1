import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { Shield, ShieldAlert, ShieldCheck, Play, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';
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
        padding: '28px',
        backgroundColor: 'rgba(11, 15, 25, 0.95)',
        border: '1px solid rgba(0, 245, 255, 0.25)'
      }}
    >
      <VStack gap={4}>
        {/* Header */}
        <HStack justify="between" align="center" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
          <VStack gap={1}>
            <HStack gap={2} align="center">
              {isGuarded ? <ShieldCheck size={20} color="#10B981" /> : <ShieldAlert size={20} color="#EF4444" />}
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>
                Smart Contract Security Sandbox: Reentrancy Guard
              </h3>
            </HStack>
            <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8' }}>
              Interactive EVM call-stack simulator testing OpenZeppelin ReentrancyGuard vs. recursive fallback drains.
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
                color: isGuarded ? '#34D399' : '#F87171',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {isGuarded ? 'Status: Guarded (Safe)' : 'Status: Vulnerable'}
            </button>
          </HStack>
        </HStack>

        {/* Live On-Chain State Meter */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}
          >
            <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>VAULT PROTOCOL BALANCE</span>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: vaultBalance > 0 ? '#00F5FF' : '#EF4444',
                marginTop: '4px'
              }}
            >
              {vaultBalance.toFixed(1)} ETH
            </div>
            <span style={{ fontSize: '11px', color: '#64748B' }}>
              {vaultBalance === 0 ? '⚠️ DRAINED BY ATTACKER' : 'Protected in Escrow'}
            </span>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}
          >
            <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>ATTACKER CONTRACT BALANCE</span>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: attackerBalance > 1.0 ? '#EF4444' : '#E2E8F0',
                marginTop: '4px'
              }}
            >
              {attackerBalance.toFixed(1)} ETH
            </div>
            <span style={{ fontSize: '11px', color: '#64748B' }}>
              {attackerBalance > 1.0 ? '🚨 STOLEN FROM VAULT' : 'Initial deposited funds'}
            </span>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>SIMULATED GAS USAGE</span>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981', marginTop: '4px' }}>
              {simulation ? `${simulation.totalGasUsed.toLocaleString()} gas` : '0 gas'}
            </div>
            <span style={{ fontSize: '11px', color: '#64748B' }}>
              {simulation ? (isGuarded ? 'Revert prevented waste' : 'High gas consumption') : 'Awaiting execution'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <HStack gap={3} align="center">
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
                color: simulation.success ? '#34D399' : '#F87171',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              {simulation.message}
            </div>

            <div
              style={{
                backgroundColor: '#070A10',
                borderRadius: '8px',
                border: '1px solid rgba(0, 245, 255, 0.15)',
                padding: '14px',
                fontFamily: 'Fira Code, monospace',
                fontSize: '12px',
                maxHeight: '260px',
                overflowY: 'auto'
              }}
            >
              <div style={{ color: '#64748B', marginBottom: '8px' }}>// EVM EXECUTION CALL-STACK TRACE:</div>
              {simulation.callFrames.map((frame) => (
                <div
                  key={frame.id}
                  style={{
                    padding: '8px 10px',
                    marginLeft: `${frame.depth * 18}px`,
                    borderLeft: `2px solid ${frame.status === 'reverted' ? '#EF4444' : '#00F5FF'}`,
                    marginBottom: '6px',
                    backgroundColor: frame.status === 'reverted' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255, 255, 255, 0.02)'
                  }}
                >
                  <HStack justify="between" align="center">
                    <span style={{ color: frame.status === 'reverted' ? '#F87171' : '#38BDF8', fontWeight: 600 }}>
                      [Depth {frame.depth}] {frame.action}
                    </span>
                    <span style={{ fontSize: '11px', color: '#64748B' }}>{frame.gasUsed} gas</span>
                  </HStack>
                  <div style={{ color: '#94A3B8', marginTop: '2px', fontSize: '11px' }}>{frame.log}</div>
                </div>
              ))}
            </div>
          </VStack>
        )}
      </VStack>
    </Card>
  );
};
