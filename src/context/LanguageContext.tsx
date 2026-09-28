'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'fa';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fa');
  const [mounted, setMounted] = useState(false);

  const applyLocale = (l: Locale) => {
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'fa' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio_locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'fa')) {
      setLocaleState(saved);
      applyLocale(saved);
    } else {
      // Default to Persian (fa / RTL) matching reference design
      setLocaleState('fa');
      applyLocale('fa');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio_locale', newLocale);
    applyLocale(newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'fa' : 'en');
  };

  const isRTL = locale === 'fa';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, isRTL, mounted }}>
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
