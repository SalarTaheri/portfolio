'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { locale } = useLanguage();
  const profile = content[locale].profile;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          key={locale}
        >
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-4">
            {locale === 'fa' ? (
              <>
                <span>سالار </span>
                <span className="text-accent-blue">طاهری</span>
              </>
            ) : (
              <>
                <span>Salar </span>
                <span className="text-accent-blue">Taheri</span>
              </>
            )}
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl font-medium text-text-secondary mb-6">
            {profile.title}
          </p>

          {/* Value prop */}
          <p className="max-w-2xl mx-auto text-base text-text-secondary leading-relaxed mb-10">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={profile.resumePdf}
              download="Salar_Taheri_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue-dark text-white font-medium text-sm transition-colors duration-150 shadow-sm"
            >
              <Download size={16} />
              {profile.downloadResume}
            </a>
            <button
              onClick={scrollToProjects}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-text-primary hover:bg-surface-2 font-medium text-sm transition-colors duration-150 shadow-sm"
            >
              {profile.viewProjects}
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Flat editorial metrics row */}
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { val: '10+', label: profile.years },
              { val: '2.5M+', label: profile.users },
              { val: '5+', label: profile.platforms },
              { val: '99.8%', label: profile.crashFree },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center sm:text-start sm:border-r last:border-r-0 border-border/70 sm:pe-4 rtl:sm:border-r-0 rtl:sm:border-l rtl:last:border-l-0 rtl:sm:ps-4"
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                  {s.val}
                </div>
                <div className="text-xs text-text-muted mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
