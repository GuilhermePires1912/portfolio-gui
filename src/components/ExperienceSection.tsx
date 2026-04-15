import React from 'react';
import { TranslationStrings, Language } from '../types';
import { experiences } from '../data/experience';

interface ExperienceProps {
  t: TranslationStrings;
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ t, language }) => {
  const exp = experiences[language];

  return (
    <section id="experience" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{t.about.experienceTitle}</div>
          <h2 className="section-title">{t.about.experienceTitle}</h2>
        </div>

        <div className="exp-section">
          <div className="exp-list">
            {exp.map((item, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-left">
                  <div className="exp-period-wrap">
                    <span className={`exp-accent exp-accent-${item.accent}`} />
                    <span className="exp-period">{item.period}</span>
                  </div>
                  {item.current && (
                    <span className="exp-current-badge">● Atual</span>
                  )}
                </div>
                <div className="exp-body">
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-desc">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
