import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'
import { projectsConfig } from '../constants/portfolio'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-20 md:py-28 overflow-hidden border-t border-slate-900/80"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-96 h-96 bg-purple-950/15 rounded-full blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-950/10 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-950/50 border border-indigo-700/40 text-indigo-300 mb-4 shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>{projectsConfig.sectionLabel}</span>
            </div>

            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {projectsConfig.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              {projectsConfig.subtitle}
            </p>
          </motion.div>

          {/* Projects Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
          >
            {projectsConfig.projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="flex">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
