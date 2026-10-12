import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react'
import { contactConfig, siteConfig } from '../constants/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

const CURRENT_YEAR = new Date().getFullYear()

export function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactConfig.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }
    } catch {
      // Fallback if clipboard API is not available
      setCopied(false)
    }
  }

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
      id="contact"
      aria-labelledby="contact-heading"
      className="relative pt-20 md:pt-28 pb-12 overflow-hidden border-t border-slate-900/80"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-950/25 via-blue-950/20 to-purple-950/15 rounded-full blur-[140px] pointer-events-none"
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
              <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
              <span>{contactConfig.sectionLabel}</span>
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {contactConfig.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              {contactConfig.introduction}
            </p>
          </motion.div>

          {/* Contact Methods Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {/* 1. Email Card with Send & Copy features */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/30 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                    Primary
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                  Email
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono break-all">
                  {contactConfig.email}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60 flex flex-wrap items-center gap-2.5">
                {/* Mailto Link */}
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                {/* Copy Email Button with working clipboard functionality */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* 2. GitHub Card */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/30 transition-transform">
                    <GithubIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                    Code &amp; Repos
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                  GitHub
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">
                  @1234shruti
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60">
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-950/80 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  aria-label="View Shruti Jumbad's GitHub profile (opens in a new tab)"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover/link:text-white" />
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* 3. LinkedIn Card */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/30 transition-transform">
                    <LinkedinIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                    Network
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                  LinkedIn
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">
                  in/shrutijumbad11
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60">
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-950/80 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  aria-label="Connect with Shruti Jumbad on LinkedIn (opens in a new tab)"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover/link:text-white" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Simple Footer with Name and dynamically calculated current year */}
          <motion.footer
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500/80" />
              <p>
                © {CURRENT_YEAR} {siteConfig.name}. All rights reserved.
              </p>
            </div>
            <p className="text-slate-600">{siteConfig.location}</p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}
