export type PersonaType = 'web3' | 'ai' | 'convergence';

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  university: {
    name: string;
    department: string;
    degree: string;
    years: string;
    gpa: string;
    scholarship: string;
    scholarshipUrl: string;
  };
  location: string;
  socials: SocialLinks;
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  bio: {
    summary: string;
    web3Focus: string;
    aiFocus: string;
    fullStackFocus: string;
  };
  skills: {
    category: string;
    items: string[];
    domain: 'web3' | 'ai' | 'fullstack' | 'general';
  }[];
}

export interface ProjectArchitecture {
  problem: string;
  solution: string;
  keyInnovations: string[];
  techStack: string[];
  securityOrPerfPatterns?: string[];
  contractOrModelType?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  domain: 'web3' | 'ai' | 'convergence' | 'fullstack';
  tags: string[];
  featured: boolean;
  priority: number;
  githubUrl?: string;
  liveUrl?: string;
  architecture: ProjectArchitecture;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  domain: 'web3' | 'ai' | 'fullstack' | 'teaching';
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  domain: 'ai' | 'web3' | 'data' | 'web' | 'linux';
  skills: string[];
  highlight: boolean;
}

export interface DayStory {
  id: string;
  blockNumber: number;
  date: string;
  title: string;
  category: 'web3' | 'ai' | 'university' | 'milestone' | 'hackathon';
  content: string;
  tags: string[];
  imageUrl?: string;
}

export interface IndustrialVisit {
  id: string;
  title: string;
  location: string;
  date: string;
  host: string;
  keyLearnings: string[];
  category: 'industry-tour' | 'tech-observation' | 'academic-symposium';
  imagePlaceholder?: string;
}
