import React, { useState } from 'react';
import { VStack, HStack, Card, Badge } from '@astryxdesign/core';
import { History, Building2, MapPin, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { getStories, getVisits } from '../../lib/content';
import { StoryCard } from './StoryCard';

export const StoriesTimeline: React.FC = () => {
  const [tab, setTab] = useState<'stories' | 'visits'>('stories');
  const stories = getStories();
  const visits = getVisits();

  return (
    <section id="stories" style={{ padding: '48px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <History size={16} color="var(--cyber-cyan)" />
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
                Immutable Changelog &amp; Field Work
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
              Day Stories &amp; Industrial Observations
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--cyber-text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              A transparent devlog of smart contract deployments, research benchmarks, and engineering observation tours.
            </p>
          </div>

          {/* Tab Selector */}
          <HStack gap={2} wrap="wrap">
            <button
              onClick={() => setTab('stories')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: tab === 'stories' ? 'rgba(0, 245, 255, 0.15)' : 'var(--cyber-inner-box)',
                border: tab === 'stories' ? '1px solid var(--cyber-cyan)' : '1px solid var(--cyber-border-subtle)',
                color: tab === 'stories' ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <Terminal size={15} />
              <span>Day Stories &amp; DevLogs ({stories.length})</span>
            </button>

            <button
              onClick={() => setTab('visits')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: tab === 'visits' ? 'rgba(16, 185, 129, 0.15)' : 'var(--cyber-inner-box)',
                border: tab === 'visits' ? '1px solid var(--cyber-emerald)' : '1px solid var(--cyber-border-subtle)',
                color: tab === 'visits' ? 'var(--cyber-emerald)' : 'var(--cyber-text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <Building2 size={15} />
              <span>Industrial Visits &amp; Tours ({visits.length})</span>
            </button>
          </HStack>

          {/* Stories List */}
          {tab === 'stories' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}

          {/* Industrial Visits List */}
          {tab === 'visits' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
              {visits.map((visit) => (
                <Card
                  key={visit.id}
                  className="glass-cyber-card"
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--cyber-bg-card)',
                    border: '1px solid var(--cyber-border-subtle)'
                  }}
                >
                  <VStack gap={3}>
                    <HStack justify="between" align="center">
                      <HStack gap={1} align="center">
                        <Building2 size={15} color="var(--cyber-emerald)" />
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--cyber-emerald)', fontFamily: 'monospace' }}>
                          {visit.host}
                        </span>
                      </HStack>
                      <HStack gap={1} align="center">
                        <Calendar size={12} color="var(--cyber-text-muted)" />
                        <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)' }}>{visit.date}</span>
                      </HStack>
                    </HStack>

                    <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                      {visit.title}
                    </h4>

                    <HStack gap={1} align="center">
                      <MapPin size={13} color="var(--cyber-text-muted)" />
                      <span style={{ fontSize: '12px', color: 'var(--cyber-text-muted)' }}>{visit.location}</span>
                    </HStack>

                    <VStack gap={1} style={{ marginTop: '4px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontWeight: 700 }}>KEY ENGINEERING OBSERVATIONS:</span>
                      {visit.keyLearnings.map((learning, i) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--cyber-text-secondary)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={13} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </VStack>
                  </VStack>
                </Card>
              ))}
            </div>
          )}
        </VStack>
      </div>
    </section>
  );
};
