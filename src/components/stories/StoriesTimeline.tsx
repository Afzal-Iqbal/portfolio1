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
    <section id="stories" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <VStack gap={5}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <HStack gap={2} align="center">
              <History size={16} color="#00F5FF" />
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
                Immutable Changelog &amp; Field Work
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
              Day Stories &amp; Industrial Observations
            </h2>

            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, maxWidth: '640px' }}>
              Proof of continuous execution. A transparent micro-devlog of smart contract deployments, research breakthroughs, and technical industrial visits.
            </p>
          </div>

          {/* Tab Selector */}
          <HStack gap={3}>
            <button
              onClick={() => setTab('stories')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: tab === 'stories' ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                border: tab === 'stories' ? '1px solid #00F5FF' : '1px solid rgba(255, 255, 255, 0.1)',
                color: tab === 'stories' ? '#00F5FF' : '#94A3B8',
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
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: tab === 'visits' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                border: tab === 'visits' ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                color: tab === 'visits' ? '#10B981' : '#94A3B8',
                transition: 'all 0.15s ease'
              }}
            >
              <Building2 size={15} />
              <span>Industrial Visits &amp; Tours ({visits.length})</span>
            </button>
          </HStack>

          {/* Stories List */}
          {tab === 'stories' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}

          {/* Industrial Visits List */}
          {tab === 'visits' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
              {visits.map((visit) => (
                <Card
                  key={visit.id}
                  className="glass-cyber-card"
                  style={{
                    padding: '24px',
                    backgroundColor: 'rgba(11, 15, 25, 0.85)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <VStack gap={3}>
                    <HStack justify="between" align="center">
                      <HStack gap={1} align="center">
                        <Building2 size={15} color="#10B981" />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#34D399', fontFamily: 'monospace' }}>
                          {visit.host}
                        </span>
                      </HStack>
                      <HStack gap={1} align="center">
                        <Calendar size={12} color="#64748B" />
                        <span style={{ fontSize: '11px', color: '#64748B' }}>{visit.date}</span>
                      </HStack>
                    </HStack>

                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>
                      {visit.title}
                    </h4>

                    <HStack gap={1} align="center">
                      <MapPin size={13} color="#94A3B8" />
                      <span style={{ fontSize: '12px', color: '#94A3B8' }}>{visit.location}</span>
                    </HStack>

                    <VStack gap={1} style={{ marginTop: '4px' }}>
                      <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>KEY ENGINEERING OBSERVATIONS:</span>
                      {visit.keyLearnings.map((learning, i) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#CBD5E1', lineHeight: 1.5 }}>
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
