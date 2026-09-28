'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, ArrowUpRight, Download, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import CommandPalette from '@/components/CommandPalette';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const { locale, toggleLocale, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const t = content[locale].nav;

  const navItems = [
    { href: '#about', label: t.about, id: 'about' },
    { href: '#skills', label: t.skills, id: 'skills' },
    { href: '#experience', label: t.experience, id: 'experience' },
    { href: '#projects', label: t.projects, id: 'projects' },
    { href: '#contact', label: t.contact, id: 'contact' },
  ];

  // Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--surface-glass)] backdrop-blur-xl border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[var(--container)] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#about');
          }}
          className="flex items-center gap-3 font-extrabold text-lg tracking-tight group"
        >
          <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[var(--accent)] to-[var(--cyan)] flex items-center justify-center text-white font-mono font-bold text-base shadow-[0_4px_14px_var(--accent-glow)] group-hover:scale-105 transition-transform duration-200">
            ST
          </div>
          <div className="leading-tight">
            <div className="text-[var(--fg)] font-bold text-[15px]">
              {locale === 'fa' ? 'سالار طاهری' : 'Salar Taheri'}
            </div>
            <div className="text-[11px] font-mono text-[var(--muted)] font-medium">
              Mobile & Embedded
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative py-1.5 text-[14.5px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-[var(--fg)] font-semibold' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[var(--accent)] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Command Palette, Language, Theme, CTA, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={() => setIsCommandOpen(true)}
            className="inline-flex items-center gap-1.5 h-[38px] px-2.5 sm:px-3 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-soft)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[12.5px] font-mono transition-all duration-200 hover:-translate-y-0.5"
            title={locale === 'fa' ? 'پالت دستورات سریع (Cmd+K)' : 'Command Palette (Cmd+K)'}
            aria-label="Open command palette"
          >
            <Search className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden xl:inline text-[12px]">{locale === 'fa' ? 'دستورات' : 'Search'}</span>
            <kbd className="hidden sm:inline-flex items-center text-[10.5px] font-mono px-1 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] [direction:ltr]">
              ⌘K
            </kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="inline-flex items-center justify-center gap-1.5 h-[38px] px-3 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-soft)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[13px] font-mono font-semibold transition-all duration-200 hover:-translate-y-0.5"
            title={locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4 text-[var(--accent)]" />
            <span>{locale === 'fa' ? 'EN' : 'فا'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-soft)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] transition-all duration-200 hover:-translate-y-0.5"
            title={theme === 'dark' ? 'حالت روشن' : 'حالت تیره'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-[var(--amber)]" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-[var(--cyan)]" />
            )}
          </button>

          {/* CV Download CTA */}
          <a
            href="/resume.pdf"
            download="Salar_Taheri_Resume.pdf"
            className="hidden md:inline-flex items-center gap-1.5 h-[38px] px-3.5 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-soft)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5"
            title={t.downloadCv}
          >
            <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Collaborate CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-2 h-[38px] px-4 rounded-[var(--radius)] bg-[var(--accent)] text-white text-[14px] font-semibold shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_6px_22px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{t.collaborate}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-[38px] h-[38px] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] hover:bg-[var(--surface-hover)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-[var(--border)] bg-[var(--surface)] px-6 py-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-start py-2.5 px-3 rounded-[var(--radius)] text-[15px] font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[var(--accent-soft)] text-[var(--accent)] font-semibold'
                      : 'text-[var(--fg-soft)] hover:bg-[var(--surface-hover)] hover:text-[var(--fg)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[var(--border)] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCommandOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[var(--radius)] bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--fg)] text-[14px] font-medium"
                >
                  <Search className="w-4 h-4 text-[var(--accent)]" />
                  <span>{locale === 'fa' ? 'جستجو و پالت دستورات (⌘K)' : 'Command Palette (⌘K)'}</span>
                </button>
                <a
                  href="/resume.pdf"
                  download="Salar_Taheri_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[var(--radius)] bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--fg)] text-[14px] font-medium"
                >
                  <Download className="w-4 h-4 text-[var(--accent)]" />
                  <span>{t.downloadCv}</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white text-[14.5px] font-semibold shadow-md"
                >
                  <span>{t.collaborate}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Palette Dialog */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </header>
  );
}
