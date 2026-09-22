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
        <motion.div
          key={locale + '-header'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-blue font-mono text-sm font-medium tracking-wider uppercase mb-3">
            {section.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">{section.title}</h2>
          <p className="mt-3 text-text-secondary max-w-xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === null
                ? 'bg-accent-blue text-white shadow-glow-blue'
                : 'border border-border text-text-secondary hover:border-accent-blue/50 hover:text-text-primary'
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? cat.color === 'blue'
                      ? 'bg-accent-blue text-white shadow-glow-blue'
                      : 'bg-accent-cyan text-background shadow-glow-cyan'
                    : 'border border-border text-text-secondary hover:border-accent-blue/50 hover:text-text-primary'
                }`}
              >
                {Icon && <Icon size={14} />}
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Category cards */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {displayed.map((category, catIndex) => {
              const Icon = iconMap[category.icon];
              return (
                <motion.div
                  key={category.id + locale}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: catIndex * 0.05 }}
                  className="glass-card rounded-2xl p-5 hover:border-accent-blue/30 transition-all duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        category.color === 'blue'
                          ? 'bg-accent-blue/15 border border-accent-blue/30'
                          : 'bg-accent-cyan/15 border border-accent-cyan/30'
                      }`}
                    >
                      {Icon && (
                        <Icon
                          size={18}
                          className={
                            category.color === 'blue' ? 'text-accent-blue' : 'text-accent-cyan'
                          }
                        />
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{category.name}</h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.05 + skillIndex * 0.02 }}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium border transition-all duration-200 cursor-default hover:scale-105 ${
                          category.color === 'blue'
                            ? 'bg-accent-blue/10 border-accent-blue/25 text-accent-blue-light hover:bg-accent-blue/20 hover:border-accent-blue/50'
                            : 'bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan-light hover:bg-accent-cyan/20 hover:border-accent-cyan/50'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
