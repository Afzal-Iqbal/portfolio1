import React, { useState } from 'react';
import { VStack, HStack, Badge } from '@astryxdesign/core';
import { Layers, Shield, Brain, Zap } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import { getProjects } from '../../lib/content';
import { ProjectCard } from './ProjectCard';
import type { PersonaType } from '../../types/content';

export const ProjectGrid: React.FC = () => {
  const { persona } = usePersona();
  const [filter, setFilter] = useState<string>('auto');

  // If user selected a manual filter, use it; otherwise follow persona
  const activePersona: PersonaType | undefined =
    filter === 'auto'
      ? persona
      : filter === 'all'
      ? 'convergence'
      : (filter as PersonaType);

  const projects = getProjects(activePersona);

  return (
    <section id="projects" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <VStack gap={6}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <Layers size={16} color="#00F5FF" />
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
                Production Systems &amp; Protocols
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
              Featured Engineering Showcases
            </h2>

            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, maxWidth: '640px' }}>
              Deep technical breakdowns of decentralized smart contracts, agentic AI pipelines, and enterprise architectures—auditable, tested, and battle-proven.
            </p>
          </div>

          {/* Filter Pills */}
          <HStack gap={2} wrap="wrap" align="center">
            <span style={{ fontSize: '12px', color: '#64748B', marginRight: '6px' }}>Filter by domain:</span>
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
                  border: filter === item.id ? '1px solid #00F5FF' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: filter === item.id ? 'rgba(0, 245, 255, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                  color: filter === item.id ? '#00F5FF' : '#94A3B8',
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
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
