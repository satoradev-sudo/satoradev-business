import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Workflow, 
  Bot, 
  Layers, 
  TrendingUp, 
  Microscope, 
  Sparkles, 
  ShieldCheck, 
  Info,
  Terminal,
  Activity
} from 'lucide-react';
import { ServiceFlowDemo } from '../components/demos/ServiceFlowDemo';
import { KnowledgeDeskDemo } from '../components/demos/KnowledgeDeskDemo';
import { SupplyTrackDemo } from '../components/demos/SupplyTrackDemo';
import { GrowthLoopDemo } from '../components/demos/GrowthLoopDemo';
import { ResearchShowcaseDemo } from '../components/demos/ResearchShowcaseDemo';

export const LabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'serviceflow' | 'knowledgedesk' | 'supplytrack' | 'growthloop' | 'research'>('serviceflow');

  const prototypes = [
    {
      id: 'serviceflow',
      title: 'ServiceFlow',
      subtitle: 'Inquiry-to-Service CRM',
      icon: <Workflow className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]',
      accentColor: 'text-cyan-400'
    },
    {
      id: 'knowledgedesk',
      title: 'KnowledgeDesk',
      subtitle: 'Approved-Content Assistant',
      icon: <Bot className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]',
      accentColor: 'text-purple-400'
    },
    {
      id: 'supplytrack',
      title: 'SupplyTrack',
      subtitle: 'Procurement Coordination',
      icon: <Layers className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]',
      accentColor: 'text-emerald-400'
    },
    {
      id: 'growthloop',
      title: 'GrowthLoop',
      subtitle: 'Attribution & Lead Quality',
      icon: <TrendingUp className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold',
      accentColor: 'text-amber-400'
    },
    {
      id: 'research',
      title: 'Research Showcase',
      subtitle: 'Vision & Biosignal AI',
      icon: <Microscope className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]',
      accentColor: 'text-pink-400'
    }
  ];

  return (
    <div className="space-y-12 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] colorful-glow-orb-1 blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] colorful-glow-orb-2 blur-[140px] pointer-events-none opacity-40" />

      {/* Lab Header */}
      <section className="pt-12 text-left space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono-code text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Section 20 Demonstrations</span>
          <span className="text-slate-600">/</span>
          <span>Interactive Working Prototypes</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
        >
          Satora.dev Interactive Lab
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-slate-300 max-w-3xl leading-relaxed"
        >
          These are working concept demonstrations developed around our core service disciplines. Each system demonstrates how we connect user experiences, business operations, data integrity, and strict responsible boundaries.
        </motion.p>

        {/* Prototype Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 pt-4 border-b border-white/[0.08] pb-6">
          {prototypes.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <motion.button
                key={p.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? p.activeBtn
                    : 'bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:bg-white/[0.08]'
                }`}
              >
                <span>{p.icon}</span>
                <span className="text-left">
                  <span className="block font-bold">{p.title}</span>
                  <span className={`block text-[10px] ${isActive ? 'opacity-90' : 'text-slate-400'}`}>
                    {p.subtitle}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Main Active Demo View with AnimatePresence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'serviceflow' && <ServiceFlowDemo />}
            {activeTab === 'knowledgedesk' && <KnowledgeDeskDemo />}
            {activeTab === 'supplytrack' && <SupplyTrackDemo />}
            {activeTab === 'growthloop' && <GrowthLoopDemo />}
            {activeTab === 'research' && <ResearchShowcaseDemo />}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lab Methodology & Transparency Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
          className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="leading-relaxed">
              <strong>Demonstration Disclosure (Section 20):</strong> These prototypes are original exploration directions utilizing synthetic data. They demonstrate architectural patterns for customer review prior to custom client deployment.
            </p>
          </div>
          <span className="font-mono-code text-cyan-400 shrink-0 font-bold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            Prototypes Live & Interactive
          </span>
        </motion.div>
      </section>
    </div>
  );
};
