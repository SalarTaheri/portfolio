'use client';

import { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Linkedin,
  Github,
} from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function RecruiterQuickView() {
  const { locale } = useLanguage();
  const rqv = content[locale].recruiterQuickView;
  const profile = content[locale].profile;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="rounded-2xl bg-surface border border-border p-6 sm:p-8">
        {/* Header row: Simple title & action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              {locale === 'fa' ? 'در یک نگاه' : 'At a Glance'}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {locale === 'fa'
                ? 'خلاصه سوابق کلیدی، زمینه تخصصی و نحوه ارتباط مستقیم'
                : 'Key background, technical focus, and direct contact details.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumePdf}
              download="Salar_Taheri_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-white bg-accent-blue hover:bg-accent-blue-dark transition-colors duration-150"
            >
              <Download size={15} />
              <span>{rqv.actions.downloadResume}</span>
            </a>
          </div>
        </div>

        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Col 1: Status & Logistics */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {locale === 'fa' ? 'شرایط و دسترسی' : 'Availability & Terms'}
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-surface-2 border border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs text-text-muted font-medium">
                    {locale === 'fa' ? 'شیوه همکاری' : 'Status'}
                  </span>
                </div>
                <div className="text-sm font-semibold text-text-primary mt-1">
                  {rqv.availability.status}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-2 border border-border">
                <div className="text-xs text-text-muted font-medium">
                  {locale === 'fa' ? 'زمان شروع' : 'Notice Period'}
                </div>
                <div className="text-sm font-semibold text-text-primary mt-1">
                  {rqv.availability.noticePeriod}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-2 border border-border">
                <div className="text-xs text-text-muted font-medium">
                  {locale === 'fa' ? 'موقعیت فعلی' : 'Current Base'}
                </div>
                <div className="text-sm font-semibold text-text-primary mt-1">
                  {rqv.availability.location}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Target Roles & Focus */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {locale === 'fa' ? 'نقش‌های هدف و دستاوردها' : 'Target Roles & Focus'}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {rqv.targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-2 text-text-primary border border-border"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="space-y-2.5 pt-1">
              {rqv.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-surface-2 border border-border"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-medium text-text-secondary">{h.label}</span>
                    <span className="text-xs font-bold text-accent-blue">
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

          {/* Col 3: Direct Contact */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {locale === 'fa' ? 'راه‌های ارتباط' : 'Direct Channels'}
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border hover:border-accent-blue text-start transition-colors"
                aria-label={rqv.actions.copyEmail}
              >
                <div className="min-w-0 pe-2">
                  <div className="text-[11px] text-text-muted">{rqv.actions.copyEmail}</div>
                  <div className="text-xs font-mono text-text-primary truncate">
                    {profile.email}
                  </div>
                </div>
                <div className="p-1.5 rounded text-text-muted">
                  {copiedEmail ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </div>
              </button>

              {copiedEmail && (
                <div className="text-center py-0.5 text-xs font-medium text-emerald-500">
                  ✓ {rqv.actions.copied}
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-surface-2 border border-border hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-medium transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-surface-2 border border-border hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-medium transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
