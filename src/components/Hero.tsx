import React from 'react';
import { TranslationStrings } from '../types';
import { brands } from '../data/experience';

interface HeroProps {
  t: TranslationStrings;
}

// Duplicate brands for seamless marquee loop
const marqueeItems = [...brands, ...brands, ...brands];

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        {/* Top editorial rule */}
        <div className="hero-top-rule">
          <div className="hero-top-left">
            <span className="hero-dot" />
            <span className="hero-location">Rio de Janeiro, Brasil</span>
          </div>
          <div className="hero-top-right">
            <span className="hero-year">{new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="hero-content">

          {/* Left: name + roles + tagline + CTAs */}
          <div className="hero-left">
            <h1 className="hero-name">
              Guilherme
              <span className="line2">Pires</span>
            </h1>

            <div className="hero-roles">
              <div className="hero-role advertising">{t.hero.role1}</div>
              <div className="hero-role dev">{t.hero.role2}</div>
            </div>

            <p className="hero-tagline">{t.hero.tagline}</p>

            <div className="hero-ctas">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('work')}
              >
                ★ {t.hero.ctaWork}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollTo('dev')}
              >
                &gt;_ {t.hero.ctaDev}
              </button>
            </div>
          </div>

          {/* Right: stats panel */}
          <div className="hero-stats-panel">
            <div className="hero-stat-item">
              <div className="stat-value">{t.hero.stat1Value}</div>
              <div className="stat-label">{t.hero.stat1Label}</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <div className="stat-value">{t.hero.stat2Value}</div>
              <div className="stat-label">{t.hero.stat2Label}</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <div className="stat-value">{t.hero.stat3Value}</div>
              <div className="stat-label">{t.hero.stat3Label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands marquee strip */}
      <div className="brands-strip">
        <div className="brands-strip-label">
          <span>{t.hero.brandsLabel}</span>
          <span className="brands-arrow">→</span>
        </div>
        <div className="brands-marquee">
          <div className="brands-track">
            {marqueeItems.map((brand, i) => (
              <div className="brand-item" key={i}>
                <span className="brand-name">{brand.name}</span>
                <span className="brand-sub">{brand.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
