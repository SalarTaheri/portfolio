'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Target, Cpu, TrendingUp } from 'lucide-react';
import { content, ProjectFilter } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import SpotlightCard from '@/components/SpotlightCard';

const DEFAULT_TABS: Record<'en' | 'fa', { id: ProjectFilter; label: string }[]> = {
  en: [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & POS' },
    { id: 'sdk', label: 'SDKs & Telemetry' },
    { id: 'web', label: 'Web & DevOps Tools' },
  ],
  fa: [
    { id: 'all', label: 'همه پروژه‌ها' },
    { id: 'fintech', label: 'فین‌تک و پوز (POS)' },
    { id: 'sdk', label: 'کیت‌های SDK و تله‌متری' },
    { id: 'web', label: 'ابزارهای وب و دواپس' },
  ],
};

export default function FeaturedProjects() {
  const { locale } = useLanguage();
  const section = content[locale].projectsSection;
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const tabs = section.tabs || DEFAULT_TABS[locale];
  const filteredProjects =
    activeFilter === 'all'
      ? section.projects
      : section.projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-[var(--container)] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] px-3.5 py-1.5 rounded-full border border-[rgba(var(--accent-rgb),0.25)] mb-3.5">
            {section.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] tracking-tight mb-3.5">
            {section.title}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[var(--muted)] leading-relaxed">
            {section.subtitle}
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2.5 mb-10" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--accent)] text-white shadow-[0_4px_14px_var(--accent-glow)]'
                    : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--border-light)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const isLarge = activeFilter === 'all' && proj.isBentoLarge;
              const badgeClasses =
                proj.badgeType === 'fintech'
                  ? 'bg-[var(--accent-soft)] text-[var(--accent)] border-[rgba(var(--accent-rgb),0.3)]'
                  : proj.badgeType === 'biometrics'
                  ? 'bg-[var(--cyan-soft)] text-[var(--cyan)] border-[rgba(6,182,212,0.3)]'
                  : 'bg-[var(--amber-soft)] text-[var(--amber)] border-[rgba(245,158,11,0.3)]';

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
                >
                  <SpotlightCard className="h-full flex flex-col hover:border-[var(--border-light)] shadow-[var(--card-shadow)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="px-6 py-4 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between gap-3">
                      <span
                        className={`font-mono text-[11px] sm:text-[11.5px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${badgeClasses}`}
                      >
                        {proj.badge}
                      </span>
                      <span className="font-mono text-[12px] text-[var(--muted)] [direction:ltr]">
                        {proj.period}
                      </span>
                    </div>

                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mb-2.5">
                          {proj.title}
                        </h3>

                        <div className="inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[var(--accent)] mb-4">
                          <TrendingUp className="w-4 h-4 flex-shrink-0" />
                          <span>{proj.impact}</span>
                        </div>

                        <p className="text-[14.5px] text-[var(--muted)] leading-relaxed mb-5">
                          {proj.desc}
                        </p>

                        {(proj.problem || proj.architecture) && (
                          <div
                            className={`grid grid-cols-1 ${
                              isLarge ? 'md:grid-cols-2' : ''
                            } gap-4 my-4 p-4 rounded-[var(--radius)] bg-[var(--bg)] border border-[var(--border)] text-[13px] leading-relaxed`}
                          >
                            {proj.problem && (
                              <div>
                                <div className="flex items-center gap-1.5 font-bold text-[var(--fg)] mb-1.5 text-[13.5px]">
                                  <Target className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                                  <span>{locale === 'fa' ? 'چالش مهندسی' : 'Engineering Challenge'}</span>
                                </div>
                                <p className="text-[var(--fg-soft)]">{proj.problem}</p>
                              </div>
                            )}

                            {proj.architecture && (
                              <div>
                                <div className="flex items-center gap-1.5 font-bold text-[var(--fg)] mb-1.5 text-[13.5px]">
                                  <Cpu className="w-4 h-4 text-[var(--cyan)] flex-shrink-0" />
                                  <span>{locale === 'fa' ? 'معماری و راهکار' : 'System Architecture'}</span>
                                </div>
                                <p className="text-[var(--fg-soft)]">{proj.architecture}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)] mt-4">
                          {proj.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className={`font-mono text-[12px] px-2.5 py-1 rounded-md [direction:ltr] ${
                                t.featured
                                  ? 'bg-[var(--accent-soft)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)] font-semibold'
                                  : 'bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-soft)]'
                              }`}
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-3.5 bg-[var(--surface-hover)] border-t border-[var(--border)] flex items-center justify-between">
                      <span className="font-mono text-[12px] text-[var(--muted)] [direction:ltr]">
                        {proj.footerMeta}
                      </span>

                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors [direction:ltr]"
                        >
                          <span>{proj.linkText || 'Live Site'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-mono text-[12.5px] font-semibold text-[var(--accent)] [direction:ltr]">
                          {proj.linkText}
                        </span>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
