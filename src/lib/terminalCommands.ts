import { getProfile, getProjects, getCertifications } from './content';

export interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
  timestamp: string;
}

export const executeTerminalCommand = (rawCommand: string): string => {
  const cmd = rawCommand.trim().toLowerCase();
  const profile = getProfile();
  const projects = getProjects();
  const certs = getCertifications();

  switch (cmd) {
    case 'help':
      return `AVAILABLE COMMANDS:
  • bio          - View Muhammad Afzal's executive engineering background
  • skills       - List verified skills across Web3, AI, and Full-Stack
  • projects     - Inspect featured projects (UUPS vault, SEPICP, Arbitrage)
  • certs        - Display verified Google AI, DeepLearning.AI, & IBM certs
  • scholarship  - Inspect NED University academic merit scholarship details
  • contact      - Get direct email, LinkedIn, and telephone contacts
  • clear        - Clear terminal history`;

    case 'bio':
      return `[ENGINEERING PROFILE]
Name: ${profile.name}
Role: ${profile.title}
University: ${profile.university.name} (${profile.university.years})
Degree: ${profile.university.degree} | GPA: ${profile.university.gpa}
Bio: ${profile.bio.summary}`;

    case 'skills':
      return `[VERIFIED TECHNICAL PROFICIENCIES]
• Web3 / Blockchain: Solidity, Hardhat, UUPS Upgradeable Proxies, Reentrancy Protection, Ethers.js, IPFS
• AI & Applied ML: Agentic AI Workflows, LLM Orchestration, Prompt Engineering, Python, Scikit-Learn, YOLOv8
• Full-Stack & DBs: React 19, Meta Astryx UI, Node.js, Express, Django REST, MySQL, Oracle XE, Supabase`;

    case 'projects':
      return `[FEATURED PROTOCOLS & SYSTEMS]
${projects
  .map(
    (p, i) =>
      `[${i + 1}] ${p.title} (${p.domain.toUpperCase()})
    ${p.summary}
    Stack: ${p.tags.join(', ')}`
  )
  .join('\n\n')}`;

    case 'certs':
      return `[OFFICIAL INDUSTRY CERTIFICATIONS]
${certs
  .map((c) => `• ${c.title} — ${c.issuer} (${c.issueDate})`)
  .join('\n')}`;

    case 'scholarship':
      return `[ACADEMIC SCHOLARSHIP]
Award: ${profile.university.scholarship}
Department: ${profile.university.department}
GPA Progression: 3.09 (Sem 1) -> 3.38 (Sem 2) -> 3.20 (Sem 3) -> 3.34 (Sem 4)
Ranking/Category: Above Average / Excellent Academic Standing
Verification: ${profile.university.scholarshipUrl}`;

    case 'contact':
      return `[DIRECT CONTACT DETAILS]
Email: ${profile.socials.email}
LinkedIn: ${profile.socials.linkedin}
Phone: ${profile.socials.phone}
Location: ${profile.location}`;

    default:
      return `bash: command not found: "${cmd}". Type "help" to see available system commands.`;
  }
};
