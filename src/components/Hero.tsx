'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Shield, Zap, CreditCard, ExternalLink } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { locale, isRTL } = useLanguage();
  const hero = content[locale].hero;
  const contact = content[locale].contactSection;

  // Simulator state inside POS terminal
  const [simState, setSimState] = useState<'ready' | 'processing' | 'success'>('ready');

  const handleSimTap = () => {
    if (simState === 'processing') return;
    setSimState('processing');

    setTimeout(() => {
      setSimState('success');
    }, 650);
  };

  return (
    <section id="about" className="relative pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.15),rgba(6,182,212,0.08)_35%,transparent_70%)] blur-[80px] pointer-events-none z-0"
      />

      <div className="max-w-[var(--container)] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-glass)] border border-[var(--border)] backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse-glow" />
              <span className="text-[13px] font-medium text-[var(--fg-soft)]">
                {hero.status}
              </span>
            </div>

            {/* Title with Gradient Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.18] tracking-tight mb-4 text-[var(--fg)]">
              <span>{hero.greeting} </span>
              <span className="text-gradient">{hero.name}</span>
              <span> {hero.titleSuffix}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-semibold text-[var(--fg-soft)] mb-5">
              {hero.role}
            </h2>

            {/* Bio Paragraph */}
            <p className="text-[15px] sm:text-[16.5px] text-[var(--muted)] leading-[1.8] max-w-[580px] mb-8">
              {hero.bio}
            </p>

            {/* Action Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[var(--radius)] bg-[var(--accent)] text-white text-[14.5px] font-semibold shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_6px_22px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{hero.btnProjects}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>{hero.btnEmail}</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_4px_12px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_4px_12px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Portfolio Website"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_4px_12px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
                  title="salartaheri.dev"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive POS Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Floating Metric Badge 1 (Top-Right on LTR, Top-Left on RTL) */}
            <div className="hidden sm:flex absolute -top-5 -end-4 items-center gap-3 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-light)] shadow-[var(--card-shadow)] z-20 animate-float-slow">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-lg text-[var(--fg)] leading-none">
                  99.8%
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">
                  {hero.badgeCrashfree}
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 2 (Bottom-Left on LTR, Bottom-Right on RTL) */}
            <div className="hidden sm:flex absolute -bottom-5 -start-4 items-center gap-3 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-light)] shadow-[var(--card-shadow)] z-20 animate-float-slow [animation-delay:2s]">
              <div className="w-9 h-9 rounded-lg bg-[var(--cyan-soft)] text-[var(--cyan)] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-lg text-[var(--fg)] leading-none dir-ltr">
                  &lt; 200ms
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">
                  {hero.badgeLatency}
                </div>
              </div>
            </div>

            {/* POS Terminal Window */}
            <div className="rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border-light)] hover:border-[rgba(var(--accent-rgb),0.4)] shadow-[var(--card-shadow)] hover:shadow-[0_20px_40px_-15px_var(--accent-glow)] overflow-hidden transition-all duration-300">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>
                <div className="text-[12px] font-mono text-[var(--muted)] [direction:ltr]">
                  {hero.terminalTitle}
                </div>
                <div className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                  {hero.terminalStatus}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-[13px] [direction:ltr] text-left leading-relaxed">
                {/* Command prompt line */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--accent)] font-bold">$</span>
                  <span className="text-[var(--cyan)] break-all">{hero.terminalCommand}</span>
                </div>

                {/* Command output items */}
                <div className="ps-3 border-s-2 border-[var(--border)] my-2 space-y-1 text-[var(--fg-soft)] text-[12px]">
                  {hero.terminalOutputs.map((line, idx) => (
                    <div key={idx} className="break-all">{line}</div>
                  ))}
                </div>

                {/* Live Kehroba NFC / APDU Simulator Box */}
                <div className="mt-4 p-3.5 rounded-[var(--radius)] bg-[var(--bg)] border border-dashed border-[var(--border-light)]">
                  <div className="flex items-center justify-between text-[12px] text-[var(--muted)] mb-3">
                    <span className="font-sans font-medium text-[var(--muted)]">{hero.simHeader}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase transition-colors ${
                        simState === 'ready'
                          ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                          : simState === 'processing'
                          ? 'bg-[var(--amber-soft)] text-[var(--amber)]'
                          : 'bg-[var(--accent-soft)] text-[var(--accent)]'
                      }`}
                    >
                      {simState === 'ready' ? hero.simBadge : simState === 'processing' ? 'BUSY' : 'APPROVED'}
                    </span>
                  </div>

                  <button
                    onClick={handleSimTap}
                    className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[rgba(16,185,129,0.15)] to-[rgba(6,182,212,0.15)] hover:bg-[var(--accent)] text-[var(--fg)] hover:text-white border border-[var(--accent)] text-[12.5px] font-mono font-medium flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                  >
                    <CreditCard className="w-4 h-4 text-[var(--accent)] group-hover:text-white" />
                    <span>{hero.simBtn}</span>
                  </button>

                  <div className="text-[11.5px] font-mono mt-2 min-h-[20px] transition-colors">
                    {simState === 'ready' && (
                      <span className="text-[var(--muted)]">{hero.simReady}</span>
                    )}
                    {simState === 'processing' && (
                      <span className="text-[var(--cyan)] animate-pulse">{hero.simProcessing}</span>
                    )}
                    {simState === 'success' && (
                      <span className="text-[var(--accent)] font-semibold">{hero.simSuccess}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
