import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PersonaProvider } from './context/PersonaContext';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { SkillsSection } from './components/skills/SkillsSection';
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

          {/* Minimalist Glassmorphic Navigation Bar */}
          <Navbar
            onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)}
          />

          {/* Streamlined Core Sections: Hero -> Projects -> Skills & Honors -> Contact */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            {/* 1. Hero: Portrait with Animated Glow Ring, Punchy Pitch, and Quick CTAs */}
            <Hero
              onOpenRecruiterDrawer={() => setIsRecruiterDrawerOpen(true)}
            />

            {/* 2. Visual-First Featured Projects with Real Screenshots & Deep-Dive Modals */}
            <ProjectGrid />

            {/* 3. Core Superpowers & NED University 100% Academic Merit Scholarship */}
            <SkillsSection />

            {/* 4. High-Converting Direct Outreach & Transmission */}
            <ContactSection />
          </main>

          {/* Minimal Footer with Smooth Scroll-to-Top */}
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
