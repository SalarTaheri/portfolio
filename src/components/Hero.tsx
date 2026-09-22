'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const { locale } = useLanguage();
  const profile = content[locale].profile;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-hero-radial opacity-70" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-accent-cyan/5 blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
      </div>

      {/* Floating animated dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${10 + (i * 6.3) % 80}%`,
              backgroundColor: i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(6,182,212,0.3)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: (i * 0.37) % 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={locale}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue-light text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              {profile.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            {locale === 'fa' ? (
              <>
                <span className="text-text-primary">سالار </span>
                <span className="gradient-text">طاهری</span>
              </>
            ) : (
              <>
                <span className="text-text-primary">Salar </span>
                <span className="gradient-text">Taheri</span>
              </>
            )}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-text-secondary mb-6"
          >
            {profile.title}
          </motion.p>

          {/* Value prop */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-10"
          >
            {profile.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={profile.resumePdf}
              download="Salar_Taheri_Resume.pdf"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white font-semibold text-base transition-all duration-200 shadow-glow-blue hover:shadow-glow-cyan hover:scale-105"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              {profile.downloadResume}
            </a>
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border-bright text-text-primary hover:border-accent-blue/60 hover:bg-accent-blue/10 font-semibold text-base transition-all duration-200 hover:scale-105"
            >
              {profile.viewProjects}
              <ArrowDown size={18} className="animate-bounce" />
            </button>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { val: '10+', label: profile.years },
              { val: '2.5M+', label: profile.users },
              { val: '5+', label: profile.platforms },
              { val: '99.8%', label: profile.crashFree },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-xl px-4 py-3 text-center"
              >
                <div className="text-xl font-bold gradient-text">{s.val}</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          {locale === 'fa' ? 'اسکرول' : 'Scroll'}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-accent-blue/50 to-transparent" />
      </motion.div>
    </section>
  );
}
