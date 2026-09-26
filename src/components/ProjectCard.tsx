'use client';

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
    <article
      className="group glass-card rounded-xl p-5 cursor-pointer flex flex-col h-full relative"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top: categories */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="px-2 py-0.5 rounded text-xs font-medium bg-surface-2 text-text-secondary border border-border"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 leading-snug group-hover:text-accent-blue transition-colors duration-150">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 flex-grow">
        {project.tagline}
      </p>

      {/* Key Metric / Impact */}
      {(project.keyMetric || project.impact) && (
        <div className="mb-4 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-surface-2 border border-border text-text-primary flex items-center gap-1.5">
          <span className="font-semibold">{project.keyMetric || project.impact}</span>
        </div>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 dir-ltr">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs text-text-muted border border-border bg-surface-2"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-1.5 py-0.5 rounded text-xs text-text-muted border border-border bg-surface-2">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-medium mt-auto pt-2 border-t border-border/50">
        <div className="flex items-center gap-1 text-accent-blue group-hover:underline">
          <span>{t.viewCaseStudy}</span>
          <ChevronRight
            size={14}
            className="rtl:rotate-180"
          />
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-2.5 py-1 rounded border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2 text-xs transition-colors"
          >
            <ExternalLink size={11} />
            {t.liveSite}
          </a>
        )}
      </div>
    </article>
  );
}
