'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import SpotlightCard from '@/components/SpotlightCard';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function StatsGrid() {
  const { locale } = useLanguage();
  const stats = content[locale].stats;

  return (
    <section aria-label="Key Engineering Impact Metrics" className="relative z-10 pt-0 pb-16 md:pb-20">
      <div className="max-w-[var(--container)] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((stat, idx) => {
            const hasDecimals = stat.numericValue % 1 !== 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <SpotlightCard className="p-5 sm:p-6 text-start shadow-[var(--card-shadow)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="font-mono font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[var(--fg)] mb-2 tracking-tight group-hover:text-[var(--accent)] transition-colors [direction:ltr] inline-block">
                    {locale === 'en' ? (
                      <>
                        {stat.prefix}
                        <AnimatedCounter
                          target={stat.numericValue}
                          decimals={hasDecimals ? 1 : 0}
                          suffix={stat.suffix}
                        />
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>

                  <div className="text-[13px] sm:text-[14px] text-[var(--muted)] leading-relaxed font-medium">
                    {stat.label}
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
