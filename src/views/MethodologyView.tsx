import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Cpu, 
  Users, 
  Terminal, 
  FileCheck2,
  Calendar,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { DELIVERY_METHODOLOGY, ENGAGEMENT_MODELS } from '../data/companyData';

interface MethodologyViewProps {
  onOpenDiscovery: () => void;
  setCurrentTab: (tab: string) => void;
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({
  onOpenDiscovery,
  setCurrentTab
}) => {
  const [activeStep, setActiveStep] = useState(1);

  const selectedStepData = DELIVERY_METHODOLOGY.find(m => m.step === activeStep) || DELIVERY_METHODOLOGY[0];

  const qualityStandards = [
    {
      title: "Quality Means Useful Behavior",
      desc: "A polished interface is only part of quality. Forms must reach the right owner, permissions must protect data, information must remain editable, and failure states must be understandable.",
      ref: "Section 18 · Behavior Standard",
      color: "border-cyan-500/30 hover:border-cyan-400/60",
      accent: "text-cyan-400"
    },
    {
      title: "Accessibility & Performance (WCAG 2.2 AA)",
      desc: "Readable structure, keyboard navigation, meaningful labels, visible focus rings, and responsive layouts. Target WCAG 2.2 AA tested on real devices.",
      ref: "Section 18 · Accessibility",
      color: "border-purple-500/30 hover:border-purple-400/60",
      accent: "text-purple-400"
    },
    {
      title: "Responsible AI & NIST Alignment",
      desc: "Define the purpose, authorized data, expected behavior, and refusal modes. Evaluate answers against representative test sets. NIST AI RMF is used as an engineering benchmark.",
      ref: "Section 18 · AI Governance",
      color: "border-emerald-500/30 hover:border-emerald-400/60",
      accent: "text-emerald-400"
    },
    {
      title: "Data Permissions & Credential Security",
      desc: "Strict least-privilege permissions, secret hygiene, zero client data exposed in public demos, and documented retention matching agreed infrastructure.",
      ref: "Section 18 · Data Security",
      color: "border-amber-500/30 hover:border-amber-400/60",
      accent: "text-amber-400"
    },
    {
      title: "Full Ownership & Portability",
      desc: "Every engagement specifies access to source code, domain, hosting, analytics, and third-party keys. A complete handover ensures client independence.",
      ref: "Section 18 · Handover Right",
      color: "border-blue-500/30 hover:border-blue-400/60",
      accent: "text-blue-400"
    },
    {
      title: "Operational Clarity",
      desc: "Defined backup, monitoring, updates, and incident response. No false claims of 100% uptime or zero-defect infallibility; disciplined engineering instead.",
      ref: "Section 18 · Service Clarity",
      color: "border-pink-500/30 hover:border-pink-400/60",
      accent: "text-pink-400"
    }
  ];

  const clientResponsibilities = [
    "Provide an accountable decision-maker with authority for timely approvals.",
    "Supply accurate content, brand assets, and confirm legal rights to materials.",
    "Provide required environment access and API keys through secure channels.",
    "Participate actively in user acceptance testing and process validation.",
    "Designate the internal owner who manages the system post-launch."
  ];

  return (
    <div className="space-y-20 pb-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] colorful-glow-orb-2 blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] colorful-glow-orb-1 blur-[140px] pointer-events-none opacity-40" />

      {/* Header */}
      <section className="pt-12 text-left space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono-code text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Sections 17–19 Governance</span>
          <span className="text-slate-600">/</span>
          <span>Engineering Discipline</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
        >
          Delivery Methodology & Quality Standards
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-slate-300 max-w-3xl leading-relaxed"
        >
          How we turn uncertain requirements into maintainable digital systems. Transparent milestones, measurable acceptance criteria, responsible AI boundaries, and client ownership by default.
        </motion.p>
      </section>

      {/* Section 17: Interactive 6-Stage Delivery Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
            Section 17 · Step-by-Step Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The Six-Stage Delivery Lifecycle
          </h2>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {DELIVERY_METHODOLOGY.map((m) => {
            const isCurrent = activeStep === m.step;
            return (
              <motion.button
                key={m.step}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(m.step)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-tr from-cyan-950/60 to-blue-900/60 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.05]'
                }`}
              >
                <div className="font-mono-code text-xs text-cyan-400 font-bold mb-1">
                  Stage 0{m.step}
                </div>
                <div className="text-xs font-semibold text-slate-200 line-clamp-1">
                  {m.title}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-slate-900/70 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-2 space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-950 to-blue-900 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-mono-code font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  0{selectedStepData.step}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedStepData.title}
                </h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedStepData.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3 relative z-10">
              <span className="text-[11px] font-mono-code text-cyan-400 uppercase tracking-wider block font-bold">
                Stage Artifact Deliverable
              </span>
              <div className="font-semibold text-white text-sm">
                {selectedStepData.deliverable}
              </div>
              <p className="text-xs text-slate-400">
                Signed off against agreed acceptance criteria before progressing to the subsequent milestone.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Section 18: Quality, Responsible AI & Ownership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-purple-400 uppercase tracking-wider font-semibold">
            Section 18 · Operational Credibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Quality, Responsible AI & Client Ownership
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            A credible explanation of what was tested is stronger than an unsupported badge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityStandards.map((q, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl bg-slate-900/60 border ${q.color} transition-all space-y-3 shadow-lg`}
            >
              <div className={`text-[11px] font-mono-code uppercase font-semibold ${q.accent}`}>
                {q.ref}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {q.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {q.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 19: Engagement Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-emerald-400 uppercase tracking-wider font-semibold">
            Section 19 · Commercial Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Structured Engagement Models
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            We price offers around clear scope, delivery effort, and support obligations. No invented pricing gimmicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_MODELS.map((eng, idx) => {
            const glowBorders = [
              "hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
              "hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
              "hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
              "hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
            ];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl bg-slate-900/70 border border-white/[0.08] ${glowBorders[idx % glowBorders.length]} transition-all flex flex-col justify-between space-y-5 shadow-xl`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code text-cyan-300 uppercase font-semibold">
                      {eng.badge}
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400 px-2 py-0.5 rounded bg-white/[0.04]">
                      {eng.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {eng.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {eng.description}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase block font-semibold">Deliverables:</span>
                    <span className="text-xs text-slate-200">{eng.deliverables}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenDiscovery}
                  className="w-full py-2.5 px-3 text-xs font-semibold rounded-xl bg-white/[0.04] hover:bg-cyan-500 hover:text-slate-950 text-slate-200 border border-white/[0.08] transition-all cursor-pointer"
                >
                  Inquire Model
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Client Partnership Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
              Mutual Commitment
            </span>
            <h3 className="text-xl font-bold text-white">
              Client Responsibilities for Project Success
            </h3>
            <p className="text-xs text-slate-400">
              As outlined in Section 19, high-quality digital outcomes require disciplined collaboration from both parties:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientResponsibilities.map((resp, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.04] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-snug">{resp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
