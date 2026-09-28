'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperienceTimeline() {
  const { locale, isRTL } = useLanguage();
  const section = content[locale].experienceSection;

  return (
    <section id="experience" className="py-16 md:py-24 relative">
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

        {/* Timeline Container */}
        <div className="max-w-[900px] mx-auto relative">
          {/* Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 w-[2px] bg-[var(--border)] start-4 sm:start-6 pointer-events-none"
          />

          <div className="space-y-10">
            {section.timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative ps-11 sm:ps-16"
              >
                {/* Glowing Timeline Dot */}
                <div
                  aria-hidden="true"
                  className="absolute top-6 start-2 sm:start-4 -translate-x-1/2 rtl:translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[var(--bg)] border-[3px] border-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)] z-10"
                />

                {/* Experience Card */}
                <div className="rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border)] hover:border-[rgba(var(--accent-rgb),0.4)] p-6 sm:p-8 shadow-[var(--card-shadow)] hover:-translate-y-0.5 transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-[19px] font-bold text-[var(--fg)]">
                        {item.role}
                      </h3>
                      <div className="text-[var(--accent)] font-semibold text-[14.5px] mt-0.5">
                        {item.company}
                      </div>
                    </div>
                    <div className="font-mono text-[12px] sm:text-[12.5px] text-[var(--muted)] bg-[var(--bg)] px-3 py-1 rounded-[var(--radius)] border border-[var(--border)] [direction:ltr]">
                      {item.period}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-4 ps-5 list-disc marker:text-[var(--accent)] text-[var(--fg-soft)] text-[14px] sm:text-[14.5px] leading-relaxed">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)] mt-4">
                    {item.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className={`font-mono text-[12px] px-2.5 py-1 rounded-md [direction:ltr] ${
                          chip.featured
                            ? 'bg-[var(--accent-soft)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)] font-semibold'
                            : 'bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-soft)]'
                        }`}
                      >
                        {chip.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
