import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Award, Code2, Sparkles, BookOpen } from 'lucide-react'
import { aboutConfig } from '../constants/portfolio'

const ICON_MAP = {
  GraduationCap,
  Award,
  Code2,
  BookOpen,
}

export function About() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-28 overflow-hidden border-t border-slate-900/80"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-950/15 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-10 w-80 h-80 bg-blue-950/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-12"
        >
          {/* Section Header & Bio */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-950/50 border border-indigo-700/40 text-indigo-300 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{aboutConfig.sectionLabel}</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {aboutConfig.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              {aboutConfig.introduction}
            </p>
          </motion.div>

          {/* Three Compact Information Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          >
            {aboutConfig.cards.map((card) => {
              const IconComponent = ICON_MAP[card.icon] || Code2

              return (
                <div
                  key={card.id}
                  className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 transition-all duration-300 shadow-lg shadow-black/20 flex flex-col justify-between"
                >
                  {/* Subtle hover gradient ring */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  />

                  <div>
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/30 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                      {card.title}
                    </h3>

                    {/* Main Headline */}
                    <div className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight">
                      {card.headline}
                    </div>

                    {/* Subline */}
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      {card.subline}
                    </p>
                  </div>

                  {/* Concise summary matching the requested card details */}
                  <div className="mt-5 pt-4 border-t border-slate-800/60 text-xs text-slate-300/80 leading-relaxed">
                    {card.description}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
