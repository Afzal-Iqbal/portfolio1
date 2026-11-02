import React from 'react';
import { VStack, HStack, Button } from '@astryxdesign/core';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Download, Mail, ShieldCheck, Bot, Code2, Sparkles, Briefcase } from 'lucide-react';
import { VisitorBadge } from '../common/VisitorBadge';

interface HeroProps {
  onOpenRecruiterDrawer?: () => void;
  onOpenArchitectureModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterDrawer }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '56px 20px 48px 20px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* Background Ambient Radial Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.15) 0%, rgba(217, 70, 239, 0.12) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Animated Avatar with Pulsing Luminous Gradient Ring */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ position: 'relative', marginBottom: '24px' }}
        >
          <div
            className="hero-avatar-glow"
            style={{
              position: 'relative',
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 50%, #F59E0B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            <img
              src="/afzalpic.jpeg"
              alt="Muhammad Afzal Iqbal"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                backgroundColor: '#0F172A'
              }}
            />
            {/* Live Online / Contract Availability Dot */}
            <span
              style={{
                position: 'absolute',
                bottom: '6px',
                right: '6px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                border: '3px solid #0B0F19',
                boxShadow: '0 0 10px #10B981'
              }}
              title="Available for Contracts & Engineering Roles"
            />
          </div>
        </motion.div>

        {/* Identity & Status Badges Row */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          {/* Availability Pill */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '20px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: 'var(--cyber-emerald)',
              fontSize: '12px',
              fontWeight: 700
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
            Available for Contracts
          </span>

          {/* Scholarship Pill */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '20px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: 'var(--cyber-amber)',
              fontSize: '12px',
              fontWeight: 700
            }}
          >
            <Award size={14} />
            NED University 100% Merit Scholar
          </span>

          {/* Profile Visits Counter */}
          <VisitorBadge variant="pill" />
        </motion.div>

        {/* Dynamic Bold Typography Headline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            style={{
              fontSize: 'clamp(32px, 5.5vw, 54px)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              margin: '0 0 16px 0',
              color: 'var(--cyber-text-primary)'
            }}
          >
            Hi, I'm <span className="text-gradient-vibrant">Muhammad Afzal Iqbal</span>
            <br />
            <span style={{ fontSize: 'clamp(22px, 3.8vw, 38px)', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
              Web3 Smart Contract Architect &amp; AI Systems Engineer
            </span>
          </h1>
        </motion.div>

        {/* Crisp, Concise Elevator Pitch */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'var(--cyber-text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 28px auto'
          }}
        >
          Undergraduate in Computer Science at <strong style={{ color: 'var(--cyber-text-primary)' }}>NED University</strong> (Class of 2028).
          Specializing in audit-grade EVM smart contracts, UUPS upgradeable proxies, autonomous AI agent pipelines,
          and high-performance modern web architectures.
        </motion.p>

        {/* Core Pillars / Superpowers Matrix */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '36px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '12px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--cyber-text-primary)'
            }}
          >
            <ShieldCheck size={16} color="#00F5FF" />
            <span>Solidity &amp; UUPS Upgradeable Proxies</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '12px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--cyber-text-primary)'
            }}
          >
            <Bot size={16} color="#D946EF" />
            <span>Autonomous AI Agents &amp; SEPICP</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '12px',
              backgroundColor: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--cyber-text-primary)'
            }}
          >
            <Code2 size={16} color="#10B981" />
            <span>React 19 + Astryx UI Systems</span>
          </div>
        </motion.div>

        {/* High-Impact Action CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <button
            onClick={() => scrollTo('projects')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
              color: '#0B0F19',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 245, 255, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 26px rgba(0, 245, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 245, 255, 0.35)';
            }}
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              borderRadius: '12px',
              backgroundColor: 'var(--cyber-bg-card)',
              border: '1px solid var(--cyber-border-glow)',
              color: 'var(--cyber-text-primary)',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--cyber-border-glow)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={16} color="var(--cyber-cyan)" />
            <span>Get in Touch</span>
          </button>

          {onOpenRecruiterDrawer && (
            <button
              onClick={onOpenRecruiterDrawer}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: 'var(--cyber-amber)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.18)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Briefcase size={16} />
              <span>Recruiter Fast-Track</span>
            </button>
          )}

          <a
            href="/resume.pdf"
            download="Muhammad_Afzal_Iqbal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              border: '1px solid var(--cyber-border-subtle)',
              color: 'var(--cyber-text-secondary)',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--cyber-text-primary)';
              e.currentTarget.style.borderColor = 'var(--cyber-border-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--cyber-text-secondary)';
              e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
            }}
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
