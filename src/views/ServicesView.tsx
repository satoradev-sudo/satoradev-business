import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Code2, 
  Bot, 
  Cpu, 
  TrendingUp, 
  FileCode, 
  ExternalLink,
  Sliders,
  DollarSign
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '../data/companyData';

interface ServicesViewProps {
  onOpenDiscovery: () => void;
  onSelectInquiryService: (serviceTitle: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenDiscovery,
  onSelectInquiryService
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CORE_SERVICES[0].id);

  const activeService = CORE_SERVICES.find(s => s.id === selectedServiceId) || CORE_SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev': return <Code2 className="w-4 h-4" />;
      case 'saas-software': return <Layers className="w-4 h-4" />;
      case 'ai-chatbots': return <Bot className="w-4 h-4" />;
      case 'ai-automation': return <Cpu className="w-4 h-4" />;
      case 'digital-marketing': return <TrendingUp className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const getServiceColor = (id: string) => {
    switch (id) {
      case 'web-dev': return {
        text: 'text-cyan-400',
        badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
        activeBtn: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]',
        border: 'border-cyan-500/30',
        gradient: 'from-cyan-500/15 via-blue-500/5 to-transparent'
      };
      case 'saas-software': return {
        text: 'text-purple-400',
        badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        activeBtn: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]',
        border: 'border-purple-500/30',
        gradient: 'from-purple-500/15 via-indigo-500/5 to-transparent'
      };
      case 'ai-chatbots': return {
        text: 'text-emerald-400',
        badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
        activeBtn: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]',
        border: 'border-emerald-500/30',
        gradient: 'from-emerald-500/15 via-teal-500/5 to-transparent'
      };
      case 'ai-automation': return {
        text: 'text-amber-400',
        badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
        activeBtn: 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold',
        border: 'border-amber-500/30',
        gradient: 'from-amber-500/15 via-orange-500/5 to-transparent'
      };
      case 'digital-marketing': return {
        text: 'text-pink-400',
        badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
        activeBtn: 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]',
        border: 'border-pink-500/30',
        gradient: 'from-pink-500/15 via-rose-500/5 to-transparent'
      };
      default: return {
        text: 'text-cyan-400',
        badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
        activeBtn: 'bg-cyan-500 text-slate-950',
        border: 'border-cyan-500/30',
        gradient: 'from-cyan-500/15 to-transparent'
      };
    }
  };

  const currentColor = getServiceColor(activeService.id);

  return (
    <div className="space-y-16 pb-20 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] colorful-glow-orb-2 blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] colorful-glow-orb-1 blur-[150px] pointer-events-none opacity-50" />

      {/* Page Header */}
      <section className="pt-12 text-left space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono-code text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Sections 11–15 Service Specifications</span>
          <span className="text-slate-600">/</span>
          <span>Verified Operating Capabilities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
        >
          Core Services & Deliverable Architecture
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-slate-300 max-w-3xl leading-relaxed"
        >
          Each service is designed around verifiable acceptance criteria, disciplined scoping, and complete client asset ownership. Select a service to inspect the technical deliverables, evidence standards, and inquiry pathways.
        </motion.p>

        {/* Service Segmented Navigation Buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-b border-white/[0.08] pb-6">
          {CORE_SERVICES.map((serv) => {
            const isSelected = selectedServiceId === serv.id;
            const servColors = getServiceColor(serv.id);
            return (
              <motion.button
                key={serv.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedServiceId(serv.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? servColors.activeBtn
                    : 'bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:bg-white/[0.08]'
                }`}
              >
                <span>{getServiceIcon(serv.id)}</span>
                <span>{serv.number}. {serv.title}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Active Service Detailed Specification with Animated Transitions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Main 2-Column Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview Card */}
              <div className={`p-8 rounded-3xl bg-slate-900/70 border ${currentColor.border} space-y-6 shadow-xl relative overflow-hidden backdrop-blur-md`}>
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${currentColor.gradient} blur-3xl pointer-events-none`} />

                <div className="flex items-center justify-between relative z-10">
                  <span className={`text-xs font-mono-code font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${currentColor.badge}`}>
                    Service {activeService.number} · {activeService.badge}
                  </span>
                  <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    Fixed Milestone or Pilot
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight relative z-10">
                  {activeService.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed relative z-10">
                  {activeService.detailedDesc}
                </p>

                {/* Team Experience Pattern from PDF */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 relative z-10">
                  <span className={`text-[11px] font-mono-code uppercase tracking-wider block font-bold ${currentColor.text}`}>
                    Relevant Collective Experience Foundation
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeService.relevantExperience}
                  </p>
                </div>
              </div>

              {/* Deliverables Breakdown */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/[0.08] space-y-6 shadow-lg backdrop-blur-md">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <FileCode className={`w-5 h-5 ${currentColor.text}`} />
                  <span>What We Deliver & Support</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((d, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 3 }}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-all space-y-1.5 flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${currentColor.text}`} />
                      <span className="text-xs text-slate-200 leading-snug">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Evidence & Acceptance Standards */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/[0.08] space-y-6 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Evidence & Acceptance Standards</span>
                  </h3>
                  <span className="text-xs font-mono-code text-slate-400">Section 18 Compliant</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  We agree acceptance around clear tasks, access boundaries, operating cost and handover. No unbacked badges or speculative claims.
                </p>

                <div className="space-y-2.5">
                  {activeService.evidenceAcceptance.map((e, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-200 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Service Action & Technical Blueprint */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Quick Inquiry Action Box with Neon Border */}
              <motion.div 
                whileHover={{ y: -3 }}
                className={`p-6 rounded-3xl bg-slate-900/80 border ${currentColor.border} space-y-5 shadow-2xl backdrop-blur-md relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${currentColor.gradient} blur-2xl pointer-events-none`} />

                <div className="space-y-2 relative z-10">
                  <span className={`text-xs font-mono-code uppercase tracking-wider font-bold ${currentColor.text}`}>
                    Inquiry Action
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {activeService.ctaLabel}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Start with a clear conversation about your users, workflows, and current systems.
                  </p>
                </div>

                <div className="space-y-2 pt-2 relative z-10">
                  {activeService.keyMetrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between text-xs py-1.5 border-b border-white/[0.06]">
                      <span className="text-slate-400">{m.label}:</span>
                      <span className="text-white font-mono-code font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectInquiryService(activeService.ctaTopic)}
                  className={`w-full py-3 px-4 ${currentColor.activeBtn} font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>{activeService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenDiscovery}
                  className="w-full py-2.5 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs rounded-xl border border-white/[0.08] transition-colors cursor-pointer"
                >
                  Run Scope Diagnostic
                </motion.button>
              </motion.div>

              {/* Scope Discipline Reminder from PDF Section 04 */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block font-semibold">
                  Scope Discipline Note
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We accept work we can staff and support. Regulated clinical AI, enterprise ERP replacement, and specialist cybersecurity consulting require capacity beyond our verified footprint.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};
