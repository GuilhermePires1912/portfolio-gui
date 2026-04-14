import React from 'react';
import { AdvertisingProject, Language, TranslationStrings } from '../types';

interface ProjectCardProps {
  project: AdvertisingProject;
  language: Language;
  t: TranslationStrings;
  featured?: boolean;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project, language, t, featured, onClick
}) => {
  const title = language === 'pt' ? project.titlePt : project.titleEn;
  const category = language === 'pt' ? project.categoryPt : project.categoryEn;

  return (
    <div
      className={`project-card${featured ? ' featured' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`${title} — ${project.client}`}
    >
      <img
        className="project-card-img"
        src={project.thumbnail}
        alt={title}
        loading="lazy"
        style={project.thumbnailPosition ? { objectPosition: project.thumbnailPosition } : undefined}
      />

      <div className="project-card-overlay">
        <div className="project-card-category">{category}</div>
        <div className="project-card-title">{title}</div>
        <div className="project-card-client">{project.client} · {project.year}</div>
      </div>

      {(project.specialAction || project.vltProject) && (
        <div className="project-card-badge">★ Destaque</div>
      )}

      <div className="project-card-hover-cta">
        <button className="hover-cta-btn" tabIndex={-1}>
          {t.work.watchVideo} →
        </button>
      </div>
    </div>
  );
};
