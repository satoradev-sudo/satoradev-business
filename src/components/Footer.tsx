import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';
import { SatoraLogo } from './SatoraLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenDiscovery: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onOpenDiscovery }) => {
  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060C] border-t border-white/[0.08] text-slate-400 overflow-hidden">
      {/* Top glowing ambient gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 to-transparent opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <SatoraLogo size="md" />
            
            <p className="text-sm text-cyan-300 font-display font-medium">
              {COMPANY_PROFILE.tagline}
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting website engineering, custom SaaS software, RAG-grounded AI chatbots, business automation, and measurable marketing to turn business problems into usable digital results.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:satoradev@gmail.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>satoradev@gmail.com</span>
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href="https://wa.me/8801714722651?text=Hello%20Satora.dev%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
                  <span>WhatsApp: +880 1714-722651</span>
                </a>
              </div>
              <div className="flex items-center gap-3 pt-0.5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Dhaka, Bangladesh
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  International Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono-code flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-purple-300 transition-colors text-left cursor-pointer"
                >
                  SaaS & Custom Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  Custom AI Chatbots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  AI Solutions & Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-pink-300 transition-colors text-left cursor-pointer"
                >
                  Digital Marketing & Growth
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Prototypes & Methodology */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono-code flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Lab & Standards
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('lab')}
                  className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>ServiceFlow Simulator</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('lab')}
                  className="hover:text-purple-300 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>KnowledgeDesk AI Demo</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('lab')}
                  className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>SupplyTrack Workspace</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('methodology')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  6-Stage Delivery Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('methodology')}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  Responsible AI & WCAG 2.2
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Engagement */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono-code flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Engagement
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('company')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Company Story & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('company')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Collective Team Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDiscovery}
                  className="hover:text-cyan-300 transition-colors text-left text-cyan-400 font-medium cursor-pointer"
                >
                  Interactive Project Diagnostic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Inquiry Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Invitation Block from PDF Section 22 */}
        <motion.div 
          whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
          className="py-6 px-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-purple-950/30 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 mb-10 shadow-lg"
        >
          <div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="text-white font-semibold">Ready to coordinate your digital ecosystem?</span> Tell us what your business needs to do better: explain its services, launch a product, connect a workflow, answer repeated questions or build a measurable growth channel.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('contact')}
            className="shrink-0 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            Request Engagement Next Step
          </motion.button>
        </motion.div>

        {/* Ethical Standards & Boundary Notice */}
        <div className="pt-8 border-t border-white/[0.06] text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400/80 shrink-0" />
            <span>
              Operating Standards & Transparency: Individual professional history belongs to the people who earned it. Completed company cases are recorded as client deliveries are verified.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono-code">
            <span>© 2026 Satora.dev</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
