import React from 'react';
import { TranslationStrings, Language } from '../types';
import { experiences } from '../data/experience';

interface AboutProps {
  t: TranslationStrings;
  language: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ t, language }) => {
  const exp = experiences[language];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{t.about.title}</div>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        {/* Bio - full width lead */}
        <p className="about-bio about-bio-lead">{t.about.bio}</p>

        {/* Experience timeline */}
        <div className="exp-section">
          <div className="exp-section-header">
            <span className="exp-section-label">{t.about.experienceTitle}</span>
          </div>
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

        {/* Skills + Education two-column */}
        <div className="about-layout">
          {/* Left: Skills */}
          <div className="about-skills-col">
            <div className="skills-block advertising">
              <h4>Publicidade & Marketing</h4>
              <div className="skills-list">
                {t.about.skillsAd.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-block dev-skills">
              <h4>Dev & Tech</h4>
              <div className="skills-list">
                {t.about.skillsDev.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education + Languages */}
          <div className="about-edu-col">
            <div className="skills-block">
              <h4 style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
                {t.about.educationTitle}
              </h4>
              <ul className="education-list">
                {t.about.education.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="about-langs">
              {t.about.langs.map((lang, i) => (
                <div key={i} className="lang-badge">
                  <span className="flag">{i === 0 ? '🇧🇷' : '🇺🇸'}</span>
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
