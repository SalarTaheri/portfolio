'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Clock,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Download,
  Linkedin,
  Github,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function RecruiterQuickView() {
  const { locale } = useLanguage();
  const rqv = content[locale].recruiterQuickView;
  const profile = content[locale].profile;

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2200);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-3xl glass-card border border-border shadow-card overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        {/* Subtle ambient background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none" />

        {/* Header row: Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-accent-blue/15 text-accent-blue-light border border-accent-blue/30 mb-2">
              <UserCheck size={14} className="text-accent-cyan" />
              <span>{rqv.badge}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              {rqv.title}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {rqv.subtitle}
            </p>
          </div>

          {/* Quick ATS Resume Download */}
          <div className="flex items-center gap-3">
            <a
              href={profile.resumePdf}
              download="Salar_Taheri_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 hover:shadow-glow-blue transition-all duration-200 active:scale-[0.98]"
            >
              <Download size={16} />
              <span>{rqv.actions.downloadResume}</span>
            </a>
          </div>
        </div>

        {/* 3-Column Recruiter Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Col 1: Availability & Logistics (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono flex items-center gap-2">
              <Sparkles size={14} className="text-accent-cyan" />
              <span>{locale === 'fa' ? 'وضعیت دسترسی و شرایط کاری' : 'Status & Logistics'}</span>
            </div>

            <div className="space-y-3">
              {/* Availability Status */}
              <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border flex items-start gap-3">
                <span className="relative flex h-3 w-3 mt-1 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs text-text-muted font-medium">
                    {locale === 'fa' ? 'شیوه همکاری' : 'Availability'}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-0.5">
                    {rqv.availability.status}
                  </div>
                </div>
              </div>

              {/* Notice Period */}
              <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border flex items-start gap-3">
                <Clock size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted font-medium">
                    {locale === 'fa' ? 'زمان شروع' : 'Notice Period'}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-0.5">
                    {rqv.availability.noticePeriod}
                  </div>
                </div>
              </div>

              {/* Location & Relocation */}
              <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border flex items-start gap-3">
                <MapPin size={16} className="text-accent-blue mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted font-medium">
                    {locale === 'fa' ? 'موقعیت فعلی و جابجایی' : 'Current Base'}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-0.5">
                    {rqv.availability.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Target Roles & Top 3 Impacts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono flex items-center gap-2">
              <Briefcase size={14} className="text-accent-blue" />
              <span>{locale === 'fa' ? 'نقش‌های هدف و دستاوردهای کلیدی' : 'Target Roles & Hard Impact'}</span>
            </div>

            {/* Target Role Tags */}
            <div className="flex flex-wrap gap-2">
              {rqv.targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-surface-2 text-text-primary border border-border"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Top 3 Impact Metric Cards */}
            <div className="space-y-2.5 pt-1">
              {rqv.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-surface-2/50 border border-border hover:border-accent-blue/30 transition-colors duration-200"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-medium text-text-secondary">{h.label}</span>
                    <span className="text-sm font-bold font-mono text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600">
                      {h.metric}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Recruiter Contact & Quick Copy (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>{locale === 'fa' ? 'تماس فوری' : 'Direct Channels'}</span>
            </div>

            <div className="space-y-2.5">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="w-full group flex items-center justify-between p-3 rounded-xl bg-surface border border-border hover:border-accent-blue/40 hover:bg-surface-2 transition-all duration-200 text-left"
                aria-label={rqv.actions.copyEmail}
              >
                <div className="min-w-0 pr-2">
                  <div className="text-[11px] text-text-muted font-medium">{rqv.actions.copyEmail}</div>
                  <div className="text-xs font-mono text-text-primary truncate">
                    {profile.email}
                  </div>
                </div>
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-surface-2 text-text-muted group-hover:text-accent-blue transition-colors">
                  {copiedField === 'email' ? (
                    <Check size={15} className="text-emerald-500" />
                  ) : (
                    <Copy size={15} />
                  )}
                </div>
              </button>

              {/* Copy Phone Button */}
              <button
                type="button"
                onClick={() => copyToClipboard(profile.phone, 'phone')}
                className="w-full group flex items-center justify-between p-3 rounded-xl bg-surface border border-border hover:border-accent-cyan/40 hover:bg-surface-2 transition-all duration-200 text-left"
                aria-label={rqv.actions.copyPhone}
              >
                <div className="min-w-0 pr-2">
                  <div className="text-[11px] text-text-muted font-medium">{rqv.actions.copyPhone}</div>
                  <div className="text-xs font-mono text-text-primary dir-ltr">
                    {profile.phone}
                  </div>
                </div>
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-surface-2 text-text-muted group-hover:text-accent-cyan transition-colors">
                  {copiedField === 'phone' ? (
                    <Check size={15} className="text-emerald-500" />
                  ) : (
                    <Copy size={15} />
                  )}
                </div>
              </button>

              {/* Toast feedback */}
              {copiedField && (
                <div className="text-center py-1 text-xs font-medium text-emerald-500 animate-fade-in">
                  ✓ {rqv.actions.copied}
                </div>
              )}

              {/* Social/Network Links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-surface border border-border hover:border-accent-blue/40 text-text-secondary hover:text-accent-blue text-xs font-medium transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-surface border border-border hover:border-accent-cyan/40 text-text-secondary hover:text-accent-cyan text-xs font-medium transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
