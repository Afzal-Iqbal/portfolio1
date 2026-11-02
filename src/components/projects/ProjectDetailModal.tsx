import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, Cpu, Lock, CheckCircle2, Award } from 'lucide-react';
import type { Project } from '../../types/content';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getDomainColor = () => {
    switch (project.domain) {
      case 'web3':
        return '#00F5FF';
      case 'ai':
        return '#D946EF';
      case 'convergence':
        return '#10B981';
      default:
        return '#38BDF8';
    }
  };

  const domainColor = getDomainColor();

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            backgroundColor: 'var(--cyber-bg-card)',
            border: `1px solid ${domainColor}55`,
            borderRadius: '20px',
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px ${domainColor}25`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header Image Banner with Close Button */}
          <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#0A0D14', overflow: 'hidden' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.2) 0%, rgba(11, 15, 25, 0.92) 100%)'
              }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(11, 15, 25, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(11, 15, 25, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Domain & Title Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '24px',
                right: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    backgroundColor: `${domainColor}22`,
                    border: `1px solid ${domainColor}66`,
                    color: domainColor,
                    fontWeight: 700
                  }}
                >
                  {project.domain}
                </span>

                {project.architecture.contractOrModelType && (
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--cyber-text-secondary)',
                      fontFamily: 'monospace'
                    }}
                  >
                    • {project.architecture.contractOrModelType}
                  </span>
                )}
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(20px, 3.2vw, 26px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.5px'
                }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Body Content */}
          <div
            style={{
              padding: '24px',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            {/* Overview / Subtitle */}
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)' }}>
              {project.summary}
            </p>

            {/* Key Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: '1 1 200px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 900, color: domainColor }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 600 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Solution Architecture Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: '#EF4444', fontWeight: 700, fontSize: '13px' }}>
                  <span>The Problem</span>
                </div>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)' }}>
                  {project.architecture.problem}
                </p>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: '#10B981', fontWeight: 700, fontSize: '13px' }}>
                  <span>The Solution Architecture</span>
                </div>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)' }}>
                  {project.architecture.solution}
                </p>
              </div>
            </div>

            {/* Key Innovations */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <Cpu size={15} color={domainColor} />
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                  Key Innovations
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.architecture.keyInnovations.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color={domainColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Hardening if present */}
            {project.architecture.securityOrPerfPatterns && project.architecture.securityOrPerfPatterns.length > 0 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <Lock size={15} color="#10B981" />
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                    Security &amp; Hardening Patterns
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.architecture.securityOrPerfPatterns.map((sec, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#10B981', fontWeight: 800, fontSize: '14px' }}>✓</span>
                      <span style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                        {sec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: 700, color: 'var(--cyber-text-muted)' }}>
                Technologies Used:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)',
                      color: 'var(--cyber-text-primary)',
                      fontFamily: 'monospace'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid var(--cyber-border-subtle)',
              backgroundColor: 'var(--cyber-inner-box)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--cyber-border-subtle)',
                  color: 'var(--cyber-text-primary)',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            ) : <div />}

            <div style={{ display: 'flex', gap: '10px' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
                    color: '#0B0F19',
                    fontWeight: 700,
                    fontSize: '13px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0, 245, 255, 0.3)'
                  }}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={onClose}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--cyber-bg-card)',
                  border: '1px solid var(--cyber-border-subtle)',
                  color: 'var(--cyber-text-secondary)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
