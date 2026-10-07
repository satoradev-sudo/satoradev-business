import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { SatoraLogo } from './SatoraLogo';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenDiscovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenDiscovery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'lab', label: 'Lab & Demos' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'company', label: 'Company' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#050811]/90 border-b border-white/[0.08] transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Top subtle neon line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/80 via-purple-500/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand title with official transparent logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="text-left group flex items-center focus:outline-none cursor-pointer"
        >
          <SatoraLogo size="md" />
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]" 
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenDiscovery}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] focus:ring-2 focus:ring-cyan-400/50 focus:outline-none whitespace-nowrap cursor-pointer border border-cyan-300/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
            <span>Scope Diagnostic</span>
          </motion.button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenDiscovery}
            className="px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-700/60 rounded-lg shadow-sm"
          >
            Scope
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.08] bg-[#070B18]/98 backdrop-blur-2xl px-5 pt-3 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                    currentTab === link.id
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
              <div className="pt-3 border-t border-white/[0.06] mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDiscovery();
                  }}
                  className="w-full py-3 px-4 text-center text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg"
                >
                  Launch Scope Diagnostic
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
