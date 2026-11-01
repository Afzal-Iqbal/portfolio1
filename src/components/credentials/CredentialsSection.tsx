import React from 'react';
import { VStack, HStack, Card, Badge, Button } from '@astryxdesign/core';
import { Award, GraduationCap, CheckCircle2, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { getCertifications, getProfile } from '../../lib/content';

export const CredentialsSection: React.FC = () => {
  const certs = getCertifications();
  const profile = getProfile();

  return (
    <section id="credentials" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <VStack gap={6}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Award size={16} color="#F59E0B" />
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  color: '#F59E0B',
                  letterSpacing: '1.5px',
                  fontWeight: 600
                }}
              >
                Academic Honors &amp; Verified Certifications
              </span>
            </HStack>

            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 800,
                color: '#F8FAFC',
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              Academic Excellence &amp; Industry Credentials
            </h2>

            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, maxWidth: '640px' }}>
              Academic rigor from Pakistan&apos;s premier engineering university combined with recognized international credentials in AI, Blockchain, and Full-Stack Systems.
            </p>
          </div>

          {/* Academic Honors Banner */}
          <Card
            className="glass-cyber-card"
            style={{
              padding: '28px',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 8px 32px rgba(245, 158, 11, 0.1)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <VStack gap={2}>
                <HStack gap={2} align="center">
                  <GraduationCap size={22} color="#F59E0B" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Prestigious Merit Scholarship
                  </span>
                </HStack>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#F8FAFC' }}>
                  {profile.university.name}
                </h3>
                <span style={{ fontSize: '14px', color: '#CBD5E1', fontWeight: 500 }}>
                  {profile.university.degree} ({profile.university.years})
                </span>
                <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8', lineHeight: 1.5 }}>
                  {profile.university.scholarship}. Awarded 100% full tuition scholarship based on entrance ranking and continuous academic excellence.
                </p>
              </VStack>

              {/* GPA Milestones */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '12px',
                  backgroundColor: 'rgba(10, 13, 20, 0.8)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {[
                  { sem: 'Sem 1', gpa: '3.09' },
                  { sem: 'Sem 2', gpa: '3.38' },
                  { sem: 'Sem 3', gpa: '3.20' },
                  { sem: 'Sem 4', gpa: '3.34' }
                ].map((item) => (
                  <div key={item.sem} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>{item.sem}</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8', marginTop: '2px' }}>{item.gpa}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Industry Certifications Grid */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '16px' }}>
              Industry &amp; Professional Certifications ({certs.length})
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '16px'
              }}
            >
              {certs.map((cert) => (
                <Card
                  key={cert.id}
                  className="glass-cyber-card"
                  style={{
                    padding: '20px',
                    backgroundColor: 'rgba(11, 15, 25, 0.8)',
                    border: cert.highlight ? '1px solid rgba(0, 245, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.07)'
                  }}
                >
                  <VStack gap={2}>
                    <HStack justify="between" align="center">
                      <span
                        style={{
                          fontSize: '11px',
                          color: cert.domain === 'web3' ? '#00F5FF' : cert.domain === 'ai' ? '#C084FC' : '#10B981',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontFamily: 'monospace'
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span style={{ fontSize: '11px', color: '#64748B' }}>{cert.issueDate}</span>
                    </HStack>

                    <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#F8FAFC' }}>
                      {cert.title}
                    </h4>

                    <HStack gap={1} wrap="wrap" style={{ marginTop: '4px' }}>
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '10px',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            color: '#94A3B8'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </HStack>
                  </VStack>
                </Card>
              ))}
            </div>
          </div>
        </VStack>
      </div>
    </section>
  );
};
