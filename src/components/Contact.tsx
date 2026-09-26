'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          key={locale + '-header'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-cyan font-mono text-sm font-medium tracking-wider uppercase mb-3">
            {section.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {section.title}
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label + locale}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group text-center hover:border-accent-blue/30 transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    social.color === 'blue'
                      ? 'bg-accent-blue/10 border-accent-blue/25 group-hover:bg-accent-blue/20 group-hover:shadow-glow-blue'
                      : 'bg-accent-cyan/10 border-accent-cyan/25 group-hover:bg-accent-cyan/20 group-hover:shadow-glow-cyan'
                  }`}
                >
                  <Icon
                    size={20}
                    className={social.color === 'blue' ? 'text-accent-blue' : 'text-accent-cyan'}
                  />
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted mb-0.5">{social.label}</div>
                  <div className="text-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors duration-200 flex items-center justify-center gap-1 dir-ltr">
                    <span className="truncate max-w-[160px] font-mono text-xs">{social.text}</span>
                    {social.external && <ExternalLink size={11} className="flex-shrink-0 opacity-60" />}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Location & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-14 text-sm text-text-muted"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-cyan" />
            {section.location}
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span>{section.degree}</span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            {section.status}
          </span>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                <span className="font-mono font-bold text-[10px] text-white">ST</span>
              </div>
              <span className="font-medium text-text-secondary">{currentProfile.name}</span>
            </div>
            <div>{section.builtWith}</div>
            <div>© {new Date().getFullYear()} {section.copyright}</div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
