import {
  ArrowUpRight,
  Briefcase,
  Hand,
  HeartHandshake,
  Clock,
  Code2,
  Layers,
} from 'lucide-react'
import { GithubIcon } from './Icons'

const ICON_MAP = {
  Briefcase,
  Hand,
  HeartHandshake,
  Code2,
  Layers,
}

export function ProjectCard({ project }) {
  const IconComponent = ICON_MAP[project.icon] || Code2

  return (
    <article
      className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-indigo-950/20"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Decorative top ambient glow on hover */}
      <div
        aria-hidden="true"
        className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div className="flex flex-col">
        {/* Card Header: Icon & Category Label */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/40 transition-all">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 block font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-indigo-300 font-medium">
                {project.shortTitle}
              </span>
            </div>
          </div>

          {/* Minimal code/terminal accent ornament */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/60 border border-slate-800/70 text-[10px] font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span>PROJECT</span>
          </div>
        </div>

        {/* Project Title */}
        <h3
          id={`project-${project.id}-title`}
          className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight leading-snug"
        >
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mt-3.5 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className="mt-6">
          <h4 className="sr-only">Technologies used</h4>
          <div className="flex flex-wrap gap-2" aria-label="Technology badges">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-950/90 border border-slate-800 text-slate-300 group-hover:border-slate-700/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action / Repository Status Footer */}
      <div className="mt-8 pt-5 border-t border-slate-800/70 flex items-center justify-between gap-4">
        {project.isPending || !project.githubUrl ? (
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 bg-slate-950/60 border border-dashed border-slate-700/80 cursor-not-allowed select-none opacity-80"
              title="Repository link pending confirmation"
              aria-disabled="true"
            >
              <GithubIcon className="w-4 h-4 text-slate-500" />
              <span>{project.pendingLabel || 'Repository link pending'}</span>
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
            </span>
          </div>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-indigo-600 hover:text-white border border-slate-700 hover:border-indigo-500/50 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 group/btn"
            aria-label={`View ${project.shortTitle} source code on GitHub (opens in a new tab)`}
          >
            <GithubIcon className="w-4 h-4 text-slate-300 group-hover/btn:text-white" />
            <span>View on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}

        <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
          {project.isPending ? 'Pending Link' : 'Open Source'}
        </span>
      </div>
    </article>
  )
}
