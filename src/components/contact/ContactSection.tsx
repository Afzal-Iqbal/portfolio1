import React, { useState } from 'react';
import { Card, VStack, HStack, Button, Badge } from '@astryxdesign/core';
import { Mail, Send, Linkedin, Github, Globe, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { getProfile } from '../../lib/content';

export const ContactSection: React.FC = () => {
  const profile = getProfile();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.socials.email}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '64px 0 96px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Left Column: Direct Outreach Info */}
          <VStack gap={4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <HStack gap={2} align="center">
                <Mail size={16} color="#00F5FF" />
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    color: '#00F5FF',
                    letterSpacing: '1.5px',
                    fontWeight: 600
                  }}
                >
                  Initiate Direct Communication
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
                Let&apos;s Build Something Impactful
              </h2>

              <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, lineHeight: 1.6 }}>
                Whether you need a secure smart contract protocol audited and deployed, an agentic AI pipeline launched, or a high-velocity full-stack engineer for your team—reach out directly.
              </p>
            </div>

            <VStack gap={3}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(0, 245, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#00F5FF" />
                </div>
                <VStack gap={0}>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>DIRECT EMAIL</span>
                  <a href={`mailto:${profile.socials.email}`} style={{ color: '#F8FAFC', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                    {profile.socials.email}
                  </a>
                </VStack>
              </div>

              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(10, 102, 194, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin size={18} color="#0A66C2" />
                </div>
                <VStack gap={0}>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>PROFESSIONAL LINKEDIN</span>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: '#F8FAFC', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                    muhammad-afzal-iqbal-4b26b8323
                  </a>
                </VStack>
              </div>

              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} color="#10B981" />
                </div>
                <VStack gap={0}>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>LOCATION &amp; TIMEZONE</span>
                  <span style={{ color: '#F8FAFC', fontSize: '14px', fontWeight: 600 }}>
                    Karachi, Pakistan • PKT (UTC+5)
                  </span>
                </VStack>
              </div>
            </VStack>
          </VStack>

          {/* Right Column: Direct Contact Form */}
          <Card
            className="glass-cyber-card"
            style={{
              padding: '32px',
              backgroundColor: 'rgba(11, 15, 25, 0.95)',
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}
          >
            {submitted ? (
              <VStack gap={3} align="center" style={{ padding: '32px 0', textAlign: 'center' }}>
                <CheckCircle2 size={42} color="#10B981" />
                <h3 style={{ margin: 0, fontSize: '20px', color: '#F8FAFC' }}>Message Draft Created</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#94A3B8' }}>
                  Your email client has been opened with your message. Thank you for connecting!
                </p>
                <Button label="Send Another Message" variant="secondary" onClick={() => setSubmitted(false)} />
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>
                    Send a Direct Transmission
                  </h3>

                  <VStack gap={1}>
                    <label style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Your Name / Company</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Satoshi Nakamoto / DeFi Protocol"
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </VStack>

                  <VStack gap={1}>
                    <label style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </VStack>

                  <VStack gap={1}>
                    <label style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Project Scope or Inquiry</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your smart contract architecture requirements or engineering opportunities..."
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </VStack>

                  <Button
                    label="Transmit Message"
                    variant="primary"
                    icon={<Send size={15} />}
                    type="submit"
                  />
                </VStack>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
