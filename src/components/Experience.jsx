import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'
import { experienceConfig } from '../constants/portfolio'

export function Experience() {
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
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 md:py-28 overflow-hidden border-t border-slate-900/80"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-indigo-950/15 rounded-full blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-950/10 rounded-full blur-[110px] pointer-events-none"
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
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>{experienceConfig.sectionLabel}</span>
            </div>

            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {experienceConfig.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              {experienceConfig.subtitle}
            </p>
          </motion.div>

          {/* Timeline / Experience List */}
          <div className="relative">
            {/* Subtle timeline track on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-slate-800/80"
            />

            <div className="flex flex-col gap-8">
              {experienceConfig.experiences.map((exp) => (
                <motion.article
                  key={exp.id}
                  variants={itemVariants}
                  className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-black/20 md:ml-16"
                  aria-labelledby={`exp-${exp.id}-role`}
                >
                  {/* Subtle timeline node for desktop */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex absolute -left-16 top-8 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500/60 items-center justify-center -translate-x-1/2 group-hover:border-indigo-400 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  </div>

                  {/* Experience Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-slate-800/70">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3
                          id={`exp-${exp.id}-role`}
                          className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight"
                        >
                          {exp.role}
                        </h3>
                        <p className="text-base text-indigo-300 font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950/80 border border-slate-800 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-700/30 text-indigo-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-6">
                    <h4 className="sr-only">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-3 text-sm sm:text-base text-slate-300/90 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Focus areas badge list */}
                  <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">
                      Focus:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-950/60 border border-slate-800 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
