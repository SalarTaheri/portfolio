'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          key={locale + '-header'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-accent-blue font-mono text-sm font-medium tracking-wider uppercase mb-3">
            {section.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {section.title}
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Top bar with actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center">
                <FileText size={20} className="text-accent-blue" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary font-mono">{section.fileName}</div>
                <div className="text-xs text-text-muted mt-0.5">{section.fileDesc}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={currentProfile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent-blue/50 text-sm font-medium transition-all duration-200"
              >
                <ExternalLink size={15} />
                {section.openInTab}
              </a>
              <a
                href={currentProfile.resumePdf}
                download="Salar_Taheri_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue-light text-white text-sm font-semibold transition-all duration-200 shadow-glow-blue hover:shadow-glow-cyan hover:scale-105"
              >
                <Download size={15} />
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
        </motion.div>
      </div>
    </section>
  );
}
