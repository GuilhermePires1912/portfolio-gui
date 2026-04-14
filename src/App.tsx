import React from 'react';
import { useTranslation } from './hooks/useTranslation';
import { useModal } from './hooks/useModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { DevSection } from './components/DevSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { advertisingProjects } from './data/advertisingProjects';
import { devProjects } from './data/devProjects';
import './styles.css';

const App: React.FC = () => {
  const { language, t, toggleLanguage } = useTranslation();
  const { activeProject, openModal, closeModal } = useModal();

  return (
    <>
      <Header
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <main>
        <Hero t={t} />
        <WorkSection
          projects={advertisingProjects}
          t={t}
          language={language}
          onOpenProject={openModal}
        />
        <DevSection
          projects={devProjects}
          t={t}
          language={language}
        />
        <AboutSection t={t} language={language} />
        <ContactSection t={t} />
      </main>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          t={t}
          language={language}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default App;
