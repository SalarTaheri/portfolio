'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { content, type ProjectFilter, type Project } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const INITIAL_VISIBLE = 4;

export default function Projects() {
  const { locale } = useLanguage();
  const section = content[locale].projectsSection;

  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'all'
    ? section.projects
    : section.projects.filter((p) => p.filter.includes(activeFilter));

  const displayedProjects = (activeFilter === 'all' && !showAll)
    ? filtered.slice(0, INITIAL_VISIBLE)
    : filtered;

  const hasMore = activeFilter === 'all' && filtered.length > INITIAL_VISIBLE;

  const handleFilterChange = (filterId: ProjectFilter) => {
    setActiveFilter(filterId);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              {section.title}
            </h2>
            <p className="mt-2 text-text-secondary max-w-xl mx-auto text-base">
              {section.subtitle}
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap justify-center gap-1.5 mb-10"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {section.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 ${
                  activeFilter === filter.id
                    ? 'bg-accent-blue text-white'
                    : 'border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2'
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <span className="ms-1.5 text-xs bg-white/20 px-1.5 py-0.2 rounded-full">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter + locale + (showAll ? '-all' : '-compact')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedProjects.map((project, i) => (
                <div key={project.id} className="relative">
                  <ProjectCard
                    project={project}
                    index={i}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show All Projects toggle button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:bg-surface-2 text-text-primary text-sm font-medium transition-colors duration-150 cursor-pointer"
              >
                <span>
                  {showAll
                    ? locale === 'fa'
                      ? 'بستن پروژه‌های بیشتر'
                      : 'Show Less'
                    : locale === 'fa'
                    ? `مشاهده سایر پروژه‌ها (+${filtered.length - INITIAL_VISIBLE} پروژه دیگر)`
                    : `Show All Projects (+${filtered.length - INITIAL_VISIBLE} more)`}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
