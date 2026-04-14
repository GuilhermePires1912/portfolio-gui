import React from 'react';
import { DevProject, TranslationStrings, Language } from '../types';

interface DevSectionProps {
  projects: DevProject[];
  t: TranslationStrings;
  language: Language;
}

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface DevCardProps {
  project: DevProject;
  t: TranslationStrings;
  language: Language;
}

const DevCard: React.FC<DevCardProps> = ({ project, t, language }) => {
  const description = language === 'pt' ? project.descriptionPt : project.descriptionEn;

  return (
    <div className="dev-card">
      <div className="dev-card-header">
        <div>
          <div className="dev-card-name">{project.name}</div>
        </div>
        <div className="dev-card-icon">
          <CodeIcon />
        </div>
      </div>

      <p className="dev-card-desc">{description}</p>

      <div className="dev-card-tech">
        {project.tech.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      <div className="dev-card-links">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ padding: '8px 16px', fontSize: '0.65rem' }}
        >
          <ExternalLinkIcon /> {t.dev.viewCode}
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.65rem' }}
          >
            {t.dev.viewLive} ↗
          </a>
        )}
      </div>
    </div>
  );
};

export const DevSection: React.FC<DevSectionProps> = ({ projects, t, language }) => {
  return (
    <section id="dev" className="dev-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ color: 'var(--green)' }}>
            <span style={{ background: 'var(--green)' }} />
            &gt;_ {t.dev.title}
          </div>
          <h2 className="section-title">{t.dev.title}</h2>
          <p className="section-sub">{t.dev.subtitle}</p>
        </div>

        <div className="dev-grid">
          {projects.map(project => (
            <DevCard
              key={project.id}
              project={project}
              t={t}
              language={language}
            />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a
            href="https://github.com/GuilhermePires1912"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            ◈ GitHub: GuilhermePires1912
          </a>
        </div>
      </div>
    </section>
  );
};
