import React from 'react';
import { TranslationStrings } from '../types';
import { brands } from '../data/experience';

interface HeroProps {
  t: TranslationStrings;
}

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

          {/* Right: brands vertical list */}
          <div className="hero-brands-panel">
            <div className="hero-brands-label">{t.hero.brandsLabel}</div>
            <div className="hero-brands-list">
              {brands.map((brand) => (
                <div className="hero-brand-row" key={brand.name}>
                  <div className="hero-brand-logo-wrap">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="hero-brand-logo"
                    />
                  </div>
                  <span className="hero-brand-sub">{brand.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
