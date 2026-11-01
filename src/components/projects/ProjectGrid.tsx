import React, { useState } from 'react';
import { VStack, HStack } from '@astryxdesign/core';
import { Layers, Shield, Brain, Zap } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import { getProjects } from '../../lib/content';
import { ProjectCard } from './ProjectCard';
import type { PersonaType } from '../../types/content';

export const ProjectGrid: React.FC = () => {
  const { persona } = usePersona();
  const [filter, setFilter] = useState<string>('auto');

  const activePersona: PersonaType | undefined =
    filter === 'auto'
      ? persona
      : filter === 'all'
      ? 'convergence'
      : (filter as PersonaType);

  const projects = getProjects(activePersona);

  return (
    <section id="projects" style={{ padding: '48px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Layers size={16} color="var(--cyber-cyan)" />
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  color: 'var(--cyber-cyan)',
                  letterSpacing: '1.5px',
                  fontWeight: 700
                }}
              >
                Production Systems &amp; Protocols
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
              Featured Engineering Showcases
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--cyber-text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              Deep technical breakdowns of decentralized smart contracts, agentic AI pipelines, and enterprise architectures—auditable, tested, and battle-proven.
            </p>
          </div>

          {/* Filter Pills */}
          <HStack gap={2} wrap="wrap" align="center">
            <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)', marginRight: '6px' }}>Filter:</span>
            {[
              { id: 'auto', label: `Persona Active (${persona})`, icon: <Zap size={12} /> },
              { id: 'all', label: 'All Projects', icon: <Layers size={12} /> },
              { id: 'web3', label: 'Web3 & Smart Contracts', icon: <Shield size={12} /> },
              { id: 'ai', label: 'Applied AI & ML', icon: <Brain size={12} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filter === item.id ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)',
                  backgroundColor: filter === item.id ? 'rgba(0, 245, 255, 0.12)' : 'var(--cyber-inner-box)',
                  color: filter === item.id ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </HStack>

          {/* Projects Responsive Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              width: '100%'
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </VStack>
      </div>
    </section>
  );
};
