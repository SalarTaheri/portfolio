'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content, SkillFilter } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function SkillsMatrix() {
  const { locale } = useLanguage();
  const section = content[locale].skillsSection;
  const [activeTab, setActiveTab] = useState<SkillFilter>('all');

  const filteredCategories =
    activeTab === 'all'
      ? section.categories
      : section.categories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-[var(--container)] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-16">
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

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {section.tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
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

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] p-5 sm:p-6 shadow-[var(--card-shadow)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: cat.colorBg }}
                    >
                      <span>{cat.icon}</span>
                    </div>
                    <h3 className="font-bold text-[16px] text-[var(--fg)]">{cat.title}</h3>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`inline-block font-mono text-[12px] px-2.5 py-1 rounded-md [direction:ltr] ${
                          tag.featured
                            ? 'bg-[var(--accent-soft)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)] font-semibold'
                            : 'bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-soft)]'
                        }`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
