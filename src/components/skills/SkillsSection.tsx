import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ShieldCheck, Bot, Cpu, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { getCertifications, getProfile } from '../../lib/content';

export const SkillsSection: React.FC = () => {
  const profile = getProfile();
  const certs = getCertifications();

  const skillCards = [
    {
      title: 'Web3 & Smart Contract Security',
      subtitle: 'Audit-Grade EVM Protocol Architecture',
      color: '#00F5FF',
      glow: 'rgba(0, 245, 255, 0.25)',
      icon: <ShieldCheck size={24} color="#00F5FF" />,
      features: [
        'UUPS (ERC-1822) upgradeable proxies eliminating storage collisions',
        'Checks-Effects-Interactions (CEI) & OpenZeppelin reentrancy hardening',
        'Gas-optimized EVM storage slot alignment & unit test coverage',
        'Automated static analysis integration with Slither & Hardhat'
      ],
      tags: ['Solidity', 'Hardhat', 'OpenZeppelin', 'UUPS Proxies', 'ReentrancyGuard', 'Ethers.js', 'ERC-20/721', 'IPFS']
    },
    {
      title: 'Applied AI & Agentic Systems',
      subtitle: 'Multi-Agent LLM Orchestration & ML Pipelines',
      color: '#D946EF',
      glow: 'rgba(217, 70, 239, 0.25)',
      icon: <Bot size={24} color="#D946EF" />,
      features: [
        'Multi-agent pedagogical evaluation workflows (SEPICP platform)',
        'Hallucination-resistant RAG retrieval citing verified academic papers',
        'Predictive student performance & engagement trend forecasting',
        'Computer vision object detection with OpenCV & YOLOv8'
      ],
      tags: ['Agentic LLMs', 'Python', 'Prompt Engineering', 'Scikit-Learn', 'Pandas', 'YOLOv8', 'OpenCV', 'Django REST']
    },
    {
      title: 'Full-Stack & Cloud Systems',
      subtitle: 'High-Throughput Reactive Web Architectures',
      color: '#10B981',
      glow: 'rgba(16, 185, 129, 0.25)',
      icon: <Cpu size={24} color="#10B981" />,
      features: [
        'Design systems with React 19 and Meta Astryx UI layout components',
        'High-concurrency Oracle XE transactions with row-level locks',
        'Type-safe full-stack APIs in TypeScript, Node.js, and Express',
        'Cloud state synchronization with Supabase Row-Level Security'
      ],
      tags: ['React 19', 'Meta Astryx UI', 'TypeScript', 'Node.js', 'Express', 'Oracle XE', 'MySQL', 'Supabase', 'Docker']
    }
  ];

  return (
    <section id="skills" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: 'rgba(217, 70, 239, 0.1)',
              border: '1px solid rgba(217, 70, 239, 0.3)',
              color: 'var(--cyber-magenta)',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '1px',
              marginBottom: '12px'
            }}
          >
            <Sparkles size={13} />
            <span>CORE COMPETENCIES &amp; HONORS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 900,
              margin: '0 0 12px 0',
              letterSpacing: '-1px',
              color: 'var(--cyber-text-primary)'
            }}
          >
            Technical Arsenal &amp; <span className="text-gradient-vibrant">Academic Excellence</span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--cyber-text-secondary)',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            Grounded in rigorous computer science at NED University on a 100% full merit scholarship,
            combined with deep engineering depth across smart contract security, autonomous AI, and full-stack systems.
          </p>
        </div>

        {/* 1. The 3 Vibrant Core Superpower Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {skillCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              style={{
                backgroundColor: 'var(--cyber-bg-card)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${card.color}44`,
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${card.glow}`,
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = card.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = `${card.color}44`;
              }}
            >
              <div>
                {/* Header Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: `${card.color}15`,
                      border: `1px solid ${card.color}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--cyber-text-primary)',
                        letterSpacing: '-0.3px'
                      }}
                    >
                      {card.title}
                    </h3>
                    <span style={{ fontSize: '12px', color: card.color, fontWeight: 600 }}>
                      {card.subtitle}
                    </span>
                  </div>
                </div>

                {/* Key Invariants / Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {card.features.map((feature, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2
                        size={14}
                        color={card.color}
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--cyber-border-subtle)'
                }}
              >
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)',
                      color: 'var(--cyber-text-primary)',
                      fontFamily: 'monospace',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. NED University 100% Merit Scholarship & Academic Track Banner */}
        <div
          id="credentials"
          style={{
            backgroundColor: 'var(--cyber-bg-card)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '48px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 25px rgba(245, 158, 11, 0.15)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: 'var(--cyber-amber)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  <Award size={14} />
                  100% Merit Academic Scholarship
                </span>
              </div>

              <h3
                style={{
                  margin: '0 0 6px 0',
                  fontSize: '22px',
                  fontWeight: 900,
                  color: 'var(--cyber-text-primary)'
                }}
              >
                {profile.university.name}
              </h3>

              <div style={{ fontSize: '14px', color: 'var(--cyber-cyan)', fontWeight: 600, marginBottom: '10px' }}>
                {profile.university.degree} &bull; {profile.university.department} ({profile.university.years})
              </div>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)', maxWidth: '520px' }}>
                Awarded full 100% tuition coverage under the competitive <strong>NED Scholars</strong> initiative based on entrance performance and sustained academic excellence.
              </p>

              <div style={{ marginTop: '16px' }}>
                <a
                  href={profile.university.scholarshipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--cyber-amber)',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <span>Verify at NED Scholars Official Portal</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* GPA Milestones Breakdown */}
            <div
              style={{
                backgroundColor: 'var(--cyber-inner-box)',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid var(--cyber-border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 700 }}>
                  Semester GPA Progression
                </span>
                <span style={{ fontSize: '12px', color: 'var(--cyber-emerald)', fontWeight: 700 }}>
                  Cumulative GPA: 3.34
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  textAlign: 'center'
                }}
              >
                {[
                  { sem: 'Sem 1', gpa: '3.09' },
                  { sem: 'Sem 2', gpa: '3.38' },
                  { sem: 'Sem 3', gpa: '3.20' },
                  { sem: 'Sem 4', gpa: '3.34' }
                ].map((item) => (
                  <div
                    key={item.sem}
                    style={{
                      padding: '12px 6px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--cyber-bg-card)',
                      border: '1px solid var(--cyber-border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
                      {item.sem}
                    </div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 900,
                        color: 'var(--cyber-cyan)',
                        marginTop: '4px'
                      }}
                    >
                      {item.gpa}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Verified Industry Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3
              style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: 800,
                color: 'var(--cyber-text-primary)'
              }}
            >
              Verified Industry Certifications ({certs.length})
            </h3>
            <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
              ConsenSys &bull; Google &bull; DeepLearning.AI &bull; IBM
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {certs.map((cert) => {
              const domainColor =
                cert.domain === 'web3'
                  ? '#00F5FF'
                  : cert.domain === 'ai'
                  ? '#D946EF'
                  : cert.domain === 'data'
                  ? '#F59E0B'
                  : '#10B981';

              return (
                <div
                  key={cert.id}
                  style={{
                    backgroundColor: 'var(--cyber-bg-card)',
                    borderRadius: '14px',
                    padding: '18px',
                    border: cert.highlight ? `1px solid ${domainColor}55` : '1px solid var(--cyber-border-subtle)',
                    boxShadow: cert.highlight ? `0 4px 16px ${domainColor}15` : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          color: domainColor,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontFamily: 'monospace'
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>
                        {cert.issueDate}
                      </span>
                    </div>

                    <h4
                      style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--cyber-text-primary)',
                        lineHeight: 1.3
                      }}
                    >
                      {cert.title}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '10px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--cyber-inner-box)',
                          color: 'var(--cyber-text-secondary)',
                          fontFamily: 'monospace'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
