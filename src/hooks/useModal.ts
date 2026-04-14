import { useState, useCallback, useEffect } from 'react';
import { AdvertisingProject } from '../types';

interface UseModalReturn {
  activeProject: AdvertisingProject | null;
  openModal: (project: AdvertisingProject) => void;
  closeModal: () => void;
}

export function useModal(): UseModalReturn {
  const [activeProject, setActiveProject] = useState<AdvertisingProject | null>(null);

  const openModal = useCallback((project: AdvertisingProject) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveProject(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  return { activeProject, openModal, closeModal };
}
