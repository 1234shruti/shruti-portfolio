import React from 'react'

export function TechBadge({ icon: Icon, name, version, status }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl shadow-sm hover:border-slate-700 transition-colors">
      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm text-slate-200">{name}</span>
          <span className="text-xs font-mono text-slate-400">{version}</span>
        </div>
        <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {status}
        </p>
      </div>
    </div>
  )
}
