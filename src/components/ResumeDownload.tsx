'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function ResumeDownload() {
  const { locale } = useLanguage();
  const section = content[locale].resumeSection;
  const currentProfile = content[locale].profile;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-text-secondary max-w-lg mx-auto text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Card */}
        <div className="glass-card rounded-xl overflow-hidden">
          {/* Top bar with actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-accent-blue">
                <FileText size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">{section.fileName}</div>
                <div className="text-xs text-text-muted">{section.fileDesc}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={currentProfile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2 text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                {section.openInTab}
              </a>
              <a
                href={currentProfile.resumePdf}
                download="Salar_Taheri_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue-dark text-white text-sm font-medium transition-colors"
              >
                <Download size={14} />
                {section.downloadPdf}
              </a>
            </div>
          </div>

          {/* PDF Preview */}
          <div className="relative bg-surface-2/50">
            <div className="p-4">
              <iframe
                src={`${currentProfile.resumePdf}#view=FitH`}
                title="Resume Preview"
                className="w-full rounded-xl border border-border"
                style={{ height: '520px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
