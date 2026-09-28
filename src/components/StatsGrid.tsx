'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function StatsGrid() {
  const { locale } = useLanguage();
  const stats = content[locale].stats;

  return (
    <section className="relative z-10 pt-0 pb-16 md:pb-20">
      <div className="max-w-[var(--container)] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] p-5 text-center shadow-[var(--card-shadow)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Top border animated accent gradient line */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Stat Value */}
              <div className="font-mono font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[var(--fg)] mb-2 tracking-tight group-hover:text-[var(--accent)] transition-colors [direction:ltr]">
                {stat.value}
              </div>

              {/* Stat Description */}
              <div className="text-[12.5px] sm:text-[13px] text-[var(--muted)] leading-snug font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
