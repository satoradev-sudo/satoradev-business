import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  Target, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  HeartHandshake,
  Sparkles,
  Zap
} from 'lucide-react';
import { 
  COMPANY_PROFILE, 
  COMPANY_VALUES, 
  TEAM_CAPABILITIES, 
  STRATEGIC_STAGES 
} from '../data/companyData';

interface CompanyViewProps {
  onOpenDiscovery: () => void;
  setCurrentTab: (tab: string) => void;
}

export const CompanyView: React.FC<CompanyViewProps> = ({
  onOpenDiscovery,
  setCurrentTab
}) => {
  const valueColorThemes = [
    { text: "text-cyan-400", border: "border-cyan-500/30 hover:border-cyan-400/60", badge: "01 · Clarity" },
    { text: "text-purple-400", border: "border-purple-500/30 hover:border-purple-400/60", badge: "02 · Useful Craftsmanship" },
    { text: "text-emerald-400", border: "border-emerald-500/30 hover:border-emerald-400/60", badge: "03 · Accountability" },
    { text: "text-amber-400", border: "border-amber-500/30 hover:border-amber-400/60", badge: "04 · Evidence" },
    { text: "text-blue-400", border: "border-blue-500/30 hover:border-blue-400/60", badge: "05 · Respect for Users" },
    { text: "text-pink-400", border: "border-pink-500/30 hover:border-pink-400/60", badge: "06 · Continuous Learning" }
  ];

  return (
    <div className="space-y-20 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] colorful-glow-orb-1 blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute top-[800px] right-10 w-[500px] h-[500px] colorful-glow-orb-2 blur-[140px] pointer-events-none opacity-40" />

      {/* Header */}
      <section className="pt-12 text-left space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono-code text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Sections 02, 03 & 05 Profile</span>
          <span className="text-slate-600">/</span>
          <span>Corporate Identity</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
        >
          About Satora.dev & Collective Capability
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-slate-300 max-w-3xl leading-relaxed"
        >
          {COMPANY_PROFILE.positioning}
        </motion.p>
      </section>

      {/* Section 02: Our Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-white/[0.08] space-y-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
              Section 02 · Company Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Satora.dev Exists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed relative z-10">
            <div className="space-y-4">
              <p>
                The idea behind Satora.dev is to bring complementary professional strengths together rather than present a collection of unrelated individual portfolios.
              </p>
              <p>
                The supplied backgrounds span digital creation, AI systems, business operations, audience development, and direct service delivery. Together they create a practical foundation for a company that understands both the digital interface and the business activity behind it.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Instead of passing a client from one independent specialist to another, the goal is to keep the original business problem visible across design, development, measurement, and operational support.
              </p>
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300 space-y-1.5 shadow-sm">
                <strong className="text-cyan-300 block font-mono-code">The Training Provider Example:</strong>
                A training provider needs more than a course website: it needs clear course information, a reliable inquiry form, a lead pipeline, follow-up reminders, and reporting on which campaigns attract suitable learners. Our coordinated disciplines solve that entire chain.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 03: Purpose, Mission & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 space-y-3 shadow-lg"
          >
            <span className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Proposed Mission
            </span>
            <h3 className="text-xl font-bold text-white">
              {COMPANY_PROFILE.mission}
            </h3>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-8 rounded-3xl bg-purple-950/20 border border-purple-500/30 space-y-3 shadow-lg"
          >
            <span className="text-xs font-mono-code text-purple-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Proposed Vision
            </span>
            <h3 className="text-xl font-bold text-white">
              {COMPANY_PROFILE.vision}
            </h3>
          </motion.div>
        </div>

        {/* 6 Values Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
              Operating Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Values in Daily Work
            </h2>
            <p className="text-xs text-slate-400">
              A value becomes credible through behavior, not slogans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((v, idx) => {
              const theme = valueColorThemes[idx % valueColorThemes.length];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-3xl bg-slate-900/60 border ${theme.border} transition-all space-y-3 shadow-lg`}
                >
                  <div className={`text-xs font-mono-code uppercase font-bold ${theme.text}`}>
                    {theme.badge}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {v.definition}
                  </h3>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300">
                    <span className="text-slate-400 font-mono-code text-[11px] block mb-0.5">Behavioral Standard:</span>
                    {v.application}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 05: The Collective Team Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
            Section 05 & 06–10 Capability Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Collective Functional Foundations
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            Organized around complementary capability disciplines rather than inflated executive titles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TEAM_CAPABILITIES.map((cap, idx) => {
            const glowBorders = [
              "hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
              "hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
              "hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
              "hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
              "hover:border-pink-400/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]"
            ];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] ${glowBorders[idx % glowBorders.length]} transition-all space-y-4 shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cap.function}
                  </h3>
                  <span className="text-[11px] font-mono-code px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    Capability Group
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-white">Foundation:</strong> {cap.foundation}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Company Contribution:</strong> {cap.contribution}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block font-semibold">
                    Reported Working Toolkit:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono-code"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 21: Strategic Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
            Section 21 Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Strategic Direction & Growth Sequence
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            A proposed development sequence based on baseline capacity rather than invented market benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRATEGIC_STAGES.map((st, idx) => {
            const stageAccents = ["text-cyan-400", "text-purple-400", "text-emerald-400", "text-amber-400"];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/[0.08] space-y-2.5 hover:border-cyan-500/40 transition-all shadow-md"
              >
                <span className={`text-xs font-mono-code uppercase font-bold ${stageAccents[idx % stageAccents.length]}`}>
                  {st.stage}
                </span>
                <h3 className="font-semibold text-white text-base">
                  {st.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.focus}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 02/03 Integrity Note: What the Story Does Not Claim */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
          className="p-8 rounded-3xl bg-slate-950/80 border border-white/[0.08] flex items-start gap-4 shadow-xl"
        >
          <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
          <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
            <h4 className="text-sm font-semibold text-white">
              Public Transparency & Integrity Boundary
            </h4>
            <p>
              Earlier employers, agencies, research groups, and clients retain their own distinct identities. Completed company cases are recorded as actual Satora.dev engagements are documented and approved. We do not claim fabricated revenue forecasts, inflated headcount, or unverified regional offices.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
