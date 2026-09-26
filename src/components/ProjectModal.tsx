'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Target,
  Compass,
  Cpu,
  TrendingUp,
} from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { locale } = useLanguage();
  const t = content[locale].projectsSection;

  // Find project in the active locale
  const localizedProject = project
    ? t.projects.find((p) => p.id === project.id) || project
    : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (localizedProject) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [localizedProject, onClose]);

  const starLabels = t.starLabels || {
    situation: 'Situation & Context',
    task: 'Engineering Mission',
    action: 'Architectural Implementation',
    result: 'Measurable Impact',
  };

  return (
    <AnimatePresence>
      {localizedProject && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-8 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label={localizedProject.title}
          >
            <div className="pointer-events-auto relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-card rounded-2xl border border-border shadow-2xl">
              {/* Header */}
              <div
                className={`sticky top-0 z-10 px-6 pt-6 pb-4 rounded-t-2xl backdrop-blur-md bg-surface/95 border-b border-border ${
                  localizedProject.accentColor === 'blue'
                    ? 'bg-gradient-to-r from-accent-blue/10 to-transparent'
                    : 'bg-gradient-to-r from-accent-cyan/10 to-transparent'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Category badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {localizedProject.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                            localizedProject.accentColor === 'blue'
                              ? 'bg-accent-blue/15 text-accent-blue-light dark:text-accent-blue-light text-blue-600 border border-accent-blue/25'
                              : 'bg-accent-cyan/15 text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600 border border-accent-cyan/25'
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight">
                      {localizedProject.title}
                    </h2>
                    <p
                      className={`mt-1 text-sm font-medium ${
                        localizedProject.accentColor === 'blue' ? 'text-accent-blue' : 'text-accent-cyan'
                      }`}
                    >
                      {localizedProject.tagline}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 transition-all duration-200 mt-1"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Period & Key Metric / Impact */}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={13} />
                    <span>{localizedProject.period}</span>
                  </div>
                  {localizedProject.keyMetric && (
                    <div
                      className={`flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-lg ${
                        localizedProject.accentColor === 'blue'
                          ? 'bg-accent-blue/10 text-accent-blue-light dark:text-accent-blue-light text-blue-600 border border-accent-blue/20'
                          : 'bg-accent-cyan/10 text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600 border border-accent-cyan/20'
                      }`}
                    >
                      ★ {localizedProject.keyMetric}
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-6 space-y-6">
                {localizedProject.star ? (
                  /* ================= STAR FRAMEWORK VIEW ================= */
                  <div className="space-y-6">
                    {/* Situation (S) */}
                    <div className="p-4 rounded-xl bg-surface-2/60 border border-border">
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-blue-light dark:text-accent-blue-light text-blue-600">
                        <Target size={15} className="text-accent-blue" />
                        <span>{starLabels.situation}</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {localizedProject.star.situation}
                      </p>
                    </div>

                    {/* Task (T) */}
                    <div className="p-4 rounded-xl bg-surface-2/60 border border-border">
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600">
                        <Compass size={15} className="text-accent-cyan" />
                        <span>{starLabels.task}</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {localizedProject.star.task}
                      </p>
                    </div>

                    {/* Action (A) */}
                    <div className="p-4 rounded-xl bg-surface-2/60 border border-border">
                      <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-accent-blue-light dark:text-accent-blue-light text-blue-600">
                        <Cpu size={15} className="text-accent-blue" />
                        <span>{starLabels.action}</span>
                      </div>
                      <ul className="space-y-2.5">
                        {localizedProject.star.action.map((actionPoint, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                            <CheckCircle2
                              size={16}
                              className={`flex-shrink-0 mt-0.5 ${
                                localizedProject.accentColor === 'blue'
                                  ? 'text-accent-blue'
                                  : 'text-accent-cyan'
                              }`}
                            />
                            <span className="leading-relaxed">{actionPoint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result (R) */}
                    <div
                      className={`p-4 rounded-xl border ${
                        localizedProject.accentColor === 'blue'
                          ? 'bg-accent-blue/5 border-accent-blue/30'
                          : 'bg-accent-cyan/5 border-accent-cyan/30'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
                        <TrendingUp size={15} />
                        <span>{starLabels.result}</span>
                      </div>
                      <ul className="space-y-2">
                        {localizedProject.star.result.map((resPoint, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-text-primary">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span className="leading-relaxed">{resPoint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* ================= FALLBACK VIEW ================= */
                  <>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono mb-3">
                        {t.theProblem}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{localizedProject.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono mb-3">
                        {t.engineeringSolution}
                      </h3>
                      <ul className="space-y-3">
                        {localizedProject.solution.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                            <CheckCircle2
                              size={16}
                              className={`flex-shrink-0 mt-0.5 ${
                                localizedProject.accentColor === 'blue'
                                  ? 'text-accent-blue'
                                  : 'text-accent-cyan'
                              }`}
                            />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Tech Stack */}
                <div className="pt-2 border-t border-border">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted font-mono mb-3">
                    {t.techStack}
                  </h3>
                  <div className="flex flex-wrap gap-2 dir-ltr">
                    {localizedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                          localizedProject.accentColor === 'blue'
                            ? 'bg-accent-blue/10 border-accent-blue/25 text-accent-blue-light dark:text-accent-blue-light text-blue-600'
                            : 'bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Site Link */}
                {localizedProject.url && (
                  <div className="pt-2">
                    <a
                      href={localizedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105 ${
                        localizedProject.accentColor === 'blue'
                          ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue-light dark:text-accent-blue-light text-blue-600 hover:bg-accent-blue/20 hover:shadow-glow-blue'
                          : 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan-light dark:text-accent-cyan-light text-cyan-600 hover:bg-accent-cyan/20 hover:shadow-glow-cyan'
                      }`}
                    >
                      <ExternalLink size={15} />
                      {t.visitLiveSite}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
