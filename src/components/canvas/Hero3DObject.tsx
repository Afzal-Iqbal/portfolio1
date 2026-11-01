import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePersona } from '../../context/PersonaContext';
import { useTheme } from '../../context/ThemeContext';

export const Hero3DObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { persona } = usePersona();
  const { isDark } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire 3D object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Colors depending on persona
    const getColor = () => {
      if (persona === 'web3') return { primary: 0x00f5ff, secondary: 0x10b981 };
      if (persona === 'ai') return { primary: 0x8b5cf6, secondary: 0xc084fc };
      return { primary: 0x00f5ff, secondary: 0x8b5cf6 };
    };

    const colors = getColor();

    // 1. Outer Cryptographic Wireframe Cage (Icosahedron)
    const outerGeometry = new THREE.IcosahedronGeometry(1.5, 1);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: colors.primary,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.6
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    mainGroup.add(outerMesh);

    // 2. Inner Neural Core (Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(0.85, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: colors.secondary,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
      emissive: colors.secondary,
      emissiveIntensity: isDark ? 0.35 : 0.2
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Orbital Ring 1 (Horizontal tilt)
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: 0.7
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 4. Orbital Ring 2 (Vertical tilt)
    const ring2Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      transparent: true,
      opacity: 0.6
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Floating Vertex Nodes (representing smart contract validators / AI neurons)
    const nodeCount = 12;
    const nodeGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nodes: THREE.Mesh[] = [];

    const outerVertices = outerGeometry.getAttribute('position');
    for (let i = 0; i < Math.min(outerVertices.count, nodeCount); i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        outerVertices.getX(i),
        outerVertices.getY(i),
        outerVertices.getZ(i)
      );
      mainGroup.add(node);
      nodes.push(node);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(colors.primary, 2, 50);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Mouse / Touch Interaction Controls
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let targetRotation = { x: 0.2, y: 0.2 };
    let currentRotation = { x: 0.2, y: 0.2 };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      targetRotation.y += deltaX * 0.008;
      targetRotation.x += deltaY * 0.008;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
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

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Idle smooth rotation
        if (!isDragging) {
          targetRotation.y += 0.005;
          targetRotation.x += 0.002;
        }

        // Orbital ring animations
        ring1.rotation.z = elapsedTime * 0.4;
        ring2.rotation.z = -elapsedTime * 0.3;

        // Inner core pulsating breath
        const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
        innerMesh.scale.set(scale, scale, scale);
      }

      // Smooth interpolation (damping)
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
      mainGroup.rotation.x = currentRotation.x;
      mainGroup.rotation.y = currentRotation.y;

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
      outerGeometry.dispose();
      outerMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
    };
  }, [persona, isDark]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '320px' }}>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          touchAction: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: 'var(--cyber-text-muted)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '2px 8px',
          borderRadius: '10px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        ✦ Drag 3D Cryptographic Core
      </div>
    </div>
  );
};
