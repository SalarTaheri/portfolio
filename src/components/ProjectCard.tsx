'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { locale } = useLanguage();
  const t = content[locale].projectsSection;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className="group glass-card rounded-2xl p-6 cursor-pointer flex flex-col h-full relative"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top: categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
              project.accentColor === 'blue'
                ? 'bg-accent-blue/10 text-blue-600 dark:text-accent-blue-light border border-accent-blue/20'
                : 'bg-accent-cyan/10 text-cyan-600 dark:text-accent-cyan-light border border-accent-cyan/20'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug group-hover:text-accent-blue transition-colors duration-200">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-grow">
        {project.tagline}
      </p>

      {/* Key Metric / Impact */}
      {(project.keyMetric || project.impact) && (
        <div
          className={`mb-4 px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 ${
            project.accentColor === 'blue'
              ? 'bg-accent-blue/10 border-accent-blue/25 text-blue-600 dark:text-accent-blue-light'
              : 'bg-accent-cyan/10 border-accent-cyan/25 text-cyan-600 dark:text-accent-cyan-light'
          }`}
        >
          <span className="font-bold text-accent-cyan">★</span>
          <span className="font-mono font-semibold">{project.keyMetric || project.impact}</span>
        </div>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 dir-ltr">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs font-mono text-text-muted border border-border bg-surface-2"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-2 py-0.5 rounded text-xs font-mono text-text-muted border border-border bg-surface-2">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between gap-2 text-sm font-semibold mt-auto">
        <div className="flex items-center gap-1">
          <span
            className={`${
              project.accentColor === 'blue' ? 'text-accent-blue' : 'text-accent-cyan'
            } group-hover:underline transition-colors duration-200`}
          >
            {t.viewCaseStudy}
          </span>
          <ChevronRight
            size={15}
            className={`${
              project.accentColor === 'blue' ? 'text-accent-blue' : 'text-accent-cyan'
            } group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-200`}
          />
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-mono transition-all duration-200 ${
              project.accentColor === 'blue'
                ? 'border-accent-blue/30 text-blue-600 dark:text-accent-blue-light hover:bg-accent-blue/10'
                : 'border-accent-cyan/30 text-cyan-600 dark:text-accent-cyan-light hover:bg-accent-cyan/10'
            }`}
          >
            <ExternalLink size={11} />
            {t.liveSite}
          </a>
        )}
      </div>

      {/* Hover glow border */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border ${
          project.accentColor === 'blue' ? 'border-accent-blue/40' : 'border-accent-cyan/40'
        }`}
        aria-hidden="true"
      />
    </motion.article>
  );
}
