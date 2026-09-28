'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Target, Cpu, TrendingUp } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import SpotlightCard from '@/components/SpotlightCard';

export default function FeaturedProjects() {
  const { locale, isRTL } = useLanguage();
  const section = content[locale].projectsSection;

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-[var(--container)] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14 sm:mb-16">
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

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {section.projects.map((proj, idx) => {
            const isLarge = proj.isBentoLarge;
            const badgeClasses =
              proj.badgeType === 'fintech'
                ? 'bg-[var(--accent-soft)] text-[var(--accent)] border-[rgba(var(--accent-rgb),0.3)]'
                : proj.badgeType === 'biometrics'
                ? 'bg-[var(--cyan-soft)] text-[var(--cyan)] border-[rgba(6,182,212,0.3)]'
                : 'bg-[var(--amber-soft)] text-[var(--amber)] border-[rgba(245,158,11,0.3)]';

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
              >
                <SpotlightCard className="h-full flex flex-col hover:border-[var(--border-light)] shadow-[var(--card-shadow)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Card Header Bar */}
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

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mb-2.5">
                        {proj.title}
                      </h3>

                      {/* Impact Highlight */}
                      <div className="inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[var(--accent)] mb-4">
                        <TrendingUp className="w-4 h-4 flex-shrink-0" />
                        <span>{proj.impact}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[14.5px] text-[var(--muted)] leading-relaxed mb-6">
                        {proj.desc}
                      </p>

                      {/* Technical Problem & Architecture Breakdown for Bento Large Cards */}
                      {isLarge && (proj.problem || proj.architecture) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 p-4 rounded-[var(--radius)] bg-[var(--bg)] border border-[var(--border)] text-[13px] leading-relaxed">
                          {proj.problem && (
                            <div>
                              <div className="flex items-center gap-1.5 font-bold text-[var(--fg)] mb-1.5 text-[13.5px]">
                                <Target className="w-4 h-4 text-[#f59e0b]" />
                                <span>{locale === 'fa' ? 'چالش فنی' : 'Technical Challenge'}</span>
                              </div>
                              <p className="text-[var(--fg-soft)]">{proj.problem}</p>
                            </div>
                          )}

                          {proj.architecture && (
                            <div>
                              <div className="flex items-center gap-1.5 font-bold text-[var(--fg)] mb-1.5 text-[13.5px]">
                                <Cpu className="w-4 h-4 text-[var(--cyan)]" />
                                <span>{locale === 'fa' ? 'تصمیم معماری' : 'Architecture & Decisions'}</span>
                              </div>
                              <p className="text-[var(--fg-soft)]">{proj.architecture}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Tech Tags */}
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

                  {/* Card Footer Bar */}
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
        </div>
      </div>
    </section>
  );
}
