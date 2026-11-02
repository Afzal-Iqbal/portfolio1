import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Phone, MapPin, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { getProfile } from '../../lib/content';

export const ContactSection: React.FC = () => {
  const profile = getProfile();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const phoneNumber = profile.socials.phone || '+92-304-2279512';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.socials.email}?subject=Contract / Engineering Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Scope & Message:\n${message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '64px 0 96px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Left Column: Direct Outreach & Verified Channels */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '20px',
                backgroundColor: 'rgba(0, 245, 255, 0.1)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                color: 'var(--cyber-cyan)',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'monospace',
                letterSpacing: '1px',
                marginBottom: '14px'
              }}
            >
              <MessageSquare size={13} />
              <span>DIRECT CHANNELS</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                color: 'var(--cyber-text-primary)',
                margin: '0 0 14px 0',
                letterSpacing: '-1px'
              }}
            >
              Let's Build Something <span className="text-gradient-vibrant">Exceptional</span>
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--cyber-text-secondary)', margin: '0 0 28px 0', lineHeight: 1.65, maxWidth: '540px' }}>
              Whether you are launching a DeFi protocol requiring battle-tested UUPS smart contracts,
              architecting an autonomous agentic LLM pipeline, or looking for an agile engineer with proven academic pedigree—I'd love to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Email with Instant Copy */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--cyber-bg-card)',
                  border: '1px solid var(--cyber-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 245, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyber-cyan)',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${profile.socials.email}`}
                      style={{
                        display: 'block',
                        color: 'var(--cyber-text-primary)',
                        fontSize: '14px',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      {profile.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'var(--cyber-inner-box)',
                    border: copiedEmail ? '1px solid #10B981' : '1px solid var(--cyber-border-subtle)',
                    color: copiedEmail ? '#10B981' : 'var(--cyber-text-secondary)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--cyber-bg-card)',
                  border: '1px solid var(--cyber-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyber-emerald)',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
                      style={{
                        display: 'block',
                        color: 'var(--cyber-text-primary)',
                        fontSize: '14px',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: copiedPhone ? 'rgba(16, 185, 129, 0.2)' : 'var(--cyber-inner-box)',
                    border: copiedPhone ? '1px solid #10B981' : '1px solid var(--cyber-border-subtle)',
                    color: copiedPhone ? '#10B981' : 'var(--cyber-text-secondary)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn & GitHub Direct Quick Links */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--cyber-bg-card)',
                    border: '1px solid var(--cyber-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--cyber-text-primary)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0A66C2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
                  }}
                >
                  <Linkedin size={20} color="#0A66C2" />
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>NETWORK</div>
                    <div style={{ fontSize: '13px', fontWeight: 700 }}>LinkedIn Profile</div>
                  </div>
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--cyber-bg-card)',
                    border: '1px solid var(--cyber-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--cyber-text-primary)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
                  }}
                >
                  <Github size={20} color="var(--cyber-cyan)" />
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>REPOSITORIES</div>
                    <div style={{ fontSize: '13px', fontWeight: 700 }}>GitHub Profile</div>
                  </div>
                </a>
              </div>

              {/* Location Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  fontSize: '12px',
                  color: 'var(--cyber-text-secondary)'
                }}
              >
                <MapPin size={15} color="var(--cyber-cyan)" />
                <span>Karachi, Pakistan &bull; Available for Global Remote Collaboration (PKT / UTC+5)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div
            className="glass-cyber-card"
            style={{
              padding: '32px',
              backgroundColor: 'var(--cyber-bg-card)',
              border: '1px solid var(--cyber-border-glow)',
              boxShadow: '0 10px 35px rgba(0, 245, 255, 0.1)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 0' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                  Message Draft Prepared!
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                  Your email client was initiated with your details pre-populated. Looking forward to speaking with you!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--cyber-inner-box)',
                    border: '1px solid var(--cyber-border-subtle)',
                    color: 'var(--cyber-text-primary)',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '19px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                    Send a Direct Transmission
                  </h3>
                  <span style={{ fontSize: '13px', color: 'var(--cyber-text-muted)' }}>
                    Guaranteed response within 24 hours.
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontWeight: 600 }}>
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alice Chen / Protocol Labs"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)',
                      color: 'var(--cyber-text-primary)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontWeight: 600 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)',
                      color: 'var(--cyber-text-primary)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontWeight: 600 }}>
                    Project Scope / Role Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, contract requirements, or technical challenges..."
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)',
                      color: 'var(--cyber-text-primary)',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyber-border-subtle)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '13px 24px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #00F5FF 0%, #D946EF 100%)',
                    color: '#0B0F19',
                    fontSize: '14px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(0, 245, 255, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 245, 255, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 245, 255, 0.35)';
                  }}
                >
                  <Send size={15} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
