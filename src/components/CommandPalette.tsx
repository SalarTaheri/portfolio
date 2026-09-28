'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Download,
  Copy,
  Check,
  Sun,
  Moon,
  Globe,
  ExternalLink,
  Layers,
  Briefcase,
  FolderGit2,
  Mail,
  User,
  X,
  CornerDownLeft,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { content } from '@/data/portfolio';

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  shortcut?: string;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { locale, toggleLocale, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const contact = content[locale].contactSection;
  const nav = content[locale].nav;

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollTo = useCallback((id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [onClose]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    } catch {}
  }, [contact.email, onClose]);

  const downloadCV = useCallback(() => {
    onClose();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Salar_Taheri_Resume.pdf';
    link.click();
  }, [onClose]);

  // Commands definition
  const commands: CommandItem[] = useMemo(() => {
    const isFa = locale === 'fa';
    return [
      // Quick Actions
      {
        id: 'download-cv',
        category: isFa ? 'اقدامات سریع' : 'Quick Actions',
        title: isFa ? 'دانلود مستقیم رزومه (PDF)' : 'Download Resume (PDF)',
        icon: <Download className="w-4 h-4 text-[var(--accent)]" />,
        shortcut: 'D',
        onSelect: downloadCV,
      },
      {
        id: 'copy-email',
        category: isFa ? 'اقدامات سریع' : 'Quick Actions',
        title: copied
          ? (isFa ? 'ایمیل کپی شد!' : 'Copied to Clipboard!')
          : (isFa ? 'کپی آدرس ایمیل' : 'Copy Email Address'),
        icon: copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4 text-[var(--cyan)]" />,
        shortcut: 'C',
        onSelect: copyEmail,
      },
      {
        id: 'toggle-theme',
        category: isFa ? 'تنظیمات ظاهر' : 'Preferences',
        title: theme === 'dark' ? (isFa ? 'تغییر به حالت روشن' : 'Switch to Light Mode') : (isFa ? 'تغییر به حالت تیره' : 'Switch to Dark Mode'),
        icon: theme === 'dark' ? <Sun className="w-4 h-4 text-[var(--amber)]" /> : <Moon className="w-4 h-4 text-[var(--cyan)]" />,
        shortcut: 'T',
        onSelect: () => {
          toggleTheme();
          onClose();
        },
      },
      {
        id: 'toggle-lang',
        category: isFa ? 'تنظیمات ظاهر' : 'Preferences',
        title: isFa ? 'تغییر زبان به انگلیسی (Switch to English)' : 'تغییر زبان به فارسی (Switch to Persian)',
        icon: <Globe className="w-4 h-4 text-[var(--accent)]" />,
        shortcut: 'L',
        onSelect: () => {
          toggleLocale();
          onClose();
        },
      },
      // Navigation
      {
        id: 'nav-about',
        category: isFa ? 'بخش‌های صفحه' : 'Navigation',
        title: nav.about,
        icon: <User className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => scrollTo('about'),
      },
      {
        id: 'nav-skills',
        category: isFa ? 'بخش‌های صفحه' : 'Navigation',
        title: nav.skills,
        icon: <Layers className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => scrollTo('skills'),
      },
      {
        id: 'nav-experience',
        category: isFa ? 'بخش‌های صفحه' : 'Navigation',
        title: nav.experience,
        icon: <Briefcase className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => scrollTo('experience'),
      },
      {
        id: 'nav-projects',
        category: isFa ? 'بخش‌های صفحه' : 'Navigation',
        title: nav.projects,
        icon: <FolderGit2 className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => scrollTo('projects'),
      },
      {
        id: 'nav-contact',
        category: isFa ? 'بخش‌های صفحه' : 'Navigation',
        title: nav.contact,
        icon: <Mail className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => scrollTo('contact'),
      },
      // Social Profiles
      {
        id: 'social-github',
        category: isFa ? 'شبکه‌های تخصصی' : 'Links',
        title: 'GitHub: SalarTaheri',
        icon: <ExternalLink className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => {
          window.open(contact.githubUrl, '_blank');
          onClose();
        },
      },
      {
        id: 'social-linkedin',
        category: isFa ? 'شبکه‌های تخصصی' : 'Links',
        title: 'LinkedIn: Salar Taheri',
        icon: <ExternalLink className="w-4 h-4 text-[var(--muted)]" />,
        onSelect: () => {
          window.open(contact.linkedinUrl, '_blank');
          onClose();
        },
      },
    ];
  }, [locale, theme, copied, nav, contact, toggleLocale, toggleTheme, copyEmail, downloadCV, onClose, scrollTo]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Keyboard navigation within list
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].onSelect();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Keep selected index valid when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[580px] rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border-light)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
              <Search className="w-5 h-5 text-[var(--muted)] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  locale === 'fa'
                    ? 'دستور یا بخشی را جستجو کنید... (مانند: رزومه، پروژه)'
                    : 'Type a command or search... (e.g. resume, projects)'
                }
                className="w-full bg-transparent text-[15px] text-[var(--fg)] placeholder:text-[var(--muted)] outline-none border-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-[var(--muted)] text-[14px]">
                  {locale === 'fa' ? 'دستوری یافت نشد.' : 'No commands found.'}
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.onSelect}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[var(--radius)] text-start transition-colors duration-150 ${
                        isSelected
                          ? 'bg-[var(--accent-soft)] text-[var(--accent)] font-semibold'
                          : 'text-[var(--fg-soft)] hover:bg-[var(--surface-hover)] hover:text-[var(--fg)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-[var(--accent)] text-white shadow-sm' : 'bg-[var(--bg)] border border-[var(--border)]'
                          }`}
                        >
                          {cmd.icon}
                        </div>
                        <div className="leading-tight">
                          <div className="text-[14px]">{cmd.title}</div>
                          <div className="text-[11px] text-[var(--muted)] mt-0.5">{cmd.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cmd.shortcut && (
                          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] [direction:ltr]">
                            {cmd.shortcut}
                          </span>
                        )}
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-[var(--accent)] opacity-80" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer / Shortcuts Help */}
            <div className="px-4 py-2.5 bg-[var(--bg)] border-t border-[var(--border)] flex items-center justify-between text-[11.5px] font-mono text-[var(--muted)] [direction:ltr]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px]">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px]">↵</kbd>
                  <span>Select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px]">ESC</kbd>
                  <span>Close</span>
                </span>
              </div>
              <div className="text-[11px] text-[var(--accent)] font-semibold">
                Salar Taheri · Mobile Systems
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
