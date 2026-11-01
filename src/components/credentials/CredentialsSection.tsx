import React from 'react';
import { VStack, HStack, Card, Badge } from '@astryxdesign/core';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { getCertifications, getProfile } from '../../lib/content';

export const CredentialsSection: React.FC = () => {
  const certs = getCertifications();
  const profile = getProfile();

  return (
    <section id="credentials" style={{ padding: '48px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Award size={16} color="var(--cyber-amber)" />
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  color: 'var(--cyber-amber)',
                  letterSpacing: '1.5px',
                  fontWeight: 700
                }}
              >
                Academic Honors &amp; Verified Certifications
              </span>
            </HStack>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 900,
                color: 'var(--cyber-text-primary)',
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              Academic Excellence &amp; Industry Credentials
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--cyber-text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              Academic foundation from Pakistan&apos;s premier engineering university combined with recognized credentials in AI, Blockchain, and Full-Stack Systems.
            </p>
          </div>

          {/* Academic Honors Banner */}
          <Card
            className="glass-cyber-card"
            style={{
              padding: '24px',
              backgroundColor: 'var(--cyber-bg-card)',
              border: '1px solid var(--cyber-border-subtle)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'center' }}>
              <VStack gap={2}>
                <HStack gap={2} align="center">
                  <GraduationCap size={22} color="var(--cyber-amber)" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--cyber-amber)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    100% Merit Scholarship Award
                  </span>
                </HStack>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                  {profile.university.name}
                </h3>
                <span style={{ fontSize: '13px', color: 'var(--cyber-cyan)', fontWeight: 600 }}>
                  {profile.university.degree} ({profile.university.years})
                </span>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                  {profile.university.scholarship}. Awarded full tuition scholarship based on entrance ranking and continuous academic excellence.
                </p>
              </VStack>

              {/* GPA Milestones */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid var(--cyber-border-subtle)'
                }}
              >
                {[
                  { sem: 'Sem 1', gpa: '3.09' },
                  { sem: 'Sem 2', gpa: '3.38' },
                  { sem: 'Sem 3', gpa: '3.20' },
                  { sem: 'Sem 4', gpa: '3.34' }
                ].map((item) => (
                  <div key={item.sem} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>{item.sem}</div>
                    <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--cyber-cyan)', marginTop: '2px' }}>{item.gpa}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Industry Certifications Grid */}
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--cyber-text-primary)', marginBottom: '14px' }}>
              Industry Certifications &amp; Training ({certs.length})
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '14px'
              }}
            >
              {certs.map((cert) => (
                <Card
                  key={cert.id}
                  className="glass-cyber-card"
                  style={{
                    padding: '18px',
                    backgroundColor: 'var(--cyber-bg-card)',
                    border: cert.highlight ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)'
                  }}
                >
                  <VStack gap={2}>
                    <HStack justify="between" align="center">
                      <span
                        style={{
                          fontSize: '11px',
                          color: cert.domain === 'web3' ? 'var(--cyber-cyan)' : cert.domain === 'ai' ? 'var(--cyber-violet)' : 'var(--cyber-emerald)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontFamily: 'monospace'
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>{cert.issueDate}</span>
                    </HStack>

                    <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'var(--cyber-text-primary)' }}>
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
                            backgroundColor: 'var(--cyber-inner-box)',
                            color: 'var(--cyber-text-secondary)'
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
