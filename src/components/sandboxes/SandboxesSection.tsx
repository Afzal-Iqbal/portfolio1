import React, { useState } from 'react';
import { VStack, HStack, Card, Badge } from '@astryxdesign/core';
import { Shield, Brain, Sparkles } from 'lucide-react';
import { SmartContractSimulator } from './SmartContractSimulator';
import { AiAgentSandbox } from './AiAgentSandbox';
import { usePersona } from '../../context/PersonaContext';

export const SandboxesSection: React.FC = () => {
  const { persona } = usePersona();
  const [activeTab, setActiveTab] = useState<'smart-contract' | 'ai-agent'>('smart-contract');

  return (
    <section id="sandboxes" style={{ padding: '48px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Sparkles size={16} color="var(--cyber-emerald)" />
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  color: 'var(--cyber-emerald)',
                  letterSpacing: '1.5px',
                  fontWeight: 700
                }}
              >
                In-Browser Proof-of-Work (Top Impact)
              </span>
            </HStack>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 900,
                color: 'var(--cyber-text-primary)',
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              Interactive Engineering Sandboxes
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--cyber-text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              Test production code live without leaving the page. Verify OpenZeppelin reentrancy exploit mitigation with real-time call-stacks, or execute the multi-agent LLM research pipeline.
            </p>
          </div>

          {/* Sandbox Switcher Bar (Mobile-First scrollable tabs) */}
          <HStack gap={2} wrap="wrap">
            <button
              onClick={() => setActiveTab('smart-contract')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                backgroundColor: activeTab === 'smart-contract' ? 'rgba(0, 245, 255, 0.15)' : 'var(--cyber-inner-box)',
                border: activeTab === 'smart-contract' ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)',
                color: activeTab === 'smart-contract' ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
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
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                backgroundColor: activeTab === 'ai-agent' ? 'rgba(139, 92, 246, 0.15)' : 'var(--cyber-inner-box)',
                border: activeTab === 'ai-agent' ? '1px solid var(--cyber-violet)' : '1px solid var(--cyber-border-subtle)',
                color: activeTab === 'ai-agent' ? 'var(--cyber-violet)' : 'var(--cyber-text-secondary)',
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
