import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { Shield, Brain, Zap, Github, Layers, Lock, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'security'>('overview');

  const getDomainIcon = () => {
    switch (project.domain) {
      case 'web3':
        return <Shield size={14} color="#00F5FF" />;
      case 'ai':
        return <Brain size={14} color="#C084FC" />;
      case 'convergence':
        return <Zap size={14} color="#10B981" />;
      default:
        return <Layers size={14} color="#38BDF8" />;
    }
  };

  return (
    <Card
      className="glass-cyber-card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'var(--cyber-bg-card)',
        border: '1px solid var(--cyber-border-subtle)'
      }}
    >
      <VStack gap={4}>
        {/* Card Header */}
        <VStack gap={2}>
          <HStack justify="between" align="center">
            <HStack gap={2} align="center">
              {getDomainIcon()}
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: project.domain === 'web3' ? 'var(--cyber-cyan)' : project.domain === 'ai' ? 'var(--cyber-violet)' : 'var(--cyber-emerald)',
                  fontWeight: 700
                }}
              >
                {project.domain}
              </span>
            </HStack>

            {project.featured && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  color: 'var(--cyber-amber)',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}
              >
                Featured
              </span>
            )}
          </HStack>

          <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
            {project.title}
          </h3>
          <span style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', fontWeight: 500 }}>
            {project.subtitle}
          </span>
        </VStack>

        {/* Tab Navigator within Card */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            backgroundColor: 'var(--cyber-inner-box)',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid var(--cyber-border-subtle)'
          }}
        >
          {(['overview', 'architecture', 'security'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'capitalize',
                background: activeTab === tab ? 'var(--cyber-bg-card)' : 'transparent',
                color: activeTab === tab ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                border: activeTab === tab ? '1px solid var(--cyber-cyan)' : '1px solid transparent',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        {activeTab === 'overview' && (
          <VStack gap={3}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)' }}>
              {project.summary}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <HStack gap={2} wrap="wrap">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--cyber-cyan)' }}>{m.value}</div>
                    <div style={{ fontSize: '10px', color: 'var(--cyber-text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </HStack>
            )}

            <HStack gap={1} wrap="wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--cyber-inner-box)',
                    color: 'var(--cyber-text-muted)',
                    fontFamily: 'monospace'
                  }}
                >
                  {tag}
                </span>
              ))}
            </HStack>
          </VStack>
        )}

        {activeTab === 'architecture' && (
          <VStack gap={3}>
            <div style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
              <strong style={{ color: '#F43F5E', display: 'block', marginBottom: '2px' }}>The Problem:</strong>
              {project.architecture.problem}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--cyber-emerald)', display: 'block', marginBottom: '2px' }}>The Solution Architecture:</strong>
              {project.architecture.solution}
            </div>

            <VStack gap={1}>
              <strong style={{ fontSize: '12px', color: 'var(--cyber-text-muted)' }}>Key Innovations:</strong>
              {project.architecture.keyInnovations.map((item, i) => (
                <div key={i} style={{ fontSize: '12px', color: 'var(--cyber-text-primary)', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--cyber-cyan)' }}>▹</span>
                  <span>{item}</span>
                </div>
              ))}
            </VStack>
          </VStack>
        )}

        {activeTab === 'security' && (
          <VStack gap={3}>
            {project.architecture.contractOrModelType && (
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '12px',
                  color: 'var(--cyber-emerald)',
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}
              >
                Pattern: {project.architecture.contractOrModelType}
              </div>
            )}

            {project.architecture.securityOrPerfPatterns && (
              <VStack gap={1}>
                <strong style={{ fontSize: '12px', color: 'var(--cyber-text-muted)' }}>Security &amp; Performance Hardening:</strong>
                {project.architecture.securityOrPerfPatterns.map((sec, i) => (
                  <div key={i} style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)', display: 'flex', gap: '6px' }}>
                    <Lock size={12} color="#10B981" style={{ marginTop: '3px' }} />
                    <span>{sec}</span>
                  </div>
                ))}
              </VStack>
            )}

            <VStack gap={1}>
              <strong style={{ fontSize: '12px', color: 'var(--cyber-text-muted)' }}>Stack Components:</strong>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {project.architecture.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      color: 'var(--cyber-violet)',
                      fontFamily: 'monospace'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </VStack>
          </VStack>
        )}
      </VStack>

      {/* Card Action Footer */}
      <HStack justify="between" align="center" style={{ borderTop: '1px solid var(--cyber-border-subtle)', paddingTop: '16px', marginTop: '16px' }}>
        {project.githubUrl ? (
          <Button
            label="Source Code"
            variant="ghost"
            icon={<Github size={14} />}
            onClick={() => window.open(project.githubUrl, '_blank')}
          />
        ) : <div />}

        {project.liveUrl ? (
          <Button
            label="Live Demo"
            variant="primary"
            icon={<ExternalLink size={14} />}
            onClick={() => window.open(project.liveUrl, '_blank')}
          />
        ) : (
          <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
            Production Tested
          </span>
        )}
      </HStack>
    </Card>
  );
};
