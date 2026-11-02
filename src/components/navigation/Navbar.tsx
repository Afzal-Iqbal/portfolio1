import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sun, Moon, Menu, X, Briefcase } from 'lucide-react';
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
    { label: 'Honors', href: '#credentials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="navbar-capsule-island">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Brand Logo & Name */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#0B0F19',
              fontSize: '14px',
              boxShadow: '0 0 15px rgba(0, 245, 255, 0.4)',
              flexShrink: 0
            }}
          >
            MA
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 800,
                color: 'var(--cyber-text-primary)',
                letterSpacing: '-0.3px',
                lineHeight: 1.2
              }}
            >
              Afzal Iqbal
            </span>
            <span
              style={{
                fontSize: '10px',
                color: 'var(--cyber-cyan)',
                fontFamily: 'monospace',
                fontWeight: 600,
                lineHeight: 1
              }}
            >
              Web3 &bull; AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Centered, Clean & Spacious) */}
        <nav
          className="hide-on-tablet"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--cyber-text-secondary)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cyber-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--cyber-text-secondary)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
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
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Recruiter Fast-Track (Desktop) */}
          <button
            onClick={onOpenRecruiterDrawer}
            className="hide-on-tablet"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: 'var(--cyber-amber)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
            }}
          >
            <Briefcase size={13} />
            <span>Recruiter</span>
          </button>

          {/* Vibrant Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Muhammad_Afzal_Iqbal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
                border: 'none',
                color: '#0B0F19',
                fontWeight: 800,
                fontSize: '12px',
                cursor: 'pointer',
                boxShadow: '0 0 16px rgba(0, 245, 255, 0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 0 22px rgba(217, 70, 239, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 245, 255, 0.35)';
              }}
            >
              <Download size={13} />
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
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--cyber-border-subtle)',
              color: 'var(--cyber-text-primary)',
              cursor: 'pointer'
            }}
            className="show-on-mobile"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Floating Dropdown Menu on Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="navbar-capsule-dropdown"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--cyber-text-primary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  transition: 'background-color 0.2s ease'
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
                padding: '10px 12px',
                borderRadius: '10px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: 'var(--cyber-amber)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <Briefcase size={15} />
              <span>Open Recruiter Fast-Track</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
