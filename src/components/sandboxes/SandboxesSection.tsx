import React, { useState } from 'react';
import { VStack, HStack, Card, Badge } from '@astryxdesign/core';
import { Terminal, Shield, Brain, Sparkles } from 'lucide-react';
import { SmartContractSimulator } from './SmartContractSimulator';
import { AiAgentSandbox } from './AiAgentSandbox';
import { usePersona } from '../../context/PersonaContext';

export const SandboxesSection: React.FC = () => {
  const { persona } = usePersona();
  const [activeTab, setActiveTab] = useState<'smart-contract' | 'ai-agent'>('smart-contract');

  return (
    <section id="sandboxes" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Sparkles size={16} color="#10B981" />
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  color: '#10B981',
                  letterSpacing: '1.5px',
                  fontWeight: 600
                }}
              >
                In-Browser Proof-of-Work
              </span>
            </HStack>

            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 800,
                color: '#F8FAFC',
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              Interactive Engineering Sandboxes
            </h2>

            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, maxWidth: '640px' }}>
              Don&apos;t just read about architecture—test it live in your browser. Verify smart contract reentrancy exploit mitigation and execute agentic LLM research pipelines in real time.
            </p>
          </div>

          {/* Sandbox Switcher Bar */}
          <HStack gap={3}>
            <button
              onClick={() => setActiveTab('smart-contract')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                backgroundColor: activeTab === 'smart-contract' ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                border: activeTab === 'smart-contract' ? '1px solid #00F5FF' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeTab === 'smart-contract' ? '#00F5FF' : '#94A3B8',
                transition: 'all 0.15s ease'
              }}
            >
              <Shield size={16} />
              <span>Smart Contract Security Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-agent')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                backgroundColor: activeTab === 'ai-agent' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                border: activeTab === 'ai-agent' ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeTab === 'ai-agent' ? '#C084FC' : '#94A3B8',
                transition: 'all 0.15s ease'
              }}
            >
              <Brain size={16} />
              <span>Agentic AI (SEPICP) Sandbox</span>
            </button>
          </HStack>

          {/* Active Sandbox */}
          <div>
            {activeTab === 'smart-contract' ? <SmartContractSimulator /> : <AiAgentSandbox />}
          </div>
        </VStack>
      </div>
    </section>
  );
};
