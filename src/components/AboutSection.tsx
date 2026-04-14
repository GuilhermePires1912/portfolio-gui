import React from 'react';
import { TranslationStrings, Language } from '../types';

interface AboutProps {
  t: TranslationStrings;
  language: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ t, language: _language }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{t.about.title}</div>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about-layout">
          {/* Left: Bio + Languages */}
          <div>
            <p className="about-bio">
              {t.about.bio}
            </p>

            <div className="about-langs">
              {t.about.langs.map((lang, i) => (
                <div key={i} className="lang-badge">
                  <span className="flag">{i === 0 ? '🇧🇷' : '🇺🇸'}</span>
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills + Education */}
          <div className="about-right">
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
          </div>
        </div>
      </div>
    </section>
  );
};
