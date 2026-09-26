'use client';


import { Clock, Users, Cpu, Shield } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const icons = [Clock, Users, Cpu, Shield];

export default function ImpactHighlights() {
  const { locale } = useLanguage();
  const section = content[locale].statsSection;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-text-secondary max-w-xl mx-auto text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {section.stats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={stat.label + locale}
                className="glass-card rounded-xl p-6 text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-2 border border-border text-accent-blue">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-text-primary mb-1 dir-ltr">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={1800}
                  />
                </div>

                {/* Label */}
                <div className="text-text-primary font-medium text-sm mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-text-muted text-xs leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
