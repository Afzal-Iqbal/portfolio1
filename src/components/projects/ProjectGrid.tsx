import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Shield, Brain, Sparkles, Terminal } from 'lucide-react';
import { getProjects } from '../../lib/content';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import type { Project } from '../../types/content';

type FilterType = 'all' | 'web3' | 'ai' | 'fullstack';

export const ProjectGrid: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = getProjects();

  const filteredProjects = allProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web3') return p.domain === 'web3' || p.domain === 'convergence';
    if (filter === 'ai') return p.domain === 'ai' || p.domain === 'convergence';
    if (filter === 'fullstack') return p.domain === 'fullstack';
    return true;
  });

  const filterTabs: { id: FilterType; label: string; count: number; icon: React.ReactNode }[] = [
    {
      id: 'all',
      label: 'All Projects',
      count: allProjects.length,
      icon: <Layers size={13} />
    },
    {
      id: 'web3',
      label: 'Web3 & Blockchain',
      count: allProjects.filter((p) => p.domain === 'web3' || p.domain === 'convergence').length,
      icon: <Shield size={13} />
    },
    {
      id: 'ai',
      label: 'Applied AI & ML',
      count: allProjects.filter((p) => p.domain === 'ai' || p.domain === 'convergence').length,
      icon: <Brain size={13} />
    },
    {
      id: 'fullstack',
      label: 'Full-Stack Systems',
      count: allProjects.filter((p) => p.domain === 'fullstack').length,
      icon: <Terminal size={13} />
    }
  ];

  return (
    <section id="projects" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: 'rgba(0, 245, 255, 0.08)',
              border: '1px solid rgba(0, 245, 255, 0.25)',
              color: 'var(--cyber-cyan)',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '1px',
              marginBottom: '12px'
            }}
          >
            <Sparkles size={13} />
            <span>PORTFOLIO SHOWCASE</span>
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
            Featured <span className="text-gradient-vibrant">Engineering Projects</span>
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
            Production-grade Web3 smart contracts, agentic AI pipelines, and high-concurrency systems.
            Click any card to inspect full system architecture, security invariants, and performance metrics.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)',
                  backgroundColor: isActive ? 'rgba(0, 245, 255, 0.12)' : 'var(--cyber-inner-box)',
                  color: isActive ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                  boxShadow: isActive ? '0 0 15px rgba(0, 245, 255, 0.2)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '1px 6px',
                    borderRadius: '10px',
                    backgroundColor: isActive ? 'rgba(0, 245, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#FFFFFF' : 'var(--cyber-text-muted)'
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Animated Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
            width: '100%'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
