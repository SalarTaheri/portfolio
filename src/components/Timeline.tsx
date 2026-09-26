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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-text-secondary max-w-xl mx-auto text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with RTL/LTR adaptivity */}
          <div
            className="absolute start-6 sm:start-8 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {section.timeline.map((entry) => {
              const isExpanded = expandedId === entry.id;

              return (
                <div
                  key={entry.id + locale}
                  className="relative ps-14 sm:ps-18"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute start-4 sm:start-6 top-5 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                      entry.current
                        ? 'border-accent-blue bg-surface'
                        : isExpanded
                        ? 'border-accent-blue bg-surface'
                        : 'border-border bg-surface'
                    }`}
                    aria-hidden="true"
                  >
                    {entry.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card rounded-xl overflow-hidden transition-colors ${
                      isExpanded
                        ? 'border-border-bright'
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
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                              {section.current}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-text-secondary">
                          {entry.role}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs text-text-muted">{entry.period}</span>
                          <span className="flex items-center gap-1 text-xs text-text-muted">
                            <MapPin size={11} />
                            {entry.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-1 text-text-muted">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border/50">
                            <ul className="space-y-2.5 mt-3">
                              {entry.highlights.map((point, pi) => (
                                <li
                                  key={pi}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
                                >
                                  <CheckCircle2
                                    size={15}
                                    className="flex-shrink-0 mt-0.5 text-accent-blue"
                                  />
                                  <span className="leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
