import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  Code2, 
  Compass, 
  TrendingUp, 
  FileText,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Flame,
  Zap,
  Activity
} from 'lucide-react';
import { 
  COMPANY_PROFILE, 
  CORE_SERVICES, 
  CLIENT_SECTORS, 
  DELIVERY_METHODOLOGY 
} from '../data/companyData';
import { ServiceFlowDemo } from '../components/demos/ServiceFlowDemo';
import { KnowledgeDeskDemo } from '../components/demos/KnowledgeDeskDemo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface OverviewViewProps {
  setCurrentTab: (tab: string) => void;
  onOpenDiscovery: () => void;
  onSelectServiceTopic?: (topic: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  setCurrentTab,
  onOpenDiscovery,
  onSelectServiceTopic
}) => {
  const [activeArchitecturePillar, setActiveArchitecturePillar] = useState<number>(0);
  const [activeDemoTab, setActiveDemoTab] = useState<'serviceflow' | 'knowledgedesk'>('serviceflow');

  const architecturePillars = [
    {
      title: "Design & Frontend",
      desc: "Clean customer journeys, high-speed responsive code, and human-first accessibility (WCAG 2.2 AA).",
      role: "Customer-Facing Touchpoint",
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400"
    },
    {
      title: "SaaS & Core Logic",
      desc: "Maintainable backend APIs, strict data permissions, and bounded business workflows.",
      role: "Operational Core",
      color: "from-purple-500 to-indigo-500",
      accent: "text-purple-400"
    },
    {
      title: "RAG & AI Chatbots",
      desc: "Grounded retrieval systems built exclusively on approved documents with zero hallucination tolerance.",
      role: "Knowledge & Escalation",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400"
    },
    {
      title: "Automation & Tools",
      desc: "Deterministic workflows for document parsing, lead qualification, and vendor approvals.",
      role: "Efficiency Multiplier",
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400"
    },
    {
      title: "Measurable Growth",
      desc: "Search visibility, content strategy, and CRM attribution focused on verified inbound leads.",
      role: "Demand Generation",
      color: "from-pink-500 to-rose-500",
      accent: "text-pink-400"
    }
  ];

  const glanceDimensions = [
    { 
      dimension: "Business focus", 
      profile: "Digital experiences, software products, AI and measurable marketing",
      glowColor: "hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      tagColor: "text-cyan-400" 
    },
    { 
      dimension: "Core services", 
      profile: "Website design & development, SaaS, custom AI chatbots, automation, digital marketing",
      glowColor: "hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
      tagColor: "text-purple-400" 
    },
    { 
      dimension: "Capability foundation", 
      profile: "Web engineering, AI research, commercial analysis, marketing execution, customer operations",
      glowColor: "hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      tagColor: "text-blue-400" 
    },
    { 
      dimension: "Priority clients", 
      profile: "Service businesses, training providers, care organizations, commerce brands & startup product teams",
      glowColor: "hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      tagColor: "text-emerald-400" 
    },
    { 
      dimension: "Delivery principle", 
      profile: "Define the problem, agree the scope, build and test, hand over, then improve",
      glowColor: "hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      tagColor: "text-amber-400" 
    },
    { 
      dimension: "Relationship model", 
      profile: "Projects, paid discovery, scoped pilots and recurring care or growth engagements",
      glowColor: "hover:border-pink-400/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",
      tagColor: "text-pink-400" 
    }
  ];

  // Specific color themes per service
  const serviceThemes = [
    {
      border: "hover:border-cyan-400/60",
      glow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      accent: "text-cyan-400"
    },
    {
      border: "hover:border-purple-400/60",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      accent: "text-purple-400"
    },
    {
      border: "hover:border-emerald-400/60",
      glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accent: "text-emerald-400"
    },
    {
      border: "hover:border-amber-400/60",
      glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      accent: "text-amber-400"
    },
    {
      border: "hover:border-pink-400/60",
      glow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.2)]",
      badgeBg: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      accent: "text-pink-400"
    }
  ];

  return (
    <div className="space-y-28 pb-20 relative overflow-hidden">
      {/* Background Animated Neon Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] colorful-glow-orb-1 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-80 right-10 w-[600px] h-[600px] colorful-glow-orb-2 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[1600px] left-10 w-[550px] h-[550px] colorful-glow-orb-3 blur-[140px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 pointer-events-none futuristic-grid opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Core Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-6 text-left"
            >
              {/* Natural Editorial Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-xs font-mono-code text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold">Technology & Digital Growth Company</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">Dhaka & Global</span>
              </div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance"
              >
                Design. Build. Connect.{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent animate-gradient-text drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  Grow.
                </span>
              </motion.h1>

              {/* Body Prose */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
              >
                A business can have an attractive website and still struggle with disconnected tools, slow follow-up, or unmeasured marketing. Satora.dev unites website engineering, custom SaaS, RAG-grounded AI, and digital growth to turn business problems into usable digital results.
              </motion.p>

              {/* Primary Call to Actions (matching reference design layout) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentTab('lab')}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)] flex items-center gap-2 cursor-pointer border border-cyan-400/40"
                >
                  <span>Explore Flagship Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/8801714722651?text=Hello%20Satora.dev%2C%20I%20would%20like%20to%20discuss%20a%20project%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-xs rounded-xl transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-2.5 cursor-pointer border border-emerald-400/50"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </motion.a>
              </motion.div>

              {/* Two Floating Flagship Concept Cards (matching reference image style) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
              >
                <div
                  onClick={() => setCurrentTab('lab')}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex items-center justify-between gap-3 cursor-pointer group shadow-lg backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        ServiceFlow
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        Inquiry-to-service CRM workspace
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                <div
                  onClick={() => setCurrentTab('lab')}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-500/30 hover:border-purple-400/60 transition-all flex items-center justify-between gap-3 cursor-pointer group shadow-lg backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                        KnowledgeDesk
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        Source-grounded RAG AI assistant
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </motion.div>

              {/* 4 Connected Foundation Pillars (matching reference screenshot bottom bar) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
              >
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/40 transition-colors">
                  <div className="text-xs font-mono-code text-cyan-300 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Purpose-built
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Flagship digital products</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-400/40 transition-colors">
                  <div className="text-xs font-mono-code text-purple-300 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Full-Stack
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Web, SaaS & AI systems</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-400/40 transition-colors">
                  <div className="text-xs font-mono-code text-emerald-300 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Dhaka + Global
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">International delivery</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/40 transition-colors">
                  <div className="text-xs font-mono-code text-amber-300 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    4 Pillars
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Design, Build, Connect, Grow</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual Container with Futuristic Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-xl lg:max-w-none"
            >
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900/60 shadow-[0_0_50px_rgba(6,182,212,0.2)] group transition-all duration-500 hover:shadow-[0_0_70px_rgba(139,92,246,0.3)] hover:border-purple-500/40">
                {/* Fallback container with styled image */}
                <div className="relative aspect-[16/9] w-full bg-[#080C16] overflow-hidden">
                  <img
                    src="/src/assets/images/satora_hero_futuristic_lab_1791393431492.jpg"
                    alt="Satora.dev Digital Engineering Center"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Measured Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/40 to-transparent" />
                </div>

                {/* Overlaid System HUD */}
                <div className="p-6 bg-[#070A12]/95 border-t border-white/[0.08] backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
                      Continuous Digital Architecture
                    </span>
                    <span className="text-purple-300 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-[10px]">
                      Satora Core v2026
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                      <span className="text-cyan-300 text-[10px] block font-mono-code">Architecture</span>
                      <span className="text-white font-medium text-[11px]">Modular & Decoupled</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                      <span className="text-purple-300 text-[10px] block font-mono-code">Verification</span>
                      <span className="text-purple-200 font-medium text-[11px]">Acceptance-Driven</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                      <span className="text-emerald-300 text-[10px] block font-mono-code">Handover</span>
                      <span className="text-white font-medium text-[11px]">Self-Service Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 01: Company at a Glance (From PDF Section 01) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border border-white/[0.08] rounded-3xl bg-slate-900/50 backdrop-blur-md p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle colorful line accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-70" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono-code text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Section 01 Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Company at a Glance
              </h2>
            </div>
            <p className="text-xs text-slate-300 max-w-md">
              A coordinated route from a business problem to a usable digital result. Each deliverable has its own acceptance criteria and accountable owner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glanceDimensions.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all space-y-2 cursor-pointer ${item.glowColor}`}
              >
                <div className={`text-xs font-mono-code uppercase tracking-wider font-semibold ${item.tagColor}`}>
                  {item.dimension}
                </div>
                <div className="text-sm font-semibold text-slate-200 leading-snug">
                  {item.profile}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 04: The 5 Core Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left space-y-3"
        >
          <span className="text-xs font-mono-code text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Section 04 & 11–15 Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Five Services, One Coordinated Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            A marketing campaign benefits from a clear landing page; a landing page benefits from a reliable inquiry process; a CRM benefits from clean lead data; a chatbot benefits from approved content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((serv, index) => {
            const isFeatured = index === 0 || index === 1;
            const theme = serviceThemes[index % serviceThemes.length];
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between group relative overflow-hidden ${theme.border} ${theme.glow} ${
                  isFeatured
                    ? 'lg:col-span-1 bg-gradient-to-b from-slate-900/90 to-slate-950/80 border-white/[0.1] shadow-xl'
                    : 'bg-slate-900/50 border-white/[0.06]'
                }`}
              >
                {/* Dynamic gradient background wash */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${theme.gradient} blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono-code text-xs font-semibold px-2.5 py-1 rounded-full border ${theme.badgeBg}`}>
                      {serv.number}. {serv.badge}
                    </span>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                      Production Spec
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-white tracking-tight group-hover:${theme.accent} transition-colors`}>
                    {serv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {serv.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {serv.deliverables.slice(0, 3).map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${theme.accent}`} />
                          <span className="leading-snug">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <button
                    onClick={() => {
                      setCurrentTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer ${theme.accent}`}
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenDiscovery}
                    className="text-xs px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 transition-colors cursor-pointer border border-white/[0.06]"
                  >
                    {serv.ctaLabel}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Demonstration Spotlight (Section 20 of PDF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-mono-code text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              Section 20 Live Prototypes
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
              Interactive Lab & Verification Systems
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Experience the working simulation of our proposed systems. Test live inquiry pipeline routing or evaluate our RAG-grounded knowledge assistant with zero hallucinations.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/30 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <button
              onClick={() => setActiveDemoTab('serviceflow')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeDemoTab === 'serviceflow'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ServiceFlow (CRM Pipeline)
            </button>
            <button
              onClick={() => setActiveDemoTab('knowledgedesk')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeDemoTab === 'knowledgedesk'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              KnowledgeDesk (RAG AI)
            </button>
          </div>
        </motion.div>

        <motion.div
          key={activeDemoTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeDemoTab === 'serviceflow' ? (
            <ServiceFlowDemo />
          ) : (
            <KnowledgeDeskDemo />
          )}
        </motion.div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
          <span>Explore all 5 live prototypes including SupplyTrack procurement, GrowthLoop attribution, and published research.</span>
          <button
            onClick={() => {
              setCurrentTab('lab');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer shrink-0 ml-4"
          >
            <span>Open All Lab Demos</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Section 17: 6-Stage Delivery Process Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left space-y-3"
        >
          <span className="text-xs font-mono-code text-cyan-400 font-semibold tracking-wider uppercase">
            Section 17 Methodology
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How We Work: Six Disciplined Stages
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            We start with the people, the problem and the outcome. We choose technology after understanding the work it must support, make decisions visible and deliver a result the client can use and maintain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERY_METHODOLOGY.map((m, mIdx) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: mIdx * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.4)" }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-950 to-blue-900 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-mono-code font-bold text-xs shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  0{m.step}
                </div>
                <h3 className="font-semibold text-white text-base">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono-code text-cyan-400 font-medium">
                Key Artifact: {m.deliverable}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 16: Priority Clients & Industry Patterns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left space-y-2"
        >
          <span className="text-xs font-mono-code text-purple-400 font-semibold tracking-wider uppercase">
            Section 16 Client Archetypes
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Tailored Starting Points by Sector
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            Prioritizing organizations with a clear operational problem, an accountable decision maker, and a willingness to improve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLIENT_SECTORS.slice(0, 6).map((c, idx) => {
            const borderColors = [
              "hover:border-cyan-400/50",
              "hover:border-purple-400/50",
              "hover:border-emerald-400/50",
              "hover:border-blue-400/50",
              "hover:border-amber-400/50",
              "hover:border-pink-400/50"
            ];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl bg-slate-900/50 border border-white/[0.06] space-y-3 transition-all ${borderColors[idx % borderColors.length]}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white text-sm">{c.sector}</h4>
                  <span className="text-[10px] font-mono-code text-cyan-400 uppercase">Sector Model</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Challenge:</strong> {c.need}
                </p>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-400">
                  <strong className="text-cyan-300 font-mono-code">Initial Engagement:</strong> {c.startingPoint}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Conversion Box with Vivid Gradient */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-purple-950/40 border border-cyan-400/40 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
        >
          {/* Subtle animated orb inside */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-xl relative z-10">
            <span className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider font-semibold">
              Collaborative Scoping
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Connect Your Digital Workflow?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you need a clear website, an MVP software portal, an approved-content AI assistant, or a growth diagnostic, we define a practical next step with no invented promises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDiscovery}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              Launch Scope Diagnostic
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] font-semibold text-xs rounded-xl transition-all cursor-pointer"
            >
              Contact Us Directly
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
