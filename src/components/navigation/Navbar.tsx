import React, { useState } from 'react';
import { HStack, VStack, Button } from '@astryxdesign/core';
import { Download, Sun, Moon, Menu, X, Sparkles, Briefcase } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenRecruiterDrawer: () => void;
  onOpenArchitectureModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterDrawer }) => {
  const { toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Superpowers', href: '#skills' },
    { label: 'Honors & Certs', href: '#credentials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'var(--cyber-nav-bg)',
        borderBottom: '1px solid var(--cyber-border-subtle)',
        padding: '14px 24px',
        transition: 'all 0.25s ease'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <HStack justify="between" align="center" style={{ width: '100%' }}>
          {/* Brand Logo & Name */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <HStack gap={3} align="center">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: '#0B0F19',
                  fontSize: '18px',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0
                }}
              >
                MA
              </div>

              <VStack gap={0}>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: 'var(--cyber-text-primary)',
                    letterSpacing: '-0.3px',
                    lineHeight: 1.2
                  }}
                >
                  Muhammad Afzal
                </span>
                <span style={{ fontSize: '11px', color: '#00F5FF', fontFamily: 'monospace', fontWeight: 600 }}>
                  Web3 &amp; AI Systems Engineer
                </span>
              </VStack>
            </HStack>
          </a>

          {/* Desktop Navigation Links (Clean & Spacious) */}
          <HStack gap={5} align="center" style={{ display: 'none' }} className="hide-on-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--cyber-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00F5FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cyber-text-secondary)';
                }}
              >
                {link.label}
              </a>
            ))}
          </HStack>

          {/* Action CTAs */}
          <HStack gap={3} align="center">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--cyber-border-subtle)',
                color: isDark ? '#F59E0B' : '#64748B',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title="Toggle theme"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Recruiter Fast-Track (Desktop) */}
            <div className="hide-on-mobile">
              <Button
                label="Recruiter View"
                variant="secondary"
                icon={<Briefcase size={14} />}
                onClick={onOpenRecruiterDrawer}
              />
            </div>

            {/* Vibrant Resume Download Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
                  border: 'none',
                  color: '#0B0F19',
                  fontWeight: 800,
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.35)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(217, 70, 239, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.35)';
                }}
              >
                <Download size={15} />
                <span>Resume</span>
              </button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--cyber-border-subtle)',
                color: 'var(--cyber-text-primary)',
                cursor: 'pointer'
              }}
              className="show-on-mobile"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </HStack>
        </HStack>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--cyber-border-subtle)',
              marginTop: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--cyber-text-primary)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '8px 0'
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterDrawer();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--cyber-border-subtle)',
                color: '#00F5FF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Briefcase size={16} />
              <span>Open Recruiter Fast-Track</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
