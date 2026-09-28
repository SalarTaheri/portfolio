'use client';

import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { locale } = useLanguage();
  const footer = content[locale].footer;

  return (
    <footer className="py-10 border-t border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] text-[14px]">
      <div className="max-w-[var(--container)] mx-auto px-6 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[var(--fg)]">{footer.name}</span>
          <span>·</span>
          <span className="text-[13.5px]">{footer.copyright}</span>
        </div>

        <div className="font-mono text-[12.5px] text-[var(--fg-soft)] [direction:ltr]">
          <span>{footer.location}</span> · <span className="text-[var(--accent)]">{footer.status}</span>
        </div>
      </div>
    </footer>
  );
}
