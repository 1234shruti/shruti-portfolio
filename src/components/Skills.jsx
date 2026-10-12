import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
} from 'lucide-react'
import { skillsConfig } from '../constants/portfolio'
import { GithubIcon } from './Icons'

const CATEGORY_ICONS = {
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 md:py-28 overflow-hidden border-t border-slate-900/80"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-950/15 rounded-full blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-72 h-72 bg-purple-950/10 rounded-full blur-[110px] pointer-events-none"
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
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{skillsConfig.sectionLabel}</span>
            </div>

            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {skillsConfig.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              {skillsConfig.subtitle}
            </p>
          </motion.div>

          {/* Categorized Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {skillsConfig.categories.map((category) => {
              const IconComponent = CATEGORY_ICONS[category.icon] || Code2

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-indigo-950/20"
                >
                  {/* Subtle hover gradient top border */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/30 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    {/* Skill Badges List */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-slate-950/80 border border-slate-800 text-slate-200 group-hover:border-slate-700/80 hover:border-indigo-500/40 hover:text-white transition-all shadow-sm"
                        >
                          {skill === 'GitHub' && (
                            <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                          )}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category count indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{category.skills.length} competencies</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
