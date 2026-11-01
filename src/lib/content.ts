import profileData from '../content/profile.json';
import projectsData from '../content/projects.json';
import experiencesData from '../content/experiences.json';
import certificationsData from '../content/certifications.json';
import storiesData from '../content/stories.json';
import visitsData from '../content/visits.json';

import type {
  ProfileData,
  Project,
  Experience,
  Certification,
  DayStory,
  IndustrialVisit,
  PersonaType
} from '../types/content';

export const getProfile = (): ProfileData => {
  return profileData as ProfileData;
};

export const getProjects = (persona?: PersonaType): Project[] => {
  const allProjects = projectsData as Project[];
  if (!persona || persona === 'convergence') {
    return allProjects;
  }
  return allProjects.filter((project) => {
    if (persona === 'web3') {
      return project.domain === 'web3' || project.domain === 'convergence';
    }
    if (persona === 'ai') {
      return project.domain === 'ai' || project.domain === 'convergence' || project.domain === 'fullstack';
    }
    return true;
  });
};

export const getFeaturedProjects = (): Project[] => {
  return (projectsData as Project[]).filter((p) => p.featured);
};

export const getExperiences = (): Experience[] => {
  return experiencesData as Experience[];
};

export const getCertifications = (): Certification[] => {
  return certificationsData as Certification[];
};

export const getStories = (): DayStory[] => {
  return (storiesData as DayStory[]).sort((a, b) => b.blockNumber - a.blockNumber);
};

export const getVisits = (): IndustrialVisit[] => {
  return visitsData as IndustrialVisit[];
};
