import React, { useState } from 'react';
import { PersonaProvider } from './context/PersonaContext';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { SandboxesSection } from './components/sandboxes/SandboxesSection';
import { StoriesTimeline } from './components/stories/StoriesTimeline';
import { CredentialsSection } from './components/credentials/CredentialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/navigation/Footer';
import { RecruiterDrawer } from './components/recruiter/RecruiterDrawer';

export default function App() {
  const [isRecruiterDrawerOpen, setIsRecruiterDrawerOpen] = useState(false);

  return (
    <PersonaProvider>
      <div style={{ position: 'relative', minHeight: '100vh', color: '#E2E8F0', overflowX: 'hidden' }}>
        {/* Dynamic 60fps Particle Mesh Canvas */}
        <ParticleBackground />

        {/* Global Navigation Bar */}
        <Navbar onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

        {/* Main Application Sections */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Section with Interactive Shell */}
          <Hero onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)} />

          {/* Featured Architecture Showcases */}
          <ProjectGrid />

          {/* In-Browser Proof-of-Work Sandboxes (Smart Contract & Agentic AI) */}
          <SandboxesSection />

          {/* Day Stories & Industrial Field Visits */}
          <StoriesTimeline />

          {/* Academic Honors & Industry Certifications */}
          <CredentialsSection />

          {/* Direct Contact & Transmission */}
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
  );
}
