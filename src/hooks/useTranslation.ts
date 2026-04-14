import { useState, useCallback } from 'react';
import { Language, TranslationStrings } from '../types';
import { translations } from '../data/translations';

interface UseTranslationReturn {
  language: Language;
  t: TranslationStrings;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export function useTranslation(): UseTranslationReturn {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('gui-lang');
    return (saved as Language) || 'pt';
  });

  const t = translations[language];

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'en' ? 'pt' : 'en';
      localStorage.setItem('gui-lang', next);
      return next;
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('gui-lang', lang);
  }, []);

  return { language, t, toggleLanguage, setLanguage };
}
