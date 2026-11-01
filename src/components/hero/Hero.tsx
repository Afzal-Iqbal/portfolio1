import React, { useState } from 'react';
import { VStack, HStack, Card, Button } from '@astryxdesign/core';
import { Award, ArrowRight, Download, CheckCircle2, Terminal as TerminalIcon, Box } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import { TerminalWidget } from '../terminal/TerminalWidget';
import { Hero3DObject } from '../canvas/Hero3DObject';
import { getProfile } from '../../lib/content';

interface HeroProps {
  onOpenRecruiterDrawer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterDrawer }) => {
  const { persona, isWeb3, isAi } = usePersona();
  const profile = getProfile();
  const [interactiveMode, setInteractiveMode] = useState<'3d' | 'terminal'>('3d');

  const getHeadline = () => {
    if (isWeb3) {
      return (
        <>
          Architecting <span className="text-gradient-web3">Audit-Grade Smart Contracts</span> &amp; Decentralized Protocols
        </>
      );
    }
    if (isAi) {
      return (
        <>
          Engineering <span className="text-gradient-ai">Agentic LLM Pipelines</span> &amp; Intelligent Multi-Modal Systems
        </>
      );
    }
    return (
      <>
        Where <span className="text-gradient-web3">Web3 Security</span> Meets{' '}
        <span className="text-gradient-ai">Agentic AI Engineering</span>
      </>
    );
  };

  const getSubheadline = () => {
    if (isWeb3) {
      return 'Specializing in UUPS upgradeable proxies, reentrancy-hardened vaults, and gas-optimized EVM smart contracts. Verified 100% test coverage and OpenZeppelin security standards.';
    }
    if (isAi) {
      return 'Orchestrating agentic LLM workflows that translate complex user problems into evidence-backed, research-cited pedagogical solutions. Creator of the SEPICP platform.';
    }
    return 'Undergraduate Computer Science student at NED University (class of 2028, full merit scholarship). Bridging the gap between blockchain trustlessness and autonomous agent intelligence.';
  };

  return (
    <section style={{ padding: '32px 0 48px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* Top Bar on Mobile & Desktop: Afzal's Portrait Card + Quick Profile Badge */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
          {/* Left Column: Personal Photo Card & Strategic Elevator Pitch */}
          <VStack gap={4}>
            {/* Candidate Identity Header with Afzal's Real Photo */}
            <HStack gap={3} align="center">
              <div
                style={{
                  position: 'relative',
                  width: '68px',
                  height: '68px',
                  borderRadius: '16px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-violet))',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.35)',
                  flexShrink: 0
                }}
              >
                <img
                  src="/afzalpic.jpeg"
                  alt="Muhammad Afzal Iqbal"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '13px',
                    objectFit: 'cover'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    border: '2px solid #0A0D14',
                    boxShadow: '0 0 8px #10B981'
                  }}
                  title="Online • Available for Contracts"
                />
              </div>

              <VStack gap={0}>
                <HStack gap={2} align="center">
                  <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: 'var(--cyber-text-primary)', letterSpacing: '-0.5px' }}>
                    Muhammad Afzal Iqbal
                  </h2>
                </HStack>
                <span style={{ fontSize: '13px', color: 'var(--cyber-cyan)', fontWeight: 600 }}>
                  Web3 Smart Contract Architect &amp; AI Systems Engineer
                </span>
                <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
                  NED University (2024 - 2028) &bull; GPA 3.34
                </span>
              </VStack>
            </HStack>

            {/* Status Pills */}
            <HStack gap={2} wrap="wrap" align="center">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--cyber-emerald)',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    boxShadow: '0 0 8px #10B981'
                  }}
                />
                Available for Remote Contracts
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: 'var(--cyber-amber)',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <Award size={13} />
                100% Merit Academic Scholarship
              </span>
            </HStack>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--cyber-text-primary)',
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              {getHeadline()}
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--cyber-text-secondary)',
                margin: 0,
                maxWidth: '560px'
              }}
            >
              {getSubheadline()}
            </p>

            {/* Key Strengths Matrix */}
            <HStack gap={3} wrap="wrap" align="center">
              <HStack gap={1} align="center">
                <CheckCircle2 size={15} color="#10B981" />
                <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)', fontWeight: 600 }}>
                  UUPS Proxy Security
                </span>
              </HStack>
              <HStack gap={1} align="center">
                <CheckCircle2 size={15} color="#00F5FF" />
                <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)', fontWeight: 600 }}>
                  Agentic AI (SEPICP)
                </span>
              </HStack>
              <HStack gap={1} align="center">
                <CheckCircle2 size={15} color="#8B5CF6" />
                <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)', fontWeight: 600 }}>
                  React 19 + Astryx UI
                </span>
              </HStack>
            </HStack>

            {/* CTA Buttons */}
            <HStack gap={3} wrap="wrap" align="center" style={{ paddingTop: '8px' }}>
              <Button
                label="Launch Proof-of-Work"
                variant="primary"
                icon={<ArrowRight size={15} />}
                onClick={() => {
                  document.getElementById('sandboxes')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
              <Button
                label="Recruiter Fast-Track"
                variant="secondary"
                onClick={onOpenRecruiterDrawer}
              />
              <Button
                label="Download Resume"
                variant="ghost"
                icon={<Download size={15} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              />
            </HStack>
          </VStack>

          {/* Right Column: Toggleable 3D Object or Interactive Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* View Switcher: 3D Object vs Terminal */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                backgroundColor: 'var(--cyber-inner-box)',
                padding: '4px',
                borderRadius: '8px',
                border: '1px solid var(--cyber-border-subtle)',
                marginBottom: '16px'
              }}
            >
              <button
                onClick={() => setInteractiveMode('3d')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: interactiveMode === '3d' ? 'var(--cyber-bg-card)' : 'transparent',
                  color: interactiveMode === '3d' ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                  boxShadow: interactiveMode === '3d' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                <Box size={14} />
                <span>Interactive 3D Core</span>
              </button>

              <button
                onClick={() => setInteractiveMode('terminal')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: interactiveMode === 'terminal' ? 'var(--cyber-bg-card)' : 'transparent',
                  color: interactiveMode === 'terminal' ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                  boxShadow: interactiveMode === 'terminal' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                <TerminalIcon size={14} />
                <span>Interactive CLI Shell</span>
              </button>
            </div>

            {/* Interactive Component Area */}
            <div style={{ width: '100%', minHeight: '340px', display: 'flex', justifyContent: 'center' }}>
              {interactiveMode === '3d' ? (
                <div
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    height: '420px',
                    borderRadius: '16px',
                    backgroundColor: 'var(--cyber-bg-card)',
                    border: '1px solid var(--cyber-border-subtle)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Hero3DObject />
                </div>
              ) : (
                <TerminalWidget />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
