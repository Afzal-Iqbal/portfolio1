import React from 'react';
import { VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { Shield, Brain, Zap, Award, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import { TerminalWidget } from '../terminal/TerminalWidget';
import { getProfile } from '../../lib/content';

interface HeroProps {
  onOpenRecruiterDrawer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterDrawer }) => {
  const { persona, isWeb3, isAi } = usePersona();
  const profile = getProfile();

  const getHeadline = () => {
    if (isWeb3) {
      return (
        <>
          Architecting <span className="text-gradient-web3">Audit-Grade Smart Contracts</span> & Decentralized Protocols
        </>
      );
    }
    if (isAi) {
      return (
        <>
          Engineering <span className="text-gradient-ai">Agentic LLM Pipelines</span> & Intelligent Multi-Modal Systems
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
    <section style={{ padding: '48px 0 32px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Left Column: Personal Brand & Value Proposition */}
          <VStack gap={5}>
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
                  color: '#34D399',
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
                Available for Contract Roles
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(0, 245, 255, 0.1)',
                  border: '1px solid rgba(0, 245, 255, 0.25)',
                  color: '#00F5FF',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <Award size={13} />
                NED Scholars Merit Awardee
              </span>
            </HStack>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#F8FAFC',
                margin: 0,
                letterSpacing: '-1.5px'
              }}
            >
              {getHeadline()}
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: '#94A3B8',
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
                <span style={{ fontSize: '13px', color: '#CBD5E1', fontWeight: 500 }}>
                  UUPS & Proxy Security
                </span>
              </HStack>
              <HStack gap={1} align="center">
                <CheckCircle2 size={15} color="#00F5FF" />
                <span style={{ fontSize: '13px', color: '#CBD5E1', fontWeight: 500 }}>
                  Agentic LLM Pipelines
                </span>
              </HStack>
              <HStack gap={1} align="center">
                <CheckCircle2 size={15} color="#8B5CF6" />
                <span style={{ fontSize: '13px', color: '#CBD5E1', fontWeight: 500 }}>
                  React 19 + Astryx UI
                </span>
              </HStack>
            </HStack>

            {/* CTA Buttons */}
            <HStack gap={3} wrap="wrap" align="center" style={{ paddingTop: '8px' }}>
              <Button
                label="Explore Live Sandboxes"
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
                label="PDF Resume"
                variant="ghost"
                icon={<Download size={15} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              />
            </HStack>
          </VStack>

          {/* Right Column: Live Interactive HUD Terminal */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
