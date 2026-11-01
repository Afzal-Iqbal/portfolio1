import React, { useState } from 'react';
import { HStack, VStack, Button, Badge } from '@astryxdesign/core';
import { FileText, Sun, Moon, Menu, X, Shield, Brain, Zap, Download } from 'lucide-react';
import { PersonaSwitcher } from './PersonaSwitcher';
import { VisitorBadge } from '../common/VisitorBadge';
import { usePersona } from '../../context/PersonaContext';
import { useTheme } from '../../context/ThemeContext';
import type { PersonaType } from '../../types/content';

interface NavbarProps {
  onOpenRecruiterDrawer: () => void;
  onOpenArchitectureModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterDrawer, onOpenArchitectureModal }) => {
  const { persona, setPersona } = usePersona();
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPersonaBadge = () => {
    switch (persona) {
      case 'web3':
        return { label: 'Web3 Protocol Mode', color: '#00F5FF' };
      case 'ai':
        return { label: 'Agentic AI Mode', color: '#C084FC' };
      default:
        return { label: 'Full Spectrum', color: '#10B981' };
    }
  };

  const badge = getPersonaBadge();

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          backgroundColor: 'var(--cyber-nav-bg)',
          borderBottom: '1px solid var(--cyber-border-subtle)',
          padding: '12px 16px',
          transition: 'all 0.25s ease'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <HStack justify="between" align="center" style={{ width: '100%' }}>
            {/* Brand Logo & Title */}
            <HStack gap={3} align="center">
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-violet))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  fontSize: '17px',
                  boxShadow: '0 0 16px rgba(0, 245, 255, 0.3)',
                  flexShrink: 0
                }}
              >
                MA
              </div>

              <VStack gap={0}>
                <HStack gap={2} align="center">
                  <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--cyber-text-primary)', letterSpacing: '-0.3px' }}>
                    Muhammad Afzal
                  </span>
                  <span
                    className="hide-on-mobile"
                    style={{
                      fontSize: '10px',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(0, 245, 255, 0.1)',
                      color: badge.color,
                      fontWeight: 700,
                      border: `1px solid ${badge.color}33`
                    }}
                  >
                    {badge.label}
                  </span>
                </HStack>
                <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
                  NED University CS &apos;28
                </span>
              </VStack>
            </HStack>

            {/* Desktop Navigation Links */}
            <HStack gap={4} align="center" style={{ display: 'none' }} className="hide-on-mobile">
              <button
                onClick={onOpenArchitectureModal}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--cyber-cyan)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'opacity 0.2s ease'
                }}
              >
                Architecture
              </button>
              <a href="#sandboxes" style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                Proof-of-Work
              </a>
              <a href="#projects" style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                Projects
              </a>
              <a href="#credentials" style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                Credentials
              </a>
              <a href="#stories" style={{ color: 'var(--cyber-text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                DevLogs
              </a>
            </HStack>

            {/* Desktop Actions */}
            <HStack gap={3} align="center">
              {/* Profile Visiting Count */}
              <div className="hide-on-mobile">
                <VisitorBadge variant="minimal" />
              </div>

              {/* Desktop Persona Switcher */}
              <div className="hide-on-mobile">
                <PersonaSwitcher />
              </div>

              {/* Light / Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)',
                  color: 'var(--cyber-text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {isDark ? <Sun size={16} color="#F59E0B" /> : <Moon size={16} color="#475569" />}
              </button>

              {/* Recruiter Fast-Track CTA */}
              <div className="hide-on-mobile">
                <Button
                  label="Recruiter Fast-Track"
                  variant="primary"
                  icon={<FileText size={14} />}
                  onClick={onOpenRecruiterDrawer}
                />
              </div>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open mobile navigation menu"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)',
                  color: 'var(--cyber-text-primary)',
                  cursor: 'pointer'
                }}
                className="mobile-hamburger-btn"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </HStack>
          </HStack>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 64px)',
            backgroundColor: 'var(--cyber-bg-surface)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            borderBottom: '1px solid var(--cyber-border-subtle)'
          }}
        >
          <VStack gap={4}>
            {/* Mobile Persona Switcher Header */}
            <VStack gap={2}>
              <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
                Engineering Persona
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {[
                  { id: 'web3', label: 'Web3', icon: <Shield size={12} /> },
                  { id: 'convergence', label: 'Hybrid', icon: <Zap size={12} /> },
                  { id: 'ai', label: 'AI/ML', icon: <Brain size={12} /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setPersona(item.id as PersonaType);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '10px 4px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: persona === item.id ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)',
                      backgroundColor: persona === item.id ? 'rgba(0, 245, 255, 0.15)' : 'var(--cyber-inner-box)',
                      color: persona === item.id ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)'
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </VStack>

            {/* Profile Visiting Count Card on Mobile */}
            <VisitorBadge variant="card" />

            {/* Quick Navigation Anchors */}
            <VStack gap={2} style={{ borderTop: '1px solid var(--cyber-border-subtle)', paddingTop: '16px' }}>
              <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
                System Architecture
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenArchitectureModal?.();
                }}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 245, 255, 0.1)',
                  border: '1px solid rgba(0, 245, 255, 0.3)',
                  color: 'var(--cyber-cyan)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>3D Architecture Blueprint (Behind the Scenes)</span>
                <span>&rarr;</span>
              </button>

              <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace', marginTop: '8px' }}>
                Jump to Section
              </span>
              {[
                { label: 'Interactive Sandboxes (Proof-of-Work)', href: '#sandboxes' },
                { label: 'Featured Architecture Showcases', href: '#projects' },
                { label: 'Academic Honors & Certifications', href: '#credentials' },
                { label: 'Day Stories & Industrial Visits', href: '#stories' },
                { label: 'Contact & Direct Outreach', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--cyber-inner-box)',
                    color: 'var(--cyber-text-primary)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </VStack>
          </VStack>

          {/* Mobile Bottom Action Buttons */}
          <VStack gap={2} style={{ borderTop: '1px solid var(--cyber-border-subtle)', paddingTop: '16px' }}>
            <Button
              label="Recruiter Fast-Track (30s View)"
              variant="primary"
              icon={<FileText size={15} />}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterDrawer();
              }}
            />
            <Button
              label="Download Resume (PDF)"
              variant="secondary"
              icon={<Download size={15} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            />
          </VStack>
        </div>
      )}

      {/* Global CSS to show mobile hamburger button on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-nav-links {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
