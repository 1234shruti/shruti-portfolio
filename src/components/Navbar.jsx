import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react'
import { siteConfig } from '../constants/portfolio'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position to apply glassmorphic backdrop on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/70 py-3.5 shadow-lg shadow-black/30'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-wider text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md py-1 px-1.5"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/40 transition-colors">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="tracking-widest uppercase text-xs sm:text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
              {siteConfig.wordmark}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {siteConfig.navLinks.map((link) => {
                const isContact = link.name === 'Contact'
                if (isContact) return null // Rendered separately as highlighted button

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Highlighted Contact Button */}
            <div className="ml-3 pl-3 border-l border-slate-800">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-700/40 hover:border-indigo-500/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-sm shadow-indigo-950/50"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pt-3 pb-6 shadow-2xl"
          >
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {siteConfig.navLinks.map((link) => {
                const isContact = link.name === 'Contact'
                if (isContact) return null

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2 mt-1 border-t border-slate-900">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-indigo-300 bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
