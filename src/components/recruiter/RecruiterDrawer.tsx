import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { X, Download, Copy, Check, Mail, Phone, Linkedin, ExternalLink, GraduationCap, Award, Briefcase } from 'lucide-react';
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
          backgroundColor: '#0D111A',
          borderLeft: '1px solid rgba(0, 245, 255, 0.25)',
          padding: '32px 28px',
          overflowY: 'auto',
          boxShadow: '-12px 0 40px rgba(0, 0, 0, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <VStack gap={5}>
          {/* Drawer Header */}
          <HStack justify="between" align="center" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px' }}>
            <VStack gap={1}>
              <HStack gap={2} align="center">
                <Briefcase size={18} color="#00F5FF" />
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#F8FAFC' }}>
                  Recruiter Fast-Track
                </h3>
              </HStack>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                30-Second Executive Summary &amp; Direct Downloads
              </span>
            </VStack>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#94A3B8',
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
              border: '1px solid rgba(0, 245, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <VStack gap={0}>
              <strong style={{ fontSize: '14px', color: '#00F5FF' }}>Official Academic Resume (PDF)</strong>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>Verified NED Scholars format (2.1 MB)</span>
            </VStack>

            <Button
              label="Download PDF"
              variant="primary"
              icon={<Download size={14} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            />
          </div>

          {/* Quick Facts Matrix */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Candidate Fast Facts
            </span>
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '14px'
              }}
            >
              <VStack gap={2}>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Full Name:</span>
                  <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{profile.name}</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Institution:</span>
                  <span style={{ color: '#F8FAFC', fontWeight: 600 }}>NED University (Karachi)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Degree &amp; Class:</span>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>BS Computer Science (2024 - 2028)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Academic Standing:</span>
                  <span style={{ color: '#10B981', fontWeight: 600 }}>GPA: 3.34 (100% Merit Scholar)</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Work Authorization:</span>
                  <span style={{ color: '#F8FAFC' }}>Open to Remote Global Contracts &amp; Roles</span>
                </HStack>
                <HStack justify="between" style={{ fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>Languages:</span>
                  <span style={{ color: '#F8FAFC' }}>English (Professional), German (A1/A2), Urdu</span>
                </HStack>
              </VStack>
            </div>
          </VStack>

          {/* Core Hiring Strengths */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Why Muhammad Afzal Stands Out
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#00F5FF' }}>✓</span>
                <span><strong>Specialized Web3 Security:</strong> Production familiarity with UUPS proxies, storage layout collision avoidance, and reentrancy mitigation.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#C084FC' }}>✓</span>
                <span><strong>Agentic AI Engineering:</strong> Hands-on builder of multi-agent LLM systems with real research paper cross-referencing ([SEPICP](file:///home/afzal/afzal/resume_afzal.docx.pdf)).</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#10B981' }}>✓</span>
                <span><strong>Academic Excellence:</strong> 100% merit-based scholarship awardee at NED University with high GPA progression.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#38BDF8' }}>✓</span>
                <span><strong>Teaching &amp; Mentorship:</strong> Active CS instructor at Standard Education System with proven ability to communicate complex concepts clearly.</span>
              </div>
            </div>
          </VStack>

          {/* Quick-Copy Contacts */}
          <VStack gap={2}>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <HStack gap={2} align="center">
                  <Mail size={14} color="#00F5FF" />
                  <span style={{ fontSize: '13px', color: '#E2E8F0', fontFamily: 'monospace' }}>{profile.socials.email}</span>
                </HStack>
                <button
                  onClick={() => handleCopy(profile.socials.email, 'email')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <HStack gap={2} align="center">
                  <Linkedin size={14} color="#0A66C2" />
                  <span style={{ fontSize: '13px', color: '#E2E8F0' }}>linkedin.com/in/muhammad-afzal-iqbal-4b26b8323</span>
                </HStack>
                <button
                  onClick={() => window.open(profile.socials.linkedin, '_blank')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <HStack gap={2} align="center">
                  <Phone size={14} color="#10B981" />
                  <span style={{ fontSize: '13px', color: '#E2E8F0', fontFamily: 'monospace' }}>{profile.socials.phone}</span>
                </HStack>
                <button
                  onClick={() => handleCopy(profile.socials.phone || '', 'phone')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
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
