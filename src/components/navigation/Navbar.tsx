import React from 'react';
import { HStack, VStack, Button, Badge } from '@astryxdesign/core';
import { FileText, Sparkles } from 'lucide-react';
import { PersonaSwitcher } from './PersonaSwitcher';
import { usePersona } from '../../context/PersonaContext';

interface NavbarProps {
  onOpenRecruiterDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterDrawer }) => {
  const { persona } = usePersona();

  const getPersonaBadge = () => {
    switch (persona) {
      case 'web3':
        return { label: 'Web3 Protocol Mode', color: '#00F5FF' };
      case 'ai':
        return { label: 'Agentic AI Mode', color: '#C084FC' };
      default:
        return { label: 'Full Spectrum Mode', color: '#10B981' };
    }
  };

  const badge = getPersonaBadge();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(10, 13, 20, 0.82)',
        borderBottom: '1px solid rgba(0, 245, 255, 0.12)',
        padding: '12px 24px',
        transition: 'border-color 0.3s ease'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <HStack justify="between" align="center" style={{ width: '100%' }}>
          {/* Brand Identity */}
          <HStack gap={3} align="center">
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: '#0A0D14',
                fontSize: '17px',
                boxShadow: '0 0 16px rgba(0, 245, 255, 0.3)'
              }}
            >
              MA
            </div>

            <VStack gap={0}>
              <HStack gap={2} align="center">
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC', letterSpacing: '-0.3px' }}>
                  Muhammad Afzal
                </span>
                <span style={{
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 245, 255, 0.1)',
                  color: badge.color,
                  fontWeight: 600,
                  border: `1px solid ${badge.color}33`
                }}>
                  {badge.label}
                </span>
              </HStack>
              <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>
                NED University CS Scholar &apos;28
              </span>
            </VStack>
          </HStack>

          {/* Navigation Anchors */}
          <HStack gap={4} align="center" style={{ display: 'none' }} className="desktop-nav-links">
            <a href="#projects" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Projects
            </a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Live Sandboxes
            </a>
            <a href="#stories" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Day Stories
            </a>
            <a href="#credentials" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Credentials
            </a>
          </HStack>

          {/* Persona Switcher & Fast-Track Recruiter Button */}
          <HStack gap={3} align="center">
            <PersonaSwitcher />

            <Button
              label="Recruiter Fast-Track"
              variant="primary"
              icon={<FileText size={15} />}
              onClick={onOpenRecruiterDrawer}
            />
          </HStack>
        </HStack>
      </div>
    </header>
  );
};
