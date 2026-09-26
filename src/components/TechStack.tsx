'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CreditCard, Network, Layers, Shield, type LucideIcon } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  CreditCard,
  Network,
  Layers,
  Shield,
};

export default function TechStack() {
  const { locale } = useLanguage();
  const section = content[locale].techStackSection;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? section.categories.filter((c) => c.id === activeCategory)
    : section.categories;

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-text-secondary max-w-xl mx-auto text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 ${
              activeCategory === null
                ? 'bg-accent-blue text-white'
                : 'border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2'
            }`}
          >
            {section.allTab}
          </button>
          {section.categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 ${
                  activeCategory === cat.id
                    ? 'bg-accent-blue text-white'
                    : 'border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2'
                }`}
              >
                {Icon && <Icon size={14} />}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Category cards */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {displayed.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id + locale}
                  className="glass-card rounded-xl p-5"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-accent-blue">
                      {Icon && <Icon size={16} />}
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{category.name}</h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-xs font-medium border border-border bg-surface-2 text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
