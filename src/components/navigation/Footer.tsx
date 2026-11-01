import React from 'react';
import { VStack, HStack, Badge } from '@astryxdesign/core';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { getProfile } from '../../lib/content';

export const Footer: React.FC = () => {
  const profile = getProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--cyber-border-subtle)',
        backgroundColor: 'var(--cyber-nav-bg)',
        padding: '36px 20px 24px 20px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <VStack gap={4}>
          <HStack justify="between" align="center" wrap="wrap">
            <VStack gap={1}>
              <HStack gap={2} align="center">
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                  {profile.name}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 245, 255, 0.1)',
                    color: 'var(--cyber-cyan)',
                    fontFamily: 'monospace',
                    fontWeight: 700
                  }}
                >
                  v2.2-Astryx-3D
                </span>
              </HStack>
              <span style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)' }}>
                NED University of Engineering &amp; Technology &bull; Computer Science (2024 - 2028)
              </span>
            </VStack>

            <HStack gap={3} align="center">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none' }}
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none' }}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none' }}
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
                  background: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)',
                  borderRadius: '6px',
                  color: 'var(--cyber-text-primary)',
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

          <HStack justify="between" align="center" wrap="wrap" style={{ borderTop: '1px solid var(--cyber-border-subtle)', paddingTop: '16px', fontSize: '12px', color: 'var(--cyber-text-muted)' }}>
            <span>
              &copy; {new Date().getFullYear()} Muhammad Afzal Iqbal. Full Academic Merit Scholar at NED University.
            </span>
            <span style={{ fontFamily: 'monospace' }}>
              React 19 &bull; Meta Astryx UI &bull; Three.js &bull; StyleX &bull; TypeScript
            </span>
          </HStack>
        </VStack>
      </div>
    </footer>
  );
};
