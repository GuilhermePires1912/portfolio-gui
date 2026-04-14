import React from 'react';
import { TranslationStrings } from '../types';

interface HeroProps {
  t: TranslationStrings;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero::before" />
      <div className="hero-inner">
        <div className="hero-tag">
          Rio de Janeiro, Brasil
        </div>

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
    </section>
  );
};
