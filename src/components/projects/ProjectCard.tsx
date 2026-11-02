import React from 'react';
import { Shield, Brain, Zap, Github, ExternalLink, ArrowUpRight, Code2 } from 'lucide-react';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const getDomainDetails = () => {
    switch (project.domain) {
      case 'web3':
        return {
          icon: <Shield size={13} color="#00F5FF" />,
          color: '#00F5FF',
          label: 'Web3 & Security',
          bg: 'rgba(0, 245, 255, 0.12)'
        };
      case 'ai':
        return {
          icon: <Brain size={13} color="#D946EF" />,
          color: '#D946EF',
          label: 'Applied AI & ML',
          bg: 'rgba(217, 70, 239, 0.12)'
        };
      case 'convergence':
        return {
          icon: <Zap size={13} color="#10B981" />,
          color: '#10B981',
          label: 'Web3 × AI Convergence',
          bg: 'rgba(16, 185, 129, 0.12)'
        };
      default:
        return {
          icon: <Code2 size={13} color="#38BDF8" />,
          color: '#38BDF8',
          label: 'Full-Stack Systems',
          bg: 'rgba(56, 189, 248, 0.12)'
        };
    }
  };

  const domain = getDomainDetails();
  const primaryMetric = project.metrics && project.metrics.length > 0 ? project.metrics[0] : null;

  return (
    <div className="project-card-visual" style={{ cursor: 'pointer' }} onClick={() => onSelectProject(project)}>
      {/* 1. Visual Image Banner with Screenshot */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <div className="project-image-overlay" />

        {/* Floating Domain & Featured Pill on Image */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: '20px',
              backgroundColor: 'rgba(11, 15, 25, 0.85)',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${domain.color}55`,
              color: domain.color,
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'monospace'
            }}
          >
            {domain.icon}
            <span>{domain.label}</span>
          </span>

          {project.featured && (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.9)',
                color: '#0B0F19',
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)'
              }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Floating Key Impact Metric Badge */}
        {primaryMetric && (
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '12px',
              zIndex: 2,
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: 'rgba(11, 15, 25, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: 900, color: domain.color }}>
              {primaryMetric.value}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-secondary)', fontWeight: 600 }}>
              {primaryMetric.label}
            </span>
          </div>
        )}
      </div>

      {/* 2. Content Body */}
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          gap: '14px'
        }}
      >
        <div>
          <h3
            style={{
              margin: '0 0 6px 0',
              fontSize: '18px',
              fontWeight: 800,
              color: 'var(--cyber-text-primary)',
              lineHeight: 1.3
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--cyber-text-secondary)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10px',
                padding: '2px 7px',
                borderRadius: '4px',
                backgroundColor: 'var(--cyber-inner-box)',
                border: '1px solid var(--cyber-border-subtle)',
                color: 'var(--cyber-text-muted)',
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'var(--cyber-inner-box)',
                color: domain.color,
                fontFamily: 'monospace',
                fontWeight: 700
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* 3. Action Footer Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid var(--cyber-border-subtle)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)',
                  color: 'var(--cyber-text-secondary)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="View Source on GitHub"
              >
                <Github size={13} />
                <span>Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--cyber-emerald)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Live Application Demo"
              >
                <ExternalLink size={13} />
                <span>Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onSelectProject(project)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 245, 255, 0.08)',
              border: '1px solid rgba(0, 245, 255, 0.3)',
              color: 'var(--cyber-cyan)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 245, 255, 0.18)';
              e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 245, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.3)';
            }}
          >
            <span>Architecture</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
