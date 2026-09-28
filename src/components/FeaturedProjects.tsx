'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {section.projects.map((proj, idx) => {
            const badgeClasses =
              proj.badgeType === 'fintech'
                ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                : proj.badgeType === 'biometrics'
                ? 'bg-[var(--cyan-soft)] text-[var(--cyan)]'
                : 'bg-[var(--amber-soft)] text-[var(--amber)]';

            return (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] shadow-[var(--card-shadow)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="px-6 py-4 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between gap-3">
                  <span
                    className={`font-mono text-[11.5px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${badgeClasses}`}
                  >
                    {proj.badge}
                  </span>
                  <span className="font-mono text-[12px] text-[var(--muted)] [direction:ltr]">
                    {proj.period}
                  </span>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-[20px] font-bold text-[var(--fg)] mb-2.5">
                    {proj.title}
                  </h3>

                  {/* Impact Highlight */}
                  <div className="text-[13.5px] font-semibold text-[var(--accent)] mb-3 leading-snug flex items-center gap-1.5">
                    <span>{proj.impact}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-5 flex-grow">
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`font-mono text-[12px] px-2.5 py-0.5 rounded-md [direction:ltr] ${
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

                {/* Project Footer Bar */}
                <div className="px-6 py-3.5 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-between">
                  <span className="font-mono text-[12px] text-[var(--muted)] [direction:ltr]">
                    {proj.footerMeta}
                  </span>

                  {proj.url ? (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors [direction:ltr]"
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
