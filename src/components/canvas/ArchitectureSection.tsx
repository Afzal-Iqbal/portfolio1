import React, { useState } from 'react';
import { VStack, HStack, Card, Button } from '@astryxdesign/core';
import {
  Brain,
  Shield,
  Zap,
  Activity,
  Cpu,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Layers,
  Terminal,
  Code2
} from 'lucide-react';
import { usePersona } from '../../context/PersonaContext';
import { useTheme } from '../../context/ThemeContext';

interface ArchitectureLayer {
  number: string;
  id: string;
  name: string;
  role: string;
  tagline: string;
  category: 'AI Systems' | 'Web3 Security' | 'Agentic Bridge' | 'Consensus' | 'Micro-Agents';
  color: string;
  icon: React.ReactNode;
  engineeringChallenge: string;
  afzalSolution: string;
  techStack: string[];
  proofOfWork: string;
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    number: '01',
    id: 'nucleus',
    name: 'Quantum Synaptic Nucleus',
    role: 'Central AI Intelligence & Vector Latent Space',
    tagline: 'High-dimensional semantic representation & multi-agent orchestration',
    category: 'AI Systems',
    color: '#C084FC',
    icon: <Brain size={20} color="#C084FC" />,
    engineeringChallenge:
      'Autonomous LLMs need a structured, high-dimensional memory space to retrieve verified factual context and reason over multi-step workflows without hallucination.',
    afzalSolution:
      'Engineered a 1536-dimensional vector embedding store using cosine distance retrieval, integrated with a multi-agent pedagogical reasoning graph.',
    techStack: ['PyTorch', 'LangChain', '1536-dim Vectors', 'ChromaDB', 'Cosine Distance'],
    proofOfWork: 'Creator of SEPICP — Research-grounded pedagogical agent pipeline (NED CS Merit Project)'
  },
  {
    number: '02',
    id: 'cage',
    name: 'Cryptographic Security Armor',
    role: 'Solidity 0.8.20 Mathematical Execution Firewall',
    tagline: 'Immutable execution boundaries encapsulating autonomous cognition',
    category: 'Web3 Security',
    color: '#00F5FF',
    icon: <Shield size={20} color="#00F5FF" />,
    engineeringChallenge:
      'Off-chain AI agents cannot be given direct, unconstrained access to treasury vaults or state mutation due to prompt injection risks and nondeterministic behavior.',
    afzalSolution:
      'Encapsulated all state mutations within OpenZeppelin UUPS Upgradeable Proxies with strict Checks-Effects-Interactions (CEI) and ReentrancyGuard mutexes.',
    techStack: ['Solidity 0.8.20', 'ReentrancyGuard.sol', 'ERC-1967 Storage Slots', 'Hardhat', 'Foundry'],
    proofOfWork: 'Audit-grade UUPS proxy contracts with 100% test branch coverage and zero storage collision'
  },
  {
    number: '03',
    id: 'synapses',
    name: 'Synaptic Data Arteries',
    role: 'Off-Chain AI to On-Chain Escrow Highway',
    tagline: 'High-throughput cryptographic data ingestion & verification bridge',
    category: 'Agentic Bridge',
    color: '#10B981',
    icon: <Zap size={20} color="#10B981" />,
    engineeringChallenge:
      'Connecting off-chain AI reasoning inferences with on-chain deterministic smart contract escrow requires sub-second latency and tamper-proof cryptographic proofs.',
    afzalSolution:
      'Implemented JSON-RPC 2.0 streaming relays and ECDSA signature verifications, enabling automated micro-payouts only when verifiable AI milestone criteria are met.',
    techStack: ['JSON-RPC 2.0', 'ECDSA Signatures', 'Ethers.js / Web3.js', 'EIP-712 Typed Data'],
    proofOfWork: 'Autonomous Escrow protocols governed by verified AI milestone proofs'
  },
  {
    number: '04',
    id: 'rings',
    name: 'Gyroscopic Consensus Orbitals',
    role: 'Multi-Chain EVM State Determinism',
    tagline: 'Tri-axial PoS validation simulating Ethereum L1, Polygon, & Arbitrum',
    category: 'Consensus',
    color: '#F59E0B',
    icon: <Activity size={20} color="#F59E0B" />,
    engineeringChallenge:
      'High gas costs on L1 mainnets prevent frequent on-chain agent verifications, requiring extreme byte-packing and calldata optimization.',
    afzalSolution:
      'Optimized EVM storage slots, utilized custom assembly opcodes, and architected multi-chain deployments keeping transaction gas consumption under ~35,000 gas.',
    techStack: ['EIP-1559 Dynamic Gas', 'Custom EVM Opcodes', 'Calldata Packing', 'Polygon PoS', 'Arbitrum L2'],
    proofOfWork: 'Gas-benchmarked test suites on Hardhat & Foundry across multiple EVM testnets'
  },
  {
    number: '05',
    id: 'validators',
    name: 'Autonomous Validator Satellites',
    role: 'Decentralized Micro-Agent Observation Swarm',
    tagline: 'Four autonomous sentinels running continuous state health checks',
    category: 'Micro-Agents',
    color: '#38BDF8',
    icon: <Cpu size={20} color="#38BDF8" />,
    engineeringChallenge:
      'Monolithic systems create single points of failure. Distributed protocols need autonomous peer sentinels to monitor reentrancy vectors and storage corruption.',
    afzalSolution:
      'Deployed 4 specialized micro-agents: Node α (Proxy Sentinel), Node β (Vector Indexer), Node γ (Reentrancy Watchdog), and Node δ (Consensus Arbiter).',
    techStack: ['Autonomous Oracles', 'Continuous Heartbeat Telemetry', 'Sub-second Verification', 'Peer Gossip'],
    proofOfWork: 'NED University CS \'28 Full Merit Scholarship research into distributed autonomous systems'
  }
];

export const ArchitectureSection: React.FC = () => {
  const { isDark } = useTheme();
  const { persona } = usePersona();
  const [activeLayerId, setActiveLayerId] = useState<string>('nucleus');

  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.id === activeLayerId) || ARCHITECTURE_LAYERS[0];

  const scrollToCore = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="architecture" style={{ padding: '64px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <VStack gap={3} align="start" style={{ marginBottom: '40px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              fontWeight: 800,
              color: 'var(--cyber-cyan)',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}
          >
            01 // SYSTEM ARCHITECTURE & PHILOSOPHY
          </span>

          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: 'var(--cyber-text-primary)',
              margin: 0,
              letterSpacing: '-0.8px'
            }}
          >
            Behind the Scenes:{' '}
            <span className="text-gradient-web3">The Decentralized Synaptic Engine</span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--cyber-text-secondary)',
              maxWidth: '820px',
              margin: 0
            }}
          >
            The 3D Core at the top of this site is not a decorative visual — it is an interactive architectural diagram of how{' '}
            <strong>Muhammad Afzal Iqbal</strong> solves the fundamental dilemma of modern computing:{' '}
            <em>how to give autonomous AI agents cognitive freedom while using Web3 smart contracts to enforce mathematically unbreakable security boundaries.</em>
          </p>
        </VStack>

        {/* The Fundamental Dilemma & Solution Comparison Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '44px'
          }}
        >
          {/* Card 1: The AI Dilemma */}
          <div
            style={{
              padding: '24px',
              borderRadius: '14px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(192, 132, 252, 0.25)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(192, 132, 252, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C084FC'
                }}
              >
                <Brain size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#C084FC' }}>
                AI: Probabilistic Cognition
              </h3>
            </HStack>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              Large Language Models and Agentic workflows excel at non-linear reasoning, pedagogical synthesis, and complex decision-making. However, they are inherently probabilistic — they can hallucinate, suffer context drift, or be tricked by adversarial prompt injection.
            </p>
          </div>

          {/* Card 2: The Web3 Guarantee */}
          <div
            style={{
              padding: '24px',
              borderRadius: '14px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(0, 245, 255, 0.25)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 245, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00F5FF'
                }}
              >
                <Shield size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: 'var(--cyber-cyan)' }}>
                Web3: Deterministic Trust
              </h3>
            </HStack>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              Solidity smart contracts on the EVM execute strictly as written. Every storage slot, gas limit, access control, and reentrancy mutex is enforced by cryptographic consensus. What is written to the blockchain cannot be falsified, drained, or overridden.
            </p>
          </div>

          {/* Card 3: Afzal's Convergence */}
          <div
            style={{
              padding: '24px',
              borderRadius: '14px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981'
                }}
              >
                <Zap size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#10B981' }}>
                Afzal&apos;s Synthesis
              </h3>
            </HStack>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              The 3D Core visualizes smart contracts as the protective, audit-grade cage encapsulating the neural core. Autonomous agents reason off-chain, but on-chain state mutations and financial escrows only execute when verified proofs pass mathematical EVM guardrails.
            </p>
          </div>
        </div>

        {/* Interactive 5-Layer Architectural Blueprint Inspector */}
        <div
          style={{
            borderRadius: '16px',
            backgroundColor: isDark ? 'rgba(10, 13, 20, 0.85)' : 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--cyber-border-subtle)',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.18)'
          }}
        >
          {/* Top Bar with Layer Selectors */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--cyber-border-subtle)',
              backgroundColor: 'var(--cyber-inner-box)',
              padding: '8px 12px',
              gap: '6px',
              overflowX: 'auto'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'var(--cyber-text-muted)',
                paddingRight: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              SELECT LAYER:
            </span>

            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: isSelected ? 800 : 600,
                    cursor: 'pointer',
                    border: isSelected ? `1px solid ${layer.color}` : '1px solid transparent',
                    backgroundColor: isSelected
                      ? `${layer.color}20`
                      : 'transparent',
                    color: isSelected ? layer.color : 'var(--cyber-text-secondary)',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{layer.number}.</span>
                  <span>{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Layer Detailed Breakdown Content Area */}
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
              {/* Left Column: Architectural Specs & Philosophy */}
              <VStack gap={4}>
                <HStack gap={2} align="center">
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: `${activeLayer.color}20`,
                      color: activeLayer.color,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      border: `1px solid ${activeLayer.color}44`
                    }}
                  >
                    LAYER {activeLayer.number} &bull; {activeLayer.category}
                  </span>
                </HStack>

                <div>
                  <h3
                    style={{
                      margin: '0 0 6px 0',
                      fontSize: '24px',
                      fontWeight: 800,
                      color: 'var(--cyber-text-primary)',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    {activeLayer.name}
                  </h3>
                  <div style={{ fontSize: '14px', color: activeLayer.color, fontWeight: 600 }}>
                    {activeLayer.role}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace', marginTop: '2px' }}>
                    {activeLayer.tagline}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.7)',
                      borderLeft: `3px solid ${activeLayer.color}`
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--cyber-text-muted)', fontFamily: 'monospace', marginBottom: '4px' }}>
                      ENGINEERING CHALLENGE:
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)' }}>
                      {activeLayer.engineeringChallenge}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.7)',
                      borderLeft: '3px solid #10B981'
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', fontFamily: 'monospace', marginBottom: '4px' }}>
                      AFZAL&apos;S PROVEN IMPLEMENTATION:
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)' }}>
                      {activeLayer.afzalSolution}
                    </div>
                  </div>
                </div>

                {/* Verified Proof Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10B981',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Verified Proof: {activeLayer.proofOfWork}</span>
                </div>
              </VStack>

              {/* Right Column: Tech Stack & 3D Interactive Teleport */}
              <div
                style={{
                  padding: '24px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--cyber-inner-box)',
                  border: '1px solid var(--cyber-border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--cyber-text-muted)', fontWeight: 700, marginBottom: '10px' }}>
                    HARDENED TECHNOLOGY STACK:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeLayer.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '12px',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: isDark ? 'rgba(10, 13, 20, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                          border: `1px solid ${activeLayer.color}44`,
                          color: 'var(--cyber-text-primary)',
                          fontFamily: 'monospace',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    padding: '16px',
                    borderRadius: '10px',
                    backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid var(--cyber-border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: activeLayer.color, fontWeight: 700, marginBottom: '6px' }}>
                    3D VISUALIZATION SYMBOL:
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                    In the 3D Core at the top of the page, this component is represented by{' '}
                    <strong style={{ color: activeLayer.color }}>{activeLayer.name}</strong>. You can explode the 3D model to see it separated in physical coordinates.
                  </p>

                  <button
                    onClick={scrollToCore}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      backgroundColor: activeLayer.color,
                      color: '#0A0D14',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <span>Inspect Layer {activeLayer.number} in 3D Core</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
