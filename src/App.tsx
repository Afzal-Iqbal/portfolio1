import React from 'react';
import { VStack, HStack, Card, Badge, Button } from '@astryxdesign/core';
import { Terminal, Shield, Cpu, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <VStack gap={6}>
        {/* Foundation Header using Astryx components */}
        <HStack justify="between" align="center" style={{ width: '100%', borderBottom: '1px solid rgba(0, 245, 255, 0.15)', paddingBottom: '20px' }}>
          <HStack gap={3} align="center">
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#0A0D14',
              fontSize: '18px'
            }}>
              M
            </div>
            <VStack gap={0}>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#E2E8F0', letterSpacing: '-0.5px' }}>
                MUHAMMAD AFZAL IQBAL
              </h1>
              <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: 'monospace' }}>
                NED University CS Merit Scholar (2024-2028)
              </span>
            </VStack>
          </HStack>

          <HStack gap={2} align="center">
            <Badge label="Web3 Protocol Engineer" variant="neutral" icon={<Shield size={14} color="#00F5FF" />} />
            <Badge label="Applied AI Architect" variant="neutral" icon={<Cpu size={14} color="#C084FC" />} />
          </HStack>
        </HStack>

        {/* Verification Card with Meta Astryx Components */}
        <Card className="glass-cyber-card" style={{ padding: '32px' }}>
          <VStack gap={4}>
            <HStack justify="between" align="center">
              <HStack gap={2} align="center">
                <Terminal size={20} color="#00F5FF" />
                <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#F8FAFC' }}>
                  Meta Astryx UI Foundation Initialized
                </h2>
              </HStack>
              <Badge label="System Active: Dark Cyber-Tech" variant="neutral" />
            </HStack>

            <p style={{ margin: 0, color: '#94A3B8', fontSize: '15px', lineHeight: 1.6 }}>
              The core design system from Meta (<code style={{ color: '#00F5FF' }}>@astryxdesign/core</code> v0.7.5 + <code style={{ color: '#00F5FF' }}>@stylexjs/stylex</code>) has been successfully mounted in React 19. All layout containers, buttons, cards, and badges are rendered natively using Astryx primitives.
            </p>

            <HStack gap={3} style={{ marginTop: '12px' }}>
              <Button
                label="Explore Web3 Sandbox"
                variant="primary"
                onClick={() => alert('Web3 Sandbox ready for Task 7!')}
              />
              <Button
                label="Launch AI Pipeline"
                variant="secondary"
                onClick={() => alert('Agentic AI Pipeline ready for Task 8!')}
              />
              <Button
                label="View NED Scholar Record"
                variant="ghost"
                icon={<ExternalLink size={15} />}
                onClick={() => window.open('https://nedscholars.org', '_blank')}
              />
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </div>
  );
}
