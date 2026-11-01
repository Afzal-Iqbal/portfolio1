import React from 'react';
import { SegmentedControl, SegmentedControlItem, HStack, Badge } from '@astryxdesign/core';
import { Shield, Brain, Zap } from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import type { PersonaType } from '../../types/content';

export const PersonaSwitcher: React.FC = () => {
  const { persona, setPersona } = usePersona();

  return (
    <HStack gap={2} align="center">
      <div className="persona-control-container">
        <SegmentedControl
          value={persona}
          onChange={(val) => setPersona(val as PersonaType)}
          label="Select Engineering Persona"
          size="md"
        >
          <SegmentedControlItem
            value="web3"
            label="Web3 & Solidity"
            icon={<Shield size={14} color="#00F5FF" />}
          />
          <SegmentedControlItem
            value="convergence"
            label="Convergence"
            icon={<Zap size={14} color="#10B981" />}
          />
          <SegmentedControlItem
            value="ai"
            label="Applied AI / ML"
            icon={<Brain size={14} color="#C084FC" />}
          />
        </SegmentedControl>
      </div>

      <Badge
        label="Key [P]"
        variant="neutral"
        style={{ fontSize: '11px', opacity: 0.75, cursor: 'pointer' }}
        onClick={() => {
          const next: PersonaType =
            persona === 'web3' ? 'ai' : persona === 'ai' ? 'convergence' : 'web3';
          setPersona(next);
        }}
      />
    </HStack>
  );
};
