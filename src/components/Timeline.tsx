'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Timeline() {
  const { locale } = useLanguage();
  const section = content[locale].timelineSection;
  const [expandedId, setExpandedId] = useState<string>(section.timeline[0]?.id || 'avaparsi');

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          key={locale + '-header'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-blue font-mono text-sm font-medium tracking-wider uppercase mb-3">
            {section.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {section.title}
          </h2>
          <p className="mt-3 text-text-secondary max-w-xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with RTL/LTR adaptivity */}
          <div
            className="absolute start-6 sm:start-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan/50 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {section.timeline.map((entry, i) => {
              const isExpanded = expandedId === entry.id;

              return (
                <motion.div
                  key={entry.id + locale}
                  initial={{ opacity: 0, x: locale === 'fa' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative ps-16 sm:ps-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute start-4 sm:start-6 top-5 -translate-x-1/2 rtl:translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      entry.current
                        ? 'border-accent-cyan bg-accent-cyan/20 shadow-glow-cyan'
                        : isExpanded
                        ? 'border-accent-blue bg-accent-blue/20 shadow-glow-blue'
                        : 'border-border bg-surface-2'
                    }`}
                    aria-hidden="true"
                  >
                    {entry.current && (
                      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? entry.current
                          ? 'border-accent-cyan/30 shadow-glow-cyan'
                          : 'border-accent-blue/30 shadow-glow-blue'
                        : 'hover:border-border-bright cursor-pointer'
                    }`}
                  >
                    {/* Card header */}
                    <button
                      className="w-full text-start px-5 py-4 flex items-start justify-between gap-4"
                      onClick={() => setExpandedId(isExpanded ? '' : entry.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-base font-bold text-text-primary">
                            {entry.company}
                          </span>
                          {entry.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/25">
                              {section.current}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-text-secondary">
                          {entry.role}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs font-mono text-text-muted">{entry.period}</span>
                          <span className="flex items-center gap-1 text-xs text-text-muted">
                            <MapPin size={11} />
                            {entry.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-1 text-text-muted">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {/* Expandable body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border/50">
                            <ul className="space-y-3 mt-4">
                              {entry.highlights.map((point, pi) => (
                                <motion.li
                                  key={pi}
                                  initial={{ opacity: 0, x: locale === 'fa' ? 10 : -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: pi * 0.06, duration: 0.3 }}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <CheckCircle2
                                    size={15}
                                    className={`flex-shrink-0 mt-0.5 ${
                                      entry.current ? 'text-accent-cyan' : 'text-accent-blue'
                                    }`}
                                  />
                                  <span className="leading-relaxed">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
