import React, { createContext, useContext, useState, useEffect } from 'react';
import type { PersonaType } from '../types/content';

interface PersonaContextValue {
  persona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  isWeb3: boolean;
  isAi: boolean;
  isConvergence: boolean;
}

const PersonaContext = createContext<PersonaContextValue | undefined>(undefined);

const STORAGE_KEY = 'afzal_portfolio_persona';

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persona, setPersonaState] = useState<PersonaType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as PersonaType;
      if (saved && (saved === 'web3' || saved === 'ai' || saved === 'convergence')) {
        return saved;
      }
    }
    return 'convergence'; // Default to convergence to showcase both disciplines
  });

  const setPersona = (newPersona: PersonaType) => {
    setPersonaState(newPersona);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newPersona);
      // Set data attribute on documentElement for CSS styling transitions
      document.documentElement.setAttribute('data-active-persona', newPersona);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-active-persona', persona);

    // Keyboard shortcut: Press 'P' or 'p' to cycle through personas
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'p' || e.key === 'P') {
        setPersonaState((curr) => {
          const next: PersonaType =
            curr === 'web3' ? 'ai' : curr === 'ai' ? 'convergence' : 'web3';
          localStorage.setItem(STORAGE_KEY, next);
          document.documentElement.setAttribute('data-active-persona', next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [persona]);

  const value: PersonaContextValue = {
    persona,
    setPersona,
    isWeb3: persona === 'web3',
    isAi: persona === 'ai',
    isConvergence: persona === 'convergence'
  };

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>;
};

export const usePersona = (): PersonaContextValue => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
