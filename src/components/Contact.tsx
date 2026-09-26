'use client';

import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { locale } = useLanguage();
  const section = content[locale].contactSection;
  const currentProfile = content[locale].profile;

  const socials = [
    {
      label: section.emailLabel,
      icon: Mail,
      href: `mailto:${currentProfile.email}`,
      text: currentProfile.email,
      color: 'blue' as const,
    },
    {
      label: section.linkedinLabel,
      icon: Linkedin,
      href: currentProfile.linkedin,
      text: 'linkedin.com/in/salar-taheri',
      color: 'cyan' as const,
      external: true,
    },
    {
      label: section.githubLabel,
      icon: Github,
      href: currentProfile.github,
      text: 'github.com/salartaheri',
      color: 'blue' as const,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-text-secondary max-w-lg mx-auto text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label + locale}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 group text-center hover:border-border-bright transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-2 border border-border text-accent-blue">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted mb-0.5">{social.label}</div>
                  <div className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-accent-blue transition-colors flex items-center justify-center gap-1 dir-ltr">
                    <span className="truncate max-w-[180px]">{social.text}</span>
                    {social.external && <ExternalLink size={11} className="flex-shrink-0 opacity-60" />}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Location & Education */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14 text-xs sm:text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-blue" />
            {section.location}
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span>{section.degree}</span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {section.status}
          </span>
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent-blue flex items-center justify-center">
                <span className="font-mono font-bold text-[10px] text-white">ST</span>
              </div>
              <span className="font-medium text-text-secondary">{currentProfile.name}</span>
            </div>
            <div>{section.builtWith}</div>
            <div>© {new Date().getFullYear()} {section.copyright}</div>
          </div>
        </footer>
      </div>
    </section>
  );
}
