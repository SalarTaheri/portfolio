'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Cpu, Shield } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const icons = [Clock, Users, Cpu, Shield];
const iconColors = ['text-accent-blue', 'text-accent-cyan', 'text-accent-blue', 'text-accent-cyan'];
const glowColors = [
  'shadow-glow-blue',
  'shadow-glow-cyan',
  'shadow-glow-blue',
  'shadow-glow-cyan',
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ImpactHighlights() {
  const { locale } = useLanguage();
  const section = content[locale].statsSection;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          key={locale + '-header'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-cyan font-mono text-sm font-medium tracking-wider uppercase mb-3">
            {section.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {section.title}
          </h2>
          <p className="mt-3 text-text-secondary max-w-xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {section.stats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={stat.label + locale}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 text-center group cursor-default hover:${glowColors[i % glowColors.length]} transition-all duration-300`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-2 border border-border group-hover:border-accent-blue/40 transition-colors duration-300"
                  >
                    <Icon size={22} className={`${iconColors[i % iconColors.length]}`} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl font-extrabold gradient-text mb-1 dir-ltr">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={1800}
                  />
                </div>

                {/* Label */}
                <div className="text-text-primary font-semibold text-base mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-text-muted text-xs leading-relaxed">
                  {stat.description}
                </div>

                {/* Bottom shimmer bar */}
                <div className="mt-4 h-0.5 rounded-full shimmer-bar opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
