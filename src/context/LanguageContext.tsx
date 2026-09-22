'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'fa';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio_locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'fa')) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === 'fa' ? 'rtl' : 'ltr';
    } else {
      // Default to English or check browser language
      const browserLang = navigator.language?.toLowerCase();
      if (browserLang.startsWith('fa')) {
        setLocaleState('fa');
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio_locale', newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'fa' ? 'rtl' : 'ltr';
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'fa' : 'en');
  };

  const isRTL = locale === 'fa';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
