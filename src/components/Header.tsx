import React, { useState, useEffect } from 'react';
import { Language, TranslationStrings } from '../types';

interface HeaderProps {
  t: TranslationStrings;
  language: Language;
  toggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ t, language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header" style={{ boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="header-inner">
        <a
          href="#"
          className="header-logo"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          GUI<span>.</span>
        </a>

        <nav className="header-nav">
          <a href="#work" onClick={e => { e.preventDefault(); scrollTo('work'); }}>{t.nav.work}</a>
          <a href="#dev" onClick={e => { e.preventDefault(); scrollTo('dev'); }}>{t.nav.dev}</a>
          <a href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}>{t.nav.about}</a>
          <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>{t.nav.contact}</a>
        </nav>

        <div className="header-right">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className={language === 'pt' ? 'lang-active' : ''}>PT</span>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};
