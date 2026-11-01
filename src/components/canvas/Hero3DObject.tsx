import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { usePersona } from '../../context/PersonaContext';
import { useTheme } from '../../context/ThemeContext';
import {
  Shield,
  Brain,
  Zap,
  Sparkles,
  Activity,
  Layers,
  Info,
  Maximize2,
  Minimize2,
  Cpu,
  Lock,
  ChevronRight,
  X,
  ExternalLink
} from 'lucide-react';

interface LayerMeta {
  id: 'all' | 'nucleus' | 'cage' | 'synapses' | 'rings' | 'validators';
  name: string;
  category: 'Web3' | 'AI' | 'Convergence';
  tagline: string;
  description: string;
  afzalProof: string;
  techSpecs: string[];
  color: string;
}

const LAYERS_DATA: Record<string, LayerMeta> = {
  all: {
    id: 'all',
    name: 'Unified Decentralized Synaptic Engine',
    category: 'Convergence',
    tagline: 'Where Cryptographic Trust Constrains Autonomous AI Cognition',
    description:
      'The central philosophy of Muhammad Afzal Iqbal: AI agents offer boundless cognition but risk nondeterministic hallucinations; Web3 smart contracts provide deterministic, mathematically unforgeable state boundaries. This 3D engine visualizes the harmonic synthesis of both paradigms.',
    afzalProof: 'NED University CS Merit Research & SEPICP Platform Architecture',
    techSpecs: ['Solidity 0.8.20', 'LangChain / Python', 'UUPS Proxies', '1536-dim Vectors', 'EVM Gas Optimization'],
    color: '#00F5FF'
  },
  nucleus: {
    id: 'nucleus',
    name: 'Layer 01: Quantum Synaptic Nucleus',
    category: 'AI',
    tagline: 'Latent Vector Space & Agentic Reasoning Center',
    description:
      'The inner glowing crystal represents the multi-agent neural brain. It performs high-dimensional vector embeddings, semantic retrieval, and multi-step reasoning before any state mutation is permitted.',
    afzalProof: 'Creator of SEPICP — Research-grounded pedagogical agent pipeline',
    techSpecs: ['1536-dim Embedding Space', 'Multi-Agent Orchestration', 'RAG Retrieval Engine', 'Cosine Distance Metrics'],
    color: '#C084FC'
  },
  cage: {
    id: 'cage',
    name: 'Layer 02: Cryptographic Security Armor',
    category: 'Web3',
    tagline: 'Solidity 0.8.20 EVM Mathematical Firewall',
    description:
      'A geodesic polyhedral cage encapsulating the neural core. Emulates OpenZeppelin ReentrancyGuard, Checks-Effects-Interactions (CEI), and immutable storage slots, preventing untrusted agents from corrupting EVM state.',
    afzalProof: 'Audit-grade UUPS upgradeable smart contracts with zero storage collision',
    techSpecs: ['Checks-Effects-Interactions', 'ReentrancyGuard.sol', 'ERC-1967 Storage Slots', 'EVM Gas Metering'],
    color: '#00F5FF'
  },
  synapses: {
    id: 'synapses',
    name: 'Layer 03: Synaptic Data Arteries',
    category: 'Convergence',
    tagline: 'Real-Time Ingestion & Proof-of-Execution Highway',
    description:
      'Dynamic glowing energy beams transmitting data packets between off-chain neural reasoning models and on-chain decentralized escrow contracts.',
    afzalProof: 'Autonomous Escrow protocols governed by verified AI milestone proofs',
    techSpecs: ['JSON-RPC 2.0 Highway', 'ECDSA Signature Verification', 'Ethers.js / Web3.js', 'Event Log Indexing'],
    color: '#10B981'
  },
  rings: {
    id: 'rings',
    name: 'Layer 04: Gyroscopic Consensus Orbitals',
    category: 'Web3',
    tagline: 'Multi-Chain EVM Proof-of-Stake Orbitals',
    description:
      'Three interlocking gyroscopic rings simulating multi-chain consensus (Ethereum L1, Polygon PoS, Arbitrum L2). Rotates along harmonic mathematical ratios to model decentralized transaction finality.',
    afzalProof: 'Full test suites on Hardhat & Foundry across multiple EVM testnets',
    techSpecs: ['EIP-1559 Dynamic Gas', 'Tri-Axis Gyroscopic Consensus', 'PoS Finality Simulation', 'Calldata Optimization'],
    color: '#F59E0B'
  },
  validators: {
    id: 'validators',
    name: 'Layer 05: Autonomous Validator Satellites',
    category: 'Convergence',
    tagline: 'Decentralized Micro-Agent Observation Swarm',
    description:
      'Four autonomous satellite nodes orbiting the core. Each micro-agent monitors a distinct domain: Proxy Governance, Reentrancy Sentinel, Vector Store Indexer, and Pedagogy Arbitration.',
    afzalProof: 'NED University Merit Scholar Research into Autonomous Distributed Networks',
    techSpecs: ['4 Autonomous Sentinel Nodes', 'Continuous Heartbeat Telemetry', 'Sub-second State Verification'],
    color: '#38BDF8'
  }
};

export const Hero3DObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { persona } = usePersona();
  const { isDark } = useTheme();

  // Interactive controls
  const [isExploded, setIsExploded] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [hoveredNodeInfo, setHoveredNodeInfo] = useState<string | null>(null);
  const [showMeaningModal, setShowMeaningModal] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [isHoveringCanvas, setIsHoveringCanvas] = useState(false);

  // Dynamic telemetry metrics
  const [telemetry, setTelemetry] = useState({
    tps: 4210,
    gasAvg: 23150,
    hash: '0x8f2a...c4b1',
    dimensions: '1536-dim'
  });

  // Callbacks hooked into Three.js animation loop
  const triggerPulseRef = useRef<(() => void) | null>(null);
  const setExplodeTargetRef = useRef<((val: number) => void) | null>(null);
  const setLayerFocusRef = useRef<((layer: string) => void) | null>(null);

  // Synchronize exploded state
  useEffect(() => {
    if (setExplodeTargetRef.current) {
      setExplodeTargetRef.current(isExploded ? 1.0 : 0.0);
    }
  }, [isExploded]);

  // Synchronize layer focus
  useEffect(() => {
    if (setLayerFocusRef.current) {
      setLayerFocusRef.current(selectedLayer);
    }
  }, [selectedLayer]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Helper: Create soft radial glow canvas texture for photons & particles
    const createGlowTexture = (colorHex: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, colorHex);
        gradient.addColorStop(0.35, colorHex);
        gradient.addColorStop(0.7, 'rgba(0, 245, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.3 : 1.1;
    container.appendChild(renderer.domElement);

    // Root Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Dynamic Color Palette mapped to persona
    const getPalette = () => {
      if (persona === 'web3') {
        return {
          primary: 0x00f5ff, // Cyber Cyan
          secondary: 0x10b981, // Emerald
          accent: 0x06b6d4, // Electric Blue
          gold: 0xf59e0b,
          glowStr: '#00F5FF'
        };
      }
      if (persona === 'ai') {
        return {
          primary: 0xc084fc, // Bright Violet
          secondary: 0x8b5cf6, // Deep Violet
          accent: 0x38bdf8, // Sky Blue
          gold: 0xf43f5e,
          glowStr: '#C084FC'
        };
      }
      return {
        primary: 0x00f5ff, // Cyan
        secondary: 0x8b5cf6, // Violet
        accent: 0x10b981, // Emerald
        gold: 0xf59e0b,
        glowStr: '#10B981'
      };
    };

    const palette = getPalette();
    const glowTexture = createGlowTexture(palette.glowStr);

    // -------------------------------------------------------------
    // 2. LAYER 01: Quantum Synaptic Nucleus (Dual nested crystal)
    // -------------------------------------------------------------
    const nucleusGroup = new THREE.Group();
    coreGroup.add(nucleusGroup);

    // Inner Faceted Core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.45, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: palette.gold,
      emissive: palette.primary,
      emissiveIntensity: isDark ? 0.9 : 0.6,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    nucleusGroup.add(innerCore);

    // Outer Translucent Refractive Shell
    const outerNucleusGeo = new THREE.IcosahedronGeometry(0.72, 1);
    const outerNucleusMat = new THREE.MeshStandardMaterial({
      color: palette.primary,
      emissive: palette.primary,
      emissiveIntensity: isDark ? 0.5 : 0.35,
      roughness: 0.15,
      metalness: 0.8,
      transparent: true,
      opacity: isDark ? 0.88 : 0.8
    });
    const outerNucleus = new THREE.Mesh(outerNucleusGeo, outerNucleusMat);
    nucleusGroup.add(outerNucleus);

    // -------------------------------------------------------------
    // 3. LAYER 02: Cryptographic Security Armor (Dodecahedron Cage)
    // -------------------------------------------------------------
    const cageGroup = new THREE.Group();
    coreGroup.add(cageGroup);

    const cageGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: palette.secondary,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.55 : 0.7
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    cageGroup.add(cageMesh);

    // Cage Corner Joint Nodes (Miniature cryptographic lock points)
    const cornerVertices = cageGeo.getAttribute('position');
    const cornerNodesGroup = new THREE.Group();
    const cornerGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const cornerMat = new THREE.MeshBasicMaterial({ color: palette.primary });

    // Deduplicate vertices for corners
    const cornerSet = new Set<string>();
    for (let i = 0; i < cornerVertices.count; i++) {
      const vx = cornerVertices.getX(i);
      const vy = cornerVertices.getY(i);
      const vz = cornerVertices.getZ(i);
      const key = `${vx.toFixed(2)},${vy.toFixed(2)},${vz.toFixed(2)}`;
      if (!cornerSet.has(key)) {
        cornerSet.add(key);
        const node = new THREE.Mesh(cornerGeo, cornerMat);
        node.position.set(vx, vy, vz);
        cornerNodesGroup.add(node);
      }
    }
    cageGroup.add(cornerNodesGroup);

    // -------------------------------------------------------------
    // 4. LAYER 04: Gyroscopic Consensus Orbitals (3 Intersecting Rings)
    // -------------------------------------------------------------
    const ringsGroup = new THREE.Group();
    coreGroup.add(ringsGroup);

    // Ring 1: Primary Equatorial Ring (Ethereum L1)
    const ring1Geo = new THREE.TorusGeometry(1.95, 0.024, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: palette.primary,
      transparent: true,
      opacity: 0.85
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    ringsGroup.add(ring1);

    // Ring 2: Polar Meridian Ring (Polygon PoS)
    const ring2Geo = new THREE.TorusGeometry(2.15, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: palette.secondary,
      transparent: true,
      opacity: 0.75
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.z = Math.PI / 5;
    ringsGroup.add(ring2);

    // Ring 3: Oblique Inclination Ring (Arbitrum L2)
    const ring3Geo = new THREE.TorusGeometry(2.35, 0.016, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: palette.accent,
      transparent: true,
      opacity: 0.65
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 3.8;
    ring3.rotation.y = Math.PI / 5.5;
    ringsGroup.add(ring3);

    // -------------------------------------------------------------
    // 5. LAYER 05: Autonomous Validator Satellites (4 Interactive Nodes)
    // -------------------------------------------------------------
    const satellitesGroup = new THREE.Group();
    coreGroup.add(satellitesGroup);

    const satelliteData = [
      {
        id: 'node-alpha',
        name: 'Node α: UUPS Proxy Sentinel',
        role: 'Solidity 0.8.20 Storage Collision & Upgradability Guard',
        color: palette.primary,
        angle: 0,
        speed: 0.013,
        baseRadius: 2.1,
        yOffset: 0.4
      },
      {
        id: 'node-beta',
        name: 'Node β: SEPICP Vector Indexer',
        role: '1536-dim Latent Space & Pedagogical Retrieval Core',
        color: palette.secondary,
        angle: Math.PI * 0.5,
        speed: -0.011,
        baseRadius: 2.25,
        yOffset: -0.3
      },
      {
        id: 'node-gamma',
        name: 'Node γ: Reentrancy Guard Watchdog',
        role: 'EVM Gas Metering & Atomic State Transition Shield',
        color: palette.accent,
        angle: Math.PI,
        speed: 0.014,
        baseRadius: 2.05,
        yOffset: 0.2
      },
      {
        id: 'node-delta',
        name: 'Node δ: Multi-Agent Consensus Arbiter',
        role: 'Autonomous LLM Output Verification & Escrow Payout',
        color: palette.gold,
        angle: Math.PI * 1.5,
        speed: -0.012,
        baseRadius: 2.3,
        yOffset: -0.4
      }
    ];

    const satGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const satHaloGeo = new THREE.TorusGeometry(0.18, 0.012, 8, 32);

    const satelliteMeshes = satelliteData.map((data) => {
      const group = new THREE.Group();

      // Core Node
      const mat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.7,
        roughness: 0.2
      });
      const core = new THREE.Mesh(satGeometry, mat);
      group.add(core);

      // Micro Orbit Ring
      const haloMat = new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: 0.8 });
      const halo = new THREE.Mesh(satHaloGeo, haloMat);
      halo.rotation.x = Math.PI / 3;
      group.add(halo);

      // Tag node for raycasting
      core.userData = { id: data.id, name: data.name, role: data.role };

      satellitesGroup.add(group);

      return {
        group,
        core,
        data,
        currentPos: new THREE.Vector3()
      };
    });

    // -------------------------------------------------------------
    // 6. LAYER 03: Synaptic Data Arteries (Pulsing Energy Arcs)
    // -------------------------------------------------------------
    const synapsesGroup = new THREE.Group();
    coreGroup.add(synapsesGroup);

    // 4 Dynamic line curves between center and satellites
    const synapseLines: { line: THREE.Line; geometry: THREE.BufferGeometry }[] = [];
    const photonPackets: { mesh: THREE.Mesh; satIndex: number; progress: number; speed: number }[] = [];
    const photonGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const photonMat = new THREE.MeshBasicMaterial({ color: palette.primary, transparent: true, opacity: 0.95 });

    satelliteMeshes.forEach((sat, i) => {
      const lineGeo = new THREE.BufferGeometry();
      const points = [new THREE.Vector3(0, 0, 0), sat.group.position];
      lineGeo.setFromPoints(points);

      const lineMat = new THREE.LineBasicMaterial({
        color: sat.data.color,
        transparent: true,
        opacity: isDark ? 0.4 : 0.6,
        linewidth: 1
      });
      const line = new THREE.Line(lineGeo, lineMat);
      synapsesGroup.add(line);
      synapseLines.push({ line, geometry: lineGeo });

      // Add 2 traveling photon packets per line
      for (let p = 0; p < 2; p++) {
        const photon = new THREE.Mesh(photonGeo, photonMat);
        synapsesGroup.add(photon);
        photonPackets.push({
          mesh: photon,
          satIndex: i,
          progress: p * 0.5,
          speed: 0.015 + Math.random() * 0.008
        });
      }
    });

    // -------------------------------------------------------------
    // 7. Ambient Latent Vector Stardust Nebula (320 floating points)
    // -------------------------------------------------------------
    const particleCount = 300;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const c1 = new THREE.Color(palette.primary);
    const c2 = new THREE.Color(palette.secondary);
    const c3 = new THREE.Color(palette.accent);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const blend = Math.random();
      const mixed = blend < 0.5 ? c1.clone().lerp(c2, blend * 2) : c2.clone().lerp(c3, (blend - 0.5) * 2);

      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.06,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    coreGroup.add(particleSystem);

    // -------------------------------------------------------------
    // 8. Multi-Stage Shockwave Detonation Rings
    // -------------------------------------------------------------
    const shockwaveGeo1 = new THREE.RingGeometry(0.1, 0.18, 64);
    const shockwaveMat1 = new THREE.MeshBasicMaterial({
      color: palette.primary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const shockwave1 = new THREE.Mesh(shockwaveGeo1, shockwaveMat1);
    scene.add(shockwave1);

    const shockwaveGeo2 = new THREE.RingGeometry(0.1, 0.22, 64);
    const shockwaveMat2 = new THREE.MeshBasicMaterial({
      color: palette.secondary,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const shockwave2 = new THREE.Mesh(shockwaveGeo2, shockwaveMat2);
    shockwave2.rotation.x = Math.PI / 2;
    scene.add(shockwave2);

    let shockwaveScale = 0.1;
    let shockwaveActive = false;

    triggerPulseRef.current = () => {
      shockwaveScale = 0.2;
      shockwaveActive = true;
      shockwaveMat1.opacity = 1.0;
      shockwaveMat2.opacity = 0.85;
      setPulseCount((c) => c + 1);

      // Light burst flare
      pointLight.intensity = 4.5;
      setTimeout(() => {
        pointLight.intensity = 2.4;
      }, 350);

      // Mutate simulated telemetry
      setTelemetry((prev) => ({
        tps: Math.floor(4000 + Math.random() * 800),
        gasAvg: Math.floor(21000 + Math.random() * 4000),
        hash: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`,
        dimensions: '1536-dim'
      }));
    };

    // -------------------------------------------------------------
    // 9. Lighting Setup
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.95 : 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(palette.primary, 2.4, 60);
    pointLight.position.set(4.5, 4.5, 4.5);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(palette.secondary, 2.0, 60);
    backLight.position.set(-4.5, -3.5, -3.5);
    scene.add(backLight);

    // -------------------------------------------------------------
    // 10. Interactive Controls: Exploded View & Layer Dimming
    // -------------------------------------------------------------
    let currentExplodeAmount = 0.0;
    let targetExplodeAmount = 0.0;

    setExplodeTargetRef.current = (target: number) => {
      targetExplodeAmount = target;
    };

    let focusedLayer = 'all';
    setLayerFocusRef.current = (layer: string) => {
      focusedLayer = layer;
    };

    // -------------------------------------------------------------
    // 11. Pointer Drag, Raycasting & Parallax
    // -------------------------------------------------------------
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let targetRotation = { x: 0.2, y: 0.2 };
    let currentRotation = { x: 0.2, y: 0.2 };
    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2();

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseCoord.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseCoord.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        targetRotation.y += deltaX * 0.007;
        targetRotation.x += deltaY * 0.007;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging && Math.abs(e.clientX - prevMousePos.x) < 4 && Math.abs(e.clientY - prevMousePos.y) < 4) {
        triggerPulseRef.current?.();
      }
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 12. Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth Exploded View Lerp
      currentExplodeAmount += (targetExplodeAmount - currentExplodeAmount) * 0.08;

      if (!prefersReducedMotion) {
        // Idle gentle rotation
        if (!isDragging) {
          targetRotation.y += 0.005;
          targetRotation.x += Math.sin(elapsed * 0.4) * 0.0015;
        }

        // Layer 01: Nucleus respiration
        const pulse = 1 + Math.sin(elapsed * 3.0) * 0.08;
        nucleusGroup.scale.set(pulse, pulse, pulse);
        innerCore.rotation.y = -elapsed * 0.7;
        innerCore.rotation.z = elapsed * 0.5;
        outerNucleus.rotation.y = elapsed * 0.45;
        outerNucleus.rotation.x = elapsed * 0.25;

        // Layer 02: Cage counter-rotation & explosion expansion
        const cageScale = 1.0 + currentExplodeAmount * 0.45;
        cageGroup.scale.set(cageScale, cageScale, cageScale);
        cageMesh.rotation.y = -elapsed * 0.3;
        cageMesh.rotation.x = elapsed * 0.15;

        // Layer 04: Gyroscope rings rotation & expansion
        const ringScale = 1.0 + currentExplodeAmount * 0.35;
        ringsGroup.scale.set(ringScale, ringScale, ringScale);
        ring1.rotation.z = elapsed * 0.4;
        ring2.rotation.z = -elapsed * 0.35;
        ring3.rotation.z = elapsed * 0.22;

        // Layer 05: Satellites orbital mechanics & radial expansion
        satelliteMeshes.forEach((sat) => {
          sat.data.angle += sat.data.speed;
          const currentRadius = (sat.data.baseRadius + currentExplodeAmount * 0.75);
          sat.group.position.x = Math.cos(sat.data.angle) * currentRadius;
          sat.group.position.y = Math.sin(sat.data.angle * 1.5) * 0.45 + sat.data.yOffset * (1 + currentExplodeAmount * 0.5);
          sat.group.position.z = Math.sin(sat.data.angle) * currentRadius;

          sat.currentPos.copy(sat.group.position);
          sat.group.children[1].rotation.z += 0.03; // Rotate micro ring
        });

        // Layer 03: Synapses dynamic lines update
        synapseLines.forEach((syn, i) => {
          const satPos = satelliteMeshes[i].group.position;
          const posAttr = syn.geometry.getAttribute('position') as THREE.BufferAttribute;
          posAttr.setXYZ(1, satPos.x, satPos.y, satPos.z);
          posAttr.needsUpdate = true;
        });

        // Photon packets travel along synapse lines
        photonPackets.forEach((packet) => {
          packet.progress += packet.speed;
          if (packet.progress > 1.0) packet.progress = 0.0;

          const satPos = satelliteMeshes[packet.satIndex].group.position;
          packet.mesh.position.lerpVectors(new THREE.Vector3(0, 0, 0), satPos, packet.progress);
        });

        // Latent particle stardust vortex rotation
        particleSystem.rotation.y = elapsed * 0.07;
        particleSystem.rotation.x = Math.sin(elapsed * 0.25) * 0.04;

        // Shockwave expansion
        if (shockwaveActive) {
          shockwaveScale += 0.09;
          shockwave1.scale.set(shockwaveScale, shockwaveScale, shockwaveScale);
          shockwave2.scale.set(shockwaveScale * 0.9, shockwaveScale * 0.9, shockwaveScale * 0.9);
          shockwaveMat1.opacity -= 0.03;
          shockwaveMat2.opacity -= 0.03;
          if (shockwaveMat1.opacity <= 0) {
            shockwaveActive = false;
          }
        }
      }

      // Smooth camera/core rotation damping
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
      coreGroup.rotation.x = currentRotation.x;
      coreGroup.rotation.y = currentRotation.y;

      // Layer focus opacity management
      const isFocused = (layer: string) => focusedLayer === 'all' || focusedLayer === layer;

      outerNucleusMat.opacity = isFocused('nucleus') ? (isDark ? 0.9 : 0.85) : 0.12;
      innerCoreMat.opacity = isFocused('nucleus') ? 1.0 : 0.15;
      cageMat.opacity = isFocused('cage') ? (isDark ? 0.75 : 0.8) : 0.1;
      ring1Mat.opacity = isFocused('rings') ? 0.9 : 0.15;
      ring2Mat.opacity = isFocused('rings') ? 0.8 : 0.12;
      ring3Mat.opacity = isFocused('rings') ? 0.7 : 0.1;
      synapsesGroup.visible = isFocused('synapses');
      satellitesGroup.visible = isFocused('validators');

      // Raycasting for interactive node inspect
      raycaster.setFromCamera(mouseCoord, camera);
      const interactiveTargets = satelliteMeshes.map((s) => s.core);
      const intersects = raycaster.intersectObjects(interactiveTargets);

      if (intersects.length > 0) {
        const hitData = intersects[0].object.userData;
        if (hitData?.name) {
          setHoveredNodeInfo(`${hitData.name}: ${hitData.role}`);
        }
      } else {
        setHoveredNodeInfo(null);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(domElem)) {
        container.removeChild(domElem);
      }
      renderer.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      outerNucleusGeo.dispose();
      outerNucleusMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      cornerGeo.dispose();
      cornerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      satGeometry.dispose();
      satHaloGeo.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      shockwaveGeo1.dispose();
      shockwaveMat1.dispose();
      shockwaveGeo2.dispose();
      shockwaveMat2.dispose();
    };
  }, [persona, isDark]);

  const activeLayerData = LAYERS_DATA[selectedLayer] || LAYERS_DATA.all;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '410px',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={() => setIsHoveringCanvas(true)}
      onMouseLeave={() => setIsHoveringCanvas(false)}
    >
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: isHoveringCanvas ? 'grab' : 'default',
          touchAction: 'none'
        }}
      />

      {/* Top Header: Title, Telemetry, and Meaning Blueprint Button */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none'
        }}
      >
        {/* Core Architecture Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '10px',
            backgroundColor: isDark ? 'rgba(10, 13, 20, 0.88)' : 'rgba(255, 255, 255, 0.94)',
            border: `1px solid ${activeLayerData.color}44`,
            backdropFilter: 'blur(10px)',
            boxShadow: `0 0 16px ${activeLayerData.color}22`,
            pointerEvents: 'auto'
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: `${activeLayerData.color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: activeLayerData.color
            }}
          >
            {selectedLayer === 'nucleus' ? (
              <Brain size={14} />
            ) : selectedLayer === 'cage' ? (
              <Shield size={14} />
            ) : selectedLayer === 'rings' ? (
              <Activity size={14} />
            ) : selectedLayer === 'validators' ? (
              <Cpu size={14} />
            ) : (
              <Zap size={14} />
            )}
          </div>
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: activeLayerData.color,
                fontFamily: 'monospace',
                letterSpacing: '0.6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{activeLayerData.name}</span>
            </div>
            <div style={{ fontSize: '9px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
              {activeLayerData.tagline}
            </div>
          </div>
        </div>

        {/* Right Action Tools: Exploded View Toggle + Meaning Blueprint Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'auto' }}>
          <button
            onClick={() => setIsExploded(!isExploded)}
            title={isExploded ? 'Assemble Core' : 'Explode Architecture Layers'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              borderRadius: '8px',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'monospace',
              border: `1px solid ${isExploded ? 'var(--cyber-cyan)' : 'var(--cyber-border-subtle)'}`,
              backgroundColor: isExploded
                ? 'rgba(0, 245, 255, 0.2)'
                : isDark
                ? 'rgba(10, 13, 20, 0.85)'
                : 'rgba(255, 255, 255, 0.9)',
              color: isExploded ? 'var(--cyber-cyan)' : 'var(--cyber-text-secondary)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease'
            }}
          >
            {isExploded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            <span>{isExploded ? 'Assemble' : 'Explode'}</span>
          </button>

          <button
            onClick={() => setShowMeaningModal(true)}
            title="Read Architectural Meaning & Proofs"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '8px',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'monospace',
              border: '1px solid var(--cyber-border-subtle)',
              backgroundColor: isDark ? 'rgba(10, 13, 20, 0.85)' : 'rgba(255, 255, 255, 0.9)',
              color: 'var(--cyber-cyan)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Info size={13} />
            <span style={{ display: 'none' /* hidden on tight space, visible on tablet+ */ }}>Meaning</span>
          </button>
        </div>
      </div>

      {/* Floating Raycast Node Inspect Banner */}
      {hoveredNodeInfo && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 12px',
            borderRadius: '20px',
            backgroundColor: isDark ? 'rgba(10, 13, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--cyber-cyan)',
            boxShadow: '0 0 16px rgba(0, 245, 255, 0.3)',
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--cyber-cyan)',
            fontWeight: 700,
            pointerEvents: 'none',
            zIndex: 10,
            whiteSpace: 'nowrap'
          }}
        >
          🛰 {hoveredNodeInfo}
        </div>
      )}

      {/* Bottom Architectural Layer Focus Tabs */}
      <div
        style={{
          position: 'absolute',
          bottom: '42px',
          left: '10px',
          right: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '4px',
          flexWrap: 'wrap',
          pointerEvents: 'auto',
          zIndex: 5
        }}
      >
        {(['all', 'nucleus', 'cage', 'rings', 'validators'] as const).map((layerKey) => {
          const lData = LAYERS_DATA[layerKey];
          const isSelected = selectedLayer === layerKey;
          return (
            <button
              key={layerKey}
              onClick={() => setSelectedLayer(layerKey)}
              style={{
                fontSize: '10px',
                fontFamily: 'monospace',
                fontWeight: isSelected ? 800 : 600,
                padding: '4px 8px',
                borderRadius: '6px',
                border: isSelected ? `1px solid ${lData.color}` : '1px solid var(--cyber-border-subtle)',
                backgroundColor: isSelected
                  ? `${lData.color}25`
                  : isDark
                  ? 'rgba(10, 13, 20, 0.75)'
                  : 'rgba(255, 255, 255, 0.85)',
                color: isSelected ? lData.color : 'var(--cyber-text-secondary)',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.15s ease'
              }}
            >
              {layerKey === 'all'
                ? '✦ Unified'
                : layerKey === 'nucleus'
                ? '🧠 Neural Core'
                : layerKey === 'cage'
                ? '🛡 Crypto Cage'
                : layerKey === 'rings'
                ? '⛓ Orbitals'
                : '🛰 Agents'}
            </button>
          );
        })}
      </div>

      {/* Bottom Status & Interactive Shockwave Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '10px',
          fontFamily: 'monospace',
          color: 'var(--cyber-text-muted)',
          pointerEvents: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#10B981', fontWeight: 700 }}>● TPS: {telemetry.tps}</span>
          <span>&bull; GAS: ~{telemetry.gasAvg}</span>
          <span style={{ display: 'none' /* hidden on mobile */ }}>&bull; {telemetry.dimensions}</span>
        </div>

        <button
          onClick={() => triggerPulseRef.current?.()}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: isDark ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.85)',
            border: '1px solid var(--cyber-border-subtle)',
            borderRadius: '12px',
            padding: '3px 8px',
            fontSize: '10px',
            color: 'var(--cyber-cyan)',
            cursor: 'pointer',
            fontFamily: 'monospace'
          }}
          title="Click to pulse cryptographic shockwave"
        >
          <Sparkles size={11} color="var(--cyber-cyan)" />
          <span>Pulse Core ({pulseCount})</span>
        </button>
      </div>

      {/* Architecture Meaning & Blueprint Modal */}
      {showMeaningModal && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: isDark ? 'rgba(5, 7, 12, 0.94)' : 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '20px',
            zIndex: 100,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'var(--cyber-cyan)',
                    letterSpacing: '1px'
                  }}
                >
                  SYSTEM ARCHITECTURE BLUEPRINT
                </span>
                <h3
                  style={{
                    margin: '4px 0 0 0',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--cyber-text-primary)'
                  }}
                >
                  The Meaning of the 3D Core
                </h3>
              </div>
              <button
                onClick={() => setShowMeaningModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--cyber-text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Core Thesis Paragraph */}
            <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--cyber-text-secondary)', margin: '0 0 16px 0' }}>
              <strong>The Engineering Thesis:</strong> Autonomous AI agents solve complex reasoning tasks but lack deterministic guarantees and can hallucinate or exceed security policies. Conversely, Web3 smart contracts enforce immutable, mathematically provable consensus without inherent cognitive adaptability.
              <br />
              <br />
              This 3D Core demonstrates how <strong>Muhammad Afzal Iqbal</strong> engineers the convergence: <em>deterministic smart contracts form the security armor that validates, meters, and executes the outputs of autonomous agent swarms.</em>
            </p>

            {/* Architectural Breakdown Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {Object.values(LAYERS_DATA)
                .filter((l) => l.id !== 'all')
                .map((layer) => (
                  <div
                    key={layer.id}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
                      border: `1px solid ${layer.color}33`
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: layer.color, fontFamily: 'monospace' }}>
                        {layer.name}
                      </span>
                      <span
                        style={{
                          fontSize: '9px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: `${layer.color}20`,
                          color: layer.color,
                          fontFamily: 'monospace'
                        }}
                      >
                        {layer.category}
                      </span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--cyber-text-secondary)', margin: '0 0 6px 0', lineHeight: 1.4 }}>
                      {layer.description}
                    </p>
                    <div style={{ fontSize: '10px', color: 'var(--cyber-emerald)', fontWeight: 600 }}>
                      ✓ Verified Proof: {layer.afzalProof}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--cyber-border-subtle)', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => {
                setShowMeaningModal(false);
                document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--cyber-cyan)',
                border: '1px solid var(--cyber-cyan)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
            >
              Read Full Architectural Deep-Dive &darr;
            </button>

            <button
              onClick={() => {
                setShowMeaningModal(false);
                setIsExploded(true);
              }}
              style={{
                backgroundColor: 'var(--cyber-cyan)',
                color: '#0A0D14',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
            >
              Explore in 3D Exploded View &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
