import React, { useState } from 'react';
import { PersonaProvider } from './context/PersonaContext';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';

export default function App() {
  const [isRecruiterDrawerOpen, setIsRecruiterDrawerOpen] = useState(false);

  return (
    <PersonaProvider>
      <div style={{ position: 'relative', minHeight: '100vh', color: '#E2E8F0', overflowX: 'hidden' }}>
        {/* Dynamic Canvas Background */}
        <ParticleBackground />

        {/* Global Navigation Bar */}
        <Navbar onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

        {/* Main Content Layout */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Section with Interactive Terminal */}
          <Hero onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

          {/* Placeholder for Sections in upcoming Tasks 6-12 */}
          <div id="projects" style={{ minHeight: '40px' }} />
          <div id="sandboxes" style={{ minHeight: '40px' }} />
          <div id="stories" style={{ minHeight: '40px' }} />
          <div id="credentials" style={{ minHeight: '40px' }} />
        </main>
      </div>
    </PersonaProvider>
  );
}
