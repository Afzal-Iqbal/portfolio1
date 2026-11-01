import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PersonaProvider } from './context/PersonaContext';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { ArchitectureSection } from './components/canvas/ArchitectureSection';
import { SandboxesSection } from './components/sandboxes/SandboxesSection';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { CredentialsSection } from './components/credentials/CredentialsSection';
import { StoriesTimeline } from './components/stories/StoriesTimeline';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/navigation/Footer';
import { RecruiterDrawer } from './components/recruiter/RecruiterDrawer';

export default function App() {
  const [isRecruiterDrawerOpen, setIsRecruiterDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <PersonaProvider>
        <div style={{ position: 'relative', minHeight: '100vh', color: 'var(--cyber-text-primary)', overflowX: 'hidden' }}>
          {/* Dynamic 60fps Particle Mesh Canvas */}
          <ParticleBackground />

          {/* Mobile-First Responsive Navigation Bar with Theme & Persona Controls */}
          <Navbar onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

          {/* Main Application Sections (Organized by 80/20 Impact) */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            {/* 1. Hero: Portrait, Pitch, Actions, and Interactive 3D Core / Shell */}
            <Hero onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

            {/* 2. Behind the Scenes: The Decentralized Synaptic Engine Architectural Breakdown */}
            <ArchitectureSection />

            {/* 3. Top Impact (80%): In-Browser Proof-of-Work Sandboxes (Smart Contract & Agentic AI) */}
            <SandboxesSection />

            {/* 3. Featured Architecture Showcases */}
            <ProjectGrid />

            {/* 4. Academic Honors (100% Merit Scholarship) & Verified Certifications */}
            <CredentialsSection />

            {/* 5. Day Stories & Industrial Field Visits */}
            <StoriesTimeline />

            {/* 6. Direct Contact & Transmission */}
            <ContactSection />
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Recruiter Fast-Track Drawer */}
          <RecruiterDrawer
            isOpen={isRecruiterDrawerOpen}
            onClose={() => setIsRecruiterDrawerOpen(false)}
          />
        </div>
      </PersonaProvider>
    </ThemeProvider>
  );
}
