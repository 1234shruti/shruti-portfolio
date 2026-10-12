import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  ArrowRight, 
  MapPin, 
  FileText, 
  Code2, 
  Sparkles, 
  Info,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu
} from 'lucide-react'
import { siteConfig } from '../constants/portfolio'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [showResumeNotice, setShowResumeNotice] = useState(false)

  // Motion variants that respect reduced motion
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
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
      id="home"
      aria-label="Introduction and Overview"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients & Mesh (CSS only) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] max-w-full h-[350px] bg-gradient-to-tr from-indigo-900/20 via-blue-900/15 to-purple-900/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability & Location Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 shadow-sm shadow-emerald-950/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{siteConfig.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-800 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{siteConfig.location}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                Shruti Jumbad.
              </span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-medium text-indigo-200/90 tracking-tight leading-snug mb-5"
            >
              I build thoughtful digital experiences with code.
            </motion.p>

            {/* Detailed Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8"
            >
              Software developer and full-stack engineer passionate about crafting robust web applications, engineering reliable backends with Java, solving intricate algorithmic problems, and building practical, user-centered projects from concept to deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 border border-indigo-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary Button: Clearly marked as Pending / In Preparation */}
              <div className="relative w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowResumeNotice(!showResumeNotice)}
                  aria-expanded={showResumeNotice}
                  aria-label="Download Resume (Pending update)"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Download Resume</span>
                  <span className="text-[10px] tracking-wide uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                    Pending
                  </span>
                </button>

                {/* Accessible informative notification banner for resume status */}
                {showResumeNotice && (
                  <div
                    role="alert"
                    className="absolute left-0 sm:left-auto right-0 sm:right-auto top-full mt-2 w-full sm:w-72 p-3 rounded-lg bg-slate-900 border border-slate-700 shadow-xl text-xs text-slate-300 z-30"
                  >
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-200 mb-0.5">Resume Pending Upload</p>
                        <p className="text-slate-400 leading-normal">
                          The official resume PDF is currently being finalized and will be linked here soon. Feel free to connect via the Contact section!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Quick Core Focus Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                  <Code2 className="w-3.5 h-3.5" />
                </span>
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-3.5 h-3.5" />
                </span>
                <span>Java & Modern Systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <span>Clean Architecture</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Abstract Developer Visual Card (Pure CSS & SVGs, No Stock Portraits) */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl shadow-indigo-950/30 overflow-hidden relative">
              {/* Subtle top gradient glow */}
              <div 
                aria-hidden="true" 
                className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" 
              />

              {/* IDE Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                </div>
                
                {/* Active File Tab */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>ShrutiDev.java</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-code text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                <div className="flex items-start gap-4">
                  {/* Line numbers */}
                  <div className="select-none text-slate-600 text-right font-mono flex flex-col gap-1 pr-1 border-r border-slate-800/60">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                  </div>

                  {/* Code lines */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div>
                      <span className="text-purple-400">public class</span>{' '}
                      <span className="text-amber-300">ShrutiDev</span> &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">String</span> role ={' '}
                      <span className="text-emerald-300">&quot;Full-Stack Engineer&quot;</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">String</span> location ={' '}
                      <span className="text-emerald-300">&quot;Pune, India&quot;</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">String</span>[] coreFocus = &#123;
                    </div>
                    <div className="pl-8 text-sky-300">
                      &quot;Java &amp; OOP Systems&quot;,
                    </div>
                    <div className="pl-8 text-sky-300">
                      &quot;Full-Stack Architecture&quot;,
                    </div>
                    <div className="pl-8 text-sky-300">
                      &quot;Algorithmic Problem Solving&quot;
                    </div>
                    <div className="pl-4">&#125;;</div>
                    <div className="pl-4">
                      <span className="text-purple-400">boolean</span> availableForRoles ={' '}
                      <span className="text-amber-400">true</span>;
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>

              {/* Status / Output Footer */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Build Status: Passing</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span>Java 21 • React 19</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
