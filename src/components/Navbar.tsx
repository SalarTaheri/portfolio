'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const t = content[locale].nav;
  const currentProfile = content[locale].profile;

  const navLinks = [
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#stack', label: t.stack },
    { href: '#contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center transition-colors">
            <span className="font-mono font-bold text-xs text-white tracking-tight">ST</span>
          </div>
          <span className="hidden sm:block font-semibold text-text-primary text-sm">
            {currentProfile.name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-2 transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions (Theme Toggle + Language Switcher + Download CV CTA + Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary transition-colors duration-150"
            title={
              theme === 'dark'
                ? locale === 'fa'
                  ? 'تغییر به حالت روشن'
                  : 'Switch to light mode'
                : locale === 'fa'
                ? 'تغییر به حالت تیره'
                : 'Switch to dark mode'
            }
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-indigo-600" />
            )}
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono transition-colors duration-150"
            title={locale === 'en' ? 'تغییر زبان به فارسی' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <Globe size={13} className="text-accent-blue" />
            <span className={locale === 'fa' ? 'text-accent-blue font-bold' : 'text-text-muted'}>
              فا
            </span>
            <span className="text-text-muted/60">/</span>
            <span className={locale === 'en' ? 'text-accent-blue font-bold' : 'text-text-muted'}>
              EN
            </span>
          </button>

          <a
            href={currentProfile.resumePdf}
            download="Salar_Taheri_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-accent-blue hover:bg-accent-blue-dark text-white text-sm font-medium transition-colors duration-150 shadow-sm"
          >
            <Download size={14} />
            {t.downloadCv}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors duration-150"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-start px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={currentProfile.resumePdf}
                  download="Salar_Taheri_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent-blue text-white text-sm font-semibold"
                >
                  <Download size={14} />
                  {t.downloadCv}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
