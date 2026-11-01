# Spec: Muhammad Afzal Iqbal Portfolio (ReactJS + Meta Astryx UI)

## Objective
Build a high-performance, modular, dark-mode cyber-tech portfolio website for **Muhammad Afzal Iqbal**—a Computer Science undergraduate at NED University (class of 2028, merit scholar) specializing in **Web3 / Blockchain Smart Contract Security** and **Applied AI / Machine Learning Engineering**.

The portfolio directly addresses two high-value target audiences:
1. **Web3 Founders, DeFi Protocols & AI Startups:** Hiring for remote contract engineering, technical consulting, and audit-grade smart contracts.
2. **Global Enterprise Tech Recruiters & Hiring Managers:** Evaluating candidates for competitive software engineering, AI, and full-stack roles.

### Core Value Propositions
- **Dual-Persona Interactive Switcher:** Prevents the "diluted generalist" trap by allowing visitors to view the site as a `[Web3 & Smart Contract Specialist]` or an `[Applied AI & Full-Stack Engineer]`, or in `[Convergence]` mode (autonomous on-chain agents).
- **Meta Astryx UI Design System:** Built natively on React 19 with Meta's open-source Astryx UI (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`) for all layout, navigation, cards, drawers, and controls.
- **In-Browser Proof-of-Work Sandboxes:** Interactive smart contract security simulator (reentrancy exploit vs. OpenZeppelin guard) and agentic AI prompt runner (SEPICP research citation pipeline).
- **Zero-Maintenance Modular Content Layer:** File-based typed JSON models (`src/content/`) allowing Afzal to add new certifications, industrial visits, and "day stories" (devlogs) in 60 seconds with simple git commits.
- **Recruiter Fast-Track Drawer:** High-efficiency 30-second ATS-matched summary with one-click direct PDF downloads of his official NED University resume.

---

## Tech Stack
- **Runtime & Language:** Node.js v26+, TypeScript 5+ (Strict mode)
- **Framework & Bundler:** React 19+, Vite
- **UI Design System:** Meta Astryx UI (`@astryxdesign/core` v0.1+, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`)
- **Graphics & Animation:** HTML5 Canvas (60fps interactive particle mesh), Framer Motion (layout morphing), Lucide React (iconography)
- **Styling Architecture:** Meta Astryx CSS tokens + CSS Custom Properties for cyber-tech dark theme overrides

---

## Commands
```bash
# Development server
npm run dev

# Production build (Typecheck + Vite compile)
npm run build

# Preview production build locally
npm run preview

# Strict TypeScript verification
npx tsc --noEmit

# Astryx CLI component inspector (optional agent/developer tool)
npx @astryxdesign/cli component --list
```

---

## Project Structure
```
portfolio/
├── public/
│   ├── resume.pdf                       # Copy of NEDS Resume - Muhammad Afzal Iqbal.pdf
│   └── afzalpic.jpeg                    # Profile image
├── src/
│   ├── types/
│   │   └── content.ts                   # Strict TypeScript schemas for all content entities
│   ├── content/
│   │   ├── profile.json                 # Bio, NED scholarship credentials, verified stats, socials
│   │   ├── projects.json                # Web3 & AI projects, architecture diagrams, live/code links
│   │   ├── experiences.json             # Teaching, EMU Initiative, POM Quality
│   │   ├── certifications.json          # Google AI, DeepLearning.AI, IBM SQL, Meta, Python
│   │   ├── stories.json                 # "Day Stories" / devlog micro-posts
│   │   └── visits.json                  # Industrial visits & field tours
│   ├── context/
│   │   └── PersonaContext.tsx           # Global React Context for persona state & persistence
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx               # Astryx HStack, brand logo, action links
│   │   │   ├── PersonaSwitcher.tsx      # Astryx Tabs/Switch for Web3/AI/Convergence
│   │   │   └── Footer.tsx               # Astryx footer & social channels
│   │   ├── canvas/
│   │   │   └── ParticleBackground.tsx   # Dynamic 60fps canvas particle mesh
│   │   ├── hero/
│   │   │   └── Hero.tsx                 # Astryx VStack, headline, badges, quick actions
│   │   ├── terminal/
│   │   │   └── TerminalWidget.tsx       # Interactive HUD CLI terminal
│   │   ├── projects/
│   │   │   ├── ProjectGrid.tsx          # Astryx Grid with animated persona filtering
│   │   │   └── ProjectCard.tsx          # Astryx Card with architecture tabs
│   │   ├── sandboxes/
│   │   │   ├── SmartContractSimulator.tsx # In-browser reentrancy exploit simulator
│   │   │   └── AiAgentSandbox.tsx       # In-browser SEPICP agentic prompt runner
│   │   ├── stories/
│   │   │   ├── StoriesTimeline.tsx      # Chronological feed with Astryx Cards & Badges
│   │   │   └── StoryModal.tsx           # Astryx Dialog for story details
│   │   ├── credentials/
│   │   │   ├── CertificationsGrid.tsx   # Astryx Grid of certified credentials
│   │   │   └── AcademicMatrix.tsx       # NED University merit scholarship card
│   │   ├── recruiter/
│   │   │   └── RecruiterDrawer.tsx      # Astryx Drawer with 30s summary & PDF download
│   │   └── contact/
│   │       └── ContactSection.tsx       # Astryx Card, Input, Button contact form
│   ├── lib/
│   │   ├── content.ts                   # Data loader and persona filtering helpers
│   │   ├── contractSimulator.ts         # Mock bytecode/call-stack reentrancy engine
│   │   ├── aiAgentSimulator.ts          # SEPICP agentic prompt reasoning mock engine
│   │   └── terminalCommands.ts          # Terminal parser & command registry
│   ├── styles/
│   │   └── astryx-theme.css             # Meta Astryx CSS imports + dark cyber-tech custom properties
│   ├── App.tsx                          # Root layout assembling all modules within Astryx Theme
│   └── main.tsx                         # React 19 entry point
├── SPEC.md                              # This specification
└── package.json
```

---

## Code Style & Implementation Standard

### 1. Strict Meta Astryx Component Usage
All layout containers and controls must use components from `@astryxdesign/core`. Avoid raw `div` tags where an Astryx primitive (`VStack`, `HStack`, `Grid`, `Card`) applies.

```tsx
// Example: Astryx-Powered Project Card Component
import React from 'react';
import { Card } from '@astryxdesign/core/Card';
import { VStack, HStack } from '@astryxdesign/core/Layout';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { Tabs } from '@astryxdesign/core/Tabs';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="glass-cyber-card">
      <VStack gap={3}>
        <HStack justify="space-between" align="center">
          <h3 className="cyber-title">{project.title}</h3>
          <Badge label={project.domain.toUpperCase()} variant="primary" />
        </HStack>
        <p className="cyber-description">{project.summary}</p>
        <HStack gap={2} wrap>
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="neutral" />
          ))}
        </HStack>
        <HStack gap={2} justify="flex-end">
          <Button label="View Architecture" variant="secondary" />
          {project.githubUrl && (
            <Button label="Source Code" variant="primary" onClick={() => window.open(project.githubUrl, '_blank')} />
          )}
        </HStack>
      </VStack>
    </Card>
  );
};
```

### 2. Styling Tokens & Astryx Overrides
All dark-mode variables are declared via CSS custom properties on `--astryx-*` design tokens:
- Background: `--astryx-color-bg: #0A0D14;` (Obsidian)
- Surface: `--astryx-color-surface: rgba(16, 22, 34, 0.75);` (Translucent Glass)
- Border: `--astryx-color-border: rgba(0, 245, 255, 0.15);` (Subtle Cyan Glow)
- Accent Cyan: `#00F5FF` (Web3 & Core)
- Accent Emerald: `#10B981` (Security / Solidity)
- Accent Violet: `#8B5CF6` (AI & LLMs)

---

## Testing Strategy
- **TypeScript Strictness:** Zero implicit `any`, 100% strict type safety checked via `npx tsc --noEmit`.
- **Production Build Integrity:** `npm run build` must complete with zero errors.
- **Client-Side Sandbox Verification:**
  - Smart contract reentrancy exploit simulation executes correctly and verifies guard mitigation.
  - Agentic AI sandbox simulates prompt parsing and returns research paper matches.
- **Responsive Layout Verification:** Verified at 375px (Mobile), 768px (Tablet), and 1280px+ (Desktop).
- **Accessibility:** Keyboard shortcuts supported (`P` for Persona toggle), WCAG 2.1 AA color contrast maintained across dark theme.

---

## Boundaries
- **Always do:**
  - Use Meta's Astryx UI (`@astryxdesign/core`) for all UI, form, layout, and overlay components.
  - Keep content modular: add data via `src/content/*.json` without hardcoding content into UI components.
  - Ensure all interactive sandboxes run purely client-side without requiring third-party API keys or paid RPC connections.
  - Maintain the official resume facts (Muhammad Afzal Iqbal, NED University CS Ugrad 2024-2028, Merit Scholar).
- **Ask first:**
  - Adding third-party component libraries that compete with Meta's Astryx UI.
  - Modifying the core persona structure (`Web3` / `AI` / `Convergence`).
- **Never do:**
  - Replace Astryx components with generic unstyled HTML elements.
  - Commit sensitive personal secrets or private tokens.
  - Introduce heavy 3D assets that cause mobile frame rate drops below 30fps.

---

## Success Criteria
- [ ] React 19 + Meta Astryx UI compiles and loads cleanly with dark cyber-tech styling.
- [ ] Dual-Persona Switcher smoothly transitions between Web3, AI, and Convergence modes.
- [ ] HTML5 canvas renders 60fps dynamic particle mesh adapting to active persona.
- [ ] Interactive HUD Terminal widget responds to user commands (`help`, `skills`, `bio`, `projects`, `clear`).
- [ ] Smart Contract Security Simulator runs interactive reentrancy exploit vs. guard call-stack test in-browser.
- [ ] Agentic AI Sandbox demonstrates SEPICP prompt-to-pedagogical citation pipeline client-side.
- [ ] Modular content feed displays "Day Stories" and industrial visits from typed JSON files.
- [ ] Recruiter Fast-Track drawer provides 30-second summary and downloads `resume.pdf`.
- [ ] `npm run build` succeeds cleanly with 0 TypeScript errors.

---

## Open Questions
- None. Requirements, design system (Meta Astryx UI), content schema, and proof-of-work sandboxes are fully specified.
