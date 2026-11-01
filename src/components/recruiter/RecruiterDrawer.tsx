import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { X, Download, Copy, Check, Mail, Phone, Linkedin, ExternalLink, GraduationCap, Award, Briefcase } from 'lucide-react';
import { VisitorBadge } from '../common/VisitorBadge';
import { getProfile } from '../../lib/content';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({ isOpen, onClose }) => {
  const profile = getProfile();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'flex-end',
        transition: 'opacity 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '100%',
          backgroundColor: 'var(--cyber-bg-surface)',
          borderLeft: '1px solid var(--cyber-border-subtle)',
          padding: '32px 24px',
          overflowY: 'auto',
          boxShadow: '-12px 0 40px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <VStack gap={5}>
          {/* Drawer Header */}
          <HStack justify="between" align="center" style={{ borderBottom: '1px solid var(--cyber-border-subtle)', paddingBottom: '16px' }}>
            <HStack gap={3} align="center">
              <img
                src="/afzalpic.jpeg"
                alt="Muhammad Afzal Iqbal"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '2px solid var(--cyber-cyan)'
                }}
              />
              <VStack gap={0}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                  Recruiter Fast-Track
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)' }}>
                  Executive Candidate Summary &bull; 30s View
                </span>
              </VStack>
            </HStack>

            <button
              onClick={onClose}
              style={{
                background: 'var(--cyber-inner-box)',
                border: '1px solid var(--cyber-border-subtle)',
                color: 'var(--cyber-text-primary)',
                borderRadius: '8px',
                padding: '6px',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </HStack>

          {/* Download Official PDF Resume Action */}
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 245, 255, 0.08)',
              border: '1px solid var(--cyber-border-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <VStack gap={0}>
              <strong style={{ fontSize: '14px', color: 'var(--cyber-cyan)' }}>Current Resume: Muhammad Afzal (PDF)</strong>
              <span style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)' }}>Updated direct download</span>
            </VStack>

            <Button
              label="Download PDF"
              variant="primary"
              icon={<Download size={14} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            />
          </div>

          {/* Profile Visiting Traction */}
          <VisitorBadge variant="card" />

          {/* Quick Facts Matrix */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Candidate Fast Facts
            </span>
            <div
              style={{
                backgroundColor: 'var(--cyber-inner-box)',
                borderRadius: '8px',
                border: '1px solid var(--cyber-border-subtle)',
                padding: '14px'
              }}
            >
              <VStack gap={2}>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Candidate:</span>
                  <span style={{ color: 'var(--cyber-text-primary)', fontWeight: 600 }}>{profile.name}</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>University:</span>
                  <span style={{ color: 'var(--cyber-text-primary)', fontWeight: 600 }}>NED University of Engineering &amp; Technology</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Degree &amp; Graduation:</span>
                  <span style={{ color: 'var(--cyber-cyan)', fontWeight: 600 }}>BS Computer Science (Class of 2028)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Scholarship Standing:</span>
                  <span style={{ color: 'var(--cyber-emerald)', fontWeight: 600 }}>100% Merit Academic Scholarship (NED Scholars)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Current GPA:</span>
                  <span style={{ color: 'var(--cyber-text-primary)', fontWeight: 600 }}>3.34 (Above Average / Sem 4)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Role Availability:</span>
                  <span style={{ color: 'var(--cyber-text-primary)' }}>Remote Global Engineering Contracts &amp; Roles</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyber-text-muted)' }}>Languages:</span>
                  <span style={{ color: 'var(--cyber-text-primary)' }}>English (Professional), German (A1/A2), Urdu</span>
                </HStack>
              </VStack>
            </div>
          </VStack>

          {/* Core Hiring Strengths */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Why Muhammad Afzal Stands Out
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--cyber-text-secondary)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--cyber-cyan)' }}>✓</span>
                <span><strong>Specialized Web3 Security:</strong> Production expertise with UUPS upgradeable proxies, storage slot safety, and OpenZeppelin reentrancy mitigation.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--cyber-violet)' }}>✓</span>
                <span><strong>Agentic AI Engineering:</strong> Architect of multi-agent LLM reasoning systems connecting live student feedback to academic research papers (SEPICP).</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--cyber-emerald)' }}>✓</span>
                <span><strong>Academic Excellence:</strong> 100% merit-based scholarship recipient at NED University with high GPA progression.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--cyber-cyan)' }}>✓</span>
                <span><strong>Teaching &amp; Mentorship:</strong> Active CS instructor at Standard Education System with proven talent for demystifying complex algorithmic thinking.</span>
              </div>
            </div>
          </VStack>

          {/* Quick-Copy Contacts */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Direct Contact Channels
            </span>
            <VStack gap={2}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)'
                }}
              >
                <HStack gap={2} align="center">
                  <Mail size={14} color="#00F5FF" />
                  <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)', fontFamily: 'monospace' }}>{profile.socials.email}</span>
                </HStack>
                <button
                  onClick={() => handleCopy(profile.socials.email, 'email')}
                  style={{ background: 'none', border: 'none', color: 'var(--cyber-text-secondary)', cursor: 'pointer' }}
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)'
                }}
              >
                <HStack gap={2} align="center">
                  <Linkedin size={14} color="#0A66C2" />
                  <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)' }}>linkedin.com/in/muhammad-afzal-iqbal-4b26b8323</span>
                </HStack>
                <button
                  onClick={() => window.open(profile.socials.linkedin, '_blank')}
                  style={{ background: 'none', border: 'none', color: 'var(--cyber-text-secondary)', cursor: 'pointer' }}
                  title="Open LinkedIn"
                >
                  <ExternalLink size={14} />
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)'
                }}
              >
                <HStack gap={2} align="center">
                  <Phone size={14} color="#10B981" />
                  <span style={{ fontSize: '13px', color: 'var(--cyber-text-primary)', fontFamily: 'monospace' }}>{profile.socials.phone}</span>
                </HStack>
                <button
                  onClick={() => handleCopy(profile.socials.phone || '', 'phone')}
                  style={{ background: 'none', border: 'none', color: 'var(--cyber-text-secondary)', cursor: 'pointer' }}
                  title="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                </button>
              </div>
            </VStack>
          </VStack>
        </VStack>
      </div>
    </div>
  );
};
