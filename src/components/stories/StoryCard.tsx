import React from 'react';
import { Card, VStack, HStack } from '@astryxdesign/core';
import { Calendar } from 'lucide-react';
import type { DayStory } from '../../types/content';

interface StoryCardProps {
  story: DayStory;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Card
      className="glass-cyber-card"
      style={{
        padding: '20px',
        backgroundColor: 'var(--cyber-bg-card)',
        border: '1px solid var(--cyber-border-subtle)',
        width: '100%'
      }}
    >
      <VStack gap={3}>
        <HStack justify="between" align="center">
          <HStack gap={2} align="center">
            <span
              style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: '11px',
                color: 'var(--cyber-cyan)',
                fontWeight: 700,
                backgroundColor: 'rgba(0, 245, 255, 0.1)',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(0, 245, 255, 0.25)'
              }}
            >
              Block #{story.blockNumber}
            </span>
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                color: story.category === 'web3' ? 'var(--cyber-cyan)' : story.category === 'ai' ? 'var(--cyber-violet)' : 'var(--cyber-emerald)',
                fontWeight: 700
              }}
            >
              [{story.category}]
            </span>
          </HStack>

          <HStack gap={1} align="center">
            <Calendar size={12} color="var(--cyber-text-muted)" />
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
              {story.date}
            </span>
          </HStack>
        </HStack>

        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
          {story.title}
        </h4>

        <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)' }}>
          {story.content}
        </p>

        <HStack gap={1} wrap="wrap">
          {story.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'var(--cyber-inner-box)',
                color: 'var(--cyber-text-muted)',
                fontFamily: 'monospace'
              }}
            >
              #{tag}
            </span>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
};
