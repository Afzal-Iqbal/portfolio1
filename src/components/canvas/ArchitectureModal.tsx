import React, { useState, useEffect } from 'react';
import { VStack, HStack, Button } from '@astryxdesign/core';
import {
  Brain,
  Shield,
  Zap,
  Activity,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  X,
  Layers,
  Sparkles
} from 'lucide-react';
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

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInspectIn3D?: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  onInspectIn3D
}) => {
  const { isDark } = useTheme();
  const [activeLayerId, setActiveLayerId] = useState<string>('nucleus');

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.id === activeLayerId) || ARCHITECTURE_LAYERS[0];

  const handleInspectIn3D = () => {
    onClose();
    if (onInspectIn3D) {
      onInspectIn3D();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(5, 8, 15, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          backgroundColor: isDark ? '#0A0D14' : '#FFFFFF',
          border: '1px solid var(--cyber-border-glow)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
          padding: '24px 28px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '1px solid var(--cyber-border-subtle)',
            paddingBottom: '16px',
            marginBottom: '20px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                fontWeight: 800,
                color: 'var(--cyber-cyan)',
                letterSpacing: '1px',
                marginBottom: '4px'
              }}
            >
              01 // SYSTEM ARCHITECTURE & PHILOSOPHY
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: '22px',
                fontWeight: 900,
                color: 'var(--cyber-text-primary)',
                letterSpacing: '-0.5px'
              }}
            >
              Behind the Scenes: The Decentralized Synaptic Engine
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--cyber-text-secondary)' }}>
              How Muhammad Afzal Iqbal unifies Web3 deterministic security with autonomous AI cognition.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close architecture modal"
            style={{
              background: 'var(--cyber-inner-box)',
              border: '1px solid var(--cyber-border-subtle)',
              color: 'var(--cyber-text-primary)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 3-Card Core Thesis: AI vs Web3 vs Convergence */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            marginBottom: '24px'
          }}
        >
          {/* Card 1: AI */}
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
              border: '1px solid rgba(192, 132, 252, 0.25)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '8px' }}>
              <Brain size={16} color="#C084FC" />
              <strong style={{ fontSize: '13px', color: '#C084FC' }}>AI: Probabilistic Cognition</strong>
            </HStack>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              Autonomous LLMs excel at non-linear reasoning and pedagogical synthesis, but risk context drift and hallucinations.
            </p>
          </div>

          {/* Card 2: Web3 */}
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
              border: '1px solid rgba(0, 245, 255, 0.25)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '8px' }}>
              <Shield size={16} color="var(--cyber-cyan)" />
              <strong style={{ fontSize: '13px', color: 'var(--cyber-cyan)' }}>Web3: Deterministic Trust</strong>
            </HStack>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              Solidity smart contracts on the EVM execute strictly as written. Storage limits, reentrancy guards, and access controls are mathematically unbreakable.
            </p>
          </div>

          {/* Card 3: Afzal's Synthesis */}
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <HStack gap={2} align="center" style={{ marginBottom: '8px' }}>
              <Zap size={16} color="#10B981" />
              <strong style={{ fontSize: '13px', color: '#10B981' }}>Afzal&apos;s Synthesis</strong>
            </HStack>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)', margin: 0 }}>
              Deterministic smart contracts act as the security armor encapsulating the neural core. Autonomous agents reason off-chain; on-chain state mutations only execute after cryptographic verification.
            </p>
          </div>
        </div>

        {/* Interactive 5-Layer Architectural Inspector */}
        <div
          style={{
            borderRadius: '12px',
            backgroundColor: 'var(--cyber-inner-box)',
            border: '1px solid var(--cyber-border-subtle)',
            overflow: 'hidden',
            marginBottom: '20px'
          }}
        >
          {/* Layer Selector Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--cyber-border-subtle)',
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
                paddingRight: '6px',
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
                    gap: '5px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    fontWeight: isSelected ? 800 : 600,
                    cursor: 'pointer',
                    border: isSelected ? `1px solid ${layer.color}` : '1px solid transparent',
                    backgroundColor: isSelected ? `${layer.color}25` : 'transparent',
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

          {/* Active Layer Details */}
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <VStack gap={3}>
                <div>
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '2px 6px',
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
                  <h3 style={{ margin: '6px 0 2px 0', fontSize: '18px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                    {activeLayer.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: activeLayer.color, fontWeight: 600 }}>
                    {activeLayer.role}
                  </div>
                </div>

                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: isDark ? 'rgba(10, 13, 20, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    borderLeft: `3px solid ${activeLayer.color}`
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--cyber-text-muted)', fontFamily: 'monospace', marginBottom: '2px' }}>
                    ENGINEERING CHALLENGE:
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)' }}>
                    {activeLayer.engineeringChallenge}
                  </div>
                </div>

                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: isDark ? 'rgba(10, 13, 20, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    borderLeft: '3px solid #10B981'
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#10B981', fontFamily: 'monospace', marginBottom: '2px' }}>
                    AFZAL&apos;S PROVEN IMPLEMENTATION:
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--cyber-text-secondary)' }}>
                    {activeLayer.afzalSolution}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#10B981',
                    fontSize: '11px',
                    fontWeight: 600
                  }}
                >
                  <CheckCircle2 size={14} color="#10B981" />
                  <span>Verified Proof: {activeLayer.proofOfWork}</span>
                </div>
              </VStack>

              {/* Right Column: Hardened Tech Stack */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '10px',
                  backgroundColor: isDark ? 'rgba(10, 13, 20, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--cyber-border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--cyber-text-muted)', fontWeight: 700, marginBottom: '8px' }}>
                    HARDENED TECH STACK:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeLayer.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(241, 245, 249, 0.9)',
                          border: `1px solid ${activeLayer.color}33`,
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

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--cyber-border-subtle)' }}>
                  <div style={{ fontSize: '10px', fontFamily: 'monospace', color: activeLayer.color, fontWeight: 700, marginBottom: '4px' }}>
                    3D ENGINE CORRESPONDENCE:
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--cyber-text-secondary)', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                    Represented by <strong style={{ color: activeLayer.color }}>{activeLayer.name}</strong> in the 3D model. Explode the 3D Core to inspect it in isolated space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid var(--cyber-border-subtle)',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
            NED University CS &apos;28 &bull; 100% Merit Scholar
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid var(--cyber-border-subtle)',
                color: 'var(--cyber-text-secondary)',
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
            >
              Close
            </button>

            <button
              onClick={handleInspectIn3D}
              style={{
                backgroundColor: 'var(--cyber-cyan)',
                color: '#0A0D14',
                border: 'none',
                padding: '7px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Inspect in 3D Core &uarr;</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
