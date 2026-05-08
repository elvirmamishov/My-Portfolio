import { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => prev === 'en' ? 'az' : 'en');
  };

  return { language, t, toggleLanguage };
}