import React from 'react';
import { AdvertisingProject, TranslationStrings, Language } from '../types';
import { ProjectCard } from './ProjectCard';

interface WorkSectionProps {
  projects: AdvertisingProject[];
  t: TranslationStrings;
  language: Language;
  onOpenProject: (project: AdvertisingProject) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  projects, t, language, onOpenProject
}) => {
  const featured = projects.filter(p => p.featured);
  const regular = projects.filter(p => !p.featured);

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{t.work.title}</div>
          <h2 className="section-title">{t.work.title}</h2>
          <p className="section-sub">{t.work.subtitle}</p>
        </div>
      </div>

      {/* Featured row: 2 columns with bigger cards */}
      <div className="projects-featured">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            language={language}
            t={t}
            featured={i === 0}
            onClick={() => onOpenProject(project)}
          />
        ))}
      </div>

      {/* Regular row: 3 columns */}
      <div className="projects-regular">
        {regular.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            language={language}
            t={t}
            featured={false}
            onClick={() => onOpenProject(project)}
          />
        ))}
      </div>
    </section>
  );
};
