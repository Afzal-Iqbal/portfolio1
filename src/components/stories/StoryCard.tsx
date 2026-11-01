import React from 'react';
import { Card, VStack, HStack, Badge } from '@astryxdesign/core';
import { GitCommit, Tag, Calendar } from 'lucide-react';
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
        backgroundColor: 'rgba(11, 15, 25, 0.85)',
        border: '1px solid rgba(0, 245, 255, 0.15)',
        width: '100%'
      }}
    >
      <VStack gap={3}>
        <HStack justify="between" align="center">
          <HStack gap={2} align="center">
            <span
              style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: '12px',
                color: '#00F5FF',
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
                color: story.category === 'web3' ? '#00F5FF' : story.category === 'ai' ? '#C084FC' : '#10B981',
                fontWeight: 600
              }}
            >
              [{story.category}]
            </span>
          </HStack>

          <HStack gap={1} align="center">
            <Calendar size={12} color="#64748B" />
            <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'monospace' }}>
              {story.date}
            </span>
          </HStack>
        </HStack>

        <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#F8FAFC' }}>
          {story.title}
        </h4>

        <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#CBD5E1' }}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: '#94A3B8',
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
