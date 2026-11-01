import React from 'react';
import { VStack, HStack, Badge } from '@astryxdesign/core';
import { ArrowUp, Github, Linkedin, Mail, Shield, Brain } from 'lucide-react';
import { getProfile } from '../../lib/content';

export const Footer: React.FC = () => {
  const profile = getProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(0, 245, 255, 0.12)',
        backgroundColor: 'rgba(8, 11, 18, 0.95)',
        padding: '48px 24px 32px 24px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <VStack gap={5}>
          <HStack justify="between" align="center" wrap="wrap">
            <VStack gap={1}>
              <HStack gap={2} align="center">
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC' }}>
                  {profile.name}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 245, 255, 0.1)',
                    color: '#00F5FF',
                    fontFamily: 'monospace'
                  }}
                >
                  v2.0-Astryx
                </span>
              </HStack>
              <span style={{ fontSize: '13px', color: '#94A3B8' }}>
                NED University of Engineering &amp; Technology — Computer Science (2024 - 2028)
              </span>
            </VStack>

            <HStack gap={3} align="center">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                title="Email"
              >
                <Mail size={18} />
              </a>

              <button
                onClick={scrollToTop}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  color: '#94A3B8',
                  fontSize: '12px',
                  padding: '6px 12px',
                  cursor: 'pointer'
                }}
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </button>
            </HStack>
          </HStack>

          <HStack justify="between" align="center" wrap="wrap" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', fontSize: '12px', color: '#64748B' }}>
            <span>
              &copy; {new Date().getFullYear()} Muhammad Afzal Iqbal. All rights reserved. Full Academic Merit Scholar at NED University.
            </span>
            <span style={{ fontFamily: 'monospace' }}>
              Engineered with React 19 &bull; Meta Astryx UI (<code style={{ color: '#00F5FF' }}>@astryxdesign/core</code>) &bull; TypeScript &bull; StyleX
            </span>
          </HStack>
        </VStack>
      </div>
    </footer>
  );
};
