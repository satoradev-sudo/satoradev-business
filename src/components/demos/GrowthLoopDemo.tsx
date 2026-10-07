import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Target, ArrowUpRight, Filter, PieChart, ShieldCheck } from 'lucide-react';

interface CampaignData {
  name: string;
  channel: string;
  adSpend: number;
  sessions: number;
  rawInquiries: number;
  qualifiedLeads: number;
  cpql: number; // Cost per qualified lead
  conversionRate: number;
}

const CAMPAIGN_METRICS: CampaignData[] = [
  {
    name: "Enterprise Discovery Sprint",
    channel: "Organic Search / Technical SEO",
    adSpend: 0,
    sessions: 4280,
    rawInquiries: 88,
    qualifiedLeads: 62,
    cpql: 0,
    conversionRate: 1.45
  },
  {
    name: "SaaS Workflow Modernization",
    channel: "Direct Referral & Ecosystem",
    adSpend: 650,
    sessions: 1940,
    rawInquiries: 46,
    qualifiedLeads: 31,
    cpql: 20.96,
    conversionRate: 1.60
  },
  {
    name: "KnowledgeDesk Pilot Campaign",
    channel: "Targeted B2B Campaign",
    adSpend: 1200,
    sessions: 3100,
    rawInquiries: 74,
    qualifiedLeads: 44,
    cpql: 27.27,
    conversionRate: 1.42
  }
];

export const GrowthLoopDemo: React.FC = () => {
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState(0);
  const [variantTest, setVariantTest] = useState<'A' | 'B'>('A');

  const selectedCampaign = CAMPAIGN_METRICS[selectedCampaignIndex];

  return (
    <div className="bg-[#0A0E1A] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-white/[0.08] bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              Section 20 Prototype
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-400">Marketing-to-Lead Reporting</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            GrowthLoop: Attribution & Lead Quality
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Measures qualified inquiries over empty vanity clicks, connecting landing page experiments directly with CRM pipeline attribution.
          </p>
        </div>

        {/* Variant toggle */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-white/[0.08]">
          <span className="text-[11px] text-slate-400 px-2 font-mono-code">Landing Page Test:</span>
          <button
            onClick={() => setVariantTest('A')}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              variantTest === 'A'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Variant A (Diagnostic CTA)
          </button>
          <button
            onClick={() => setVariantTest('B')}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              variantTest === 'B'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Variant B (Scope Calculator)
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Selector Segmented Control */}
        <div className="flex flex-wrap gap-2">
          {CAMPAIGN_METRICS.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCampaignIndex(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                selectedCampaignIndex === idx
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-400/50 shadow-sm'
                  : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[11px] font-mono-code text-slate-400 block mb-1">Total Sessions</span>
            <div className="text-2xl font-bold text-white font-mono-code">
              {selectedCampaign.sessions.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Validated user visits</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[11px] font-mono-code text-slate-400 block mb-1">Raw Inquiries</span>
            <div className="text-2xl font-bold text-slate-200 font-mono-code">
              {selectedCampaign.rawInquiries}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Forms & diagnostic inputs</span>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <span className="text-[11px] font-mono-code text-cyan-400 block mb-1">Qualified Leads</span>
            <div className="text-2xl font-bold text-cyan-300 font-mono-code">
              {selectedCampaign.qualifiedLeads}
            </div>
            <span className="text-[10px] text-cyan-500/80 mt-1 block">
              {((selectedCampaign.qualifiedLeads / selectedCampaign.rawInquiries) * 100).toFixed(0)}% Qualification Ratio
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[11px] font-mono-code text-slate-400 block mb-1">Cost Per Qual. Lead</span>
            <div className="text-2xl font-bold text-emerald-400 font-mono-code">
              {selectedCampaign.cpql === 0 ? "Organic ($0)" : `$${selectedCampaign.cpql.toFixed(2)}`}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Attributed ad spend / lead</span>
          </div>
        </div>

        {/* Funnel Visualization & Proof */}
        <div className="p-6 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono-code">
              Inquiry Pipeline Conversion Flow
            </h4>
            <span className="text-xs text-slate-400 font-mono-code">
              Channel: {selectedCampaign.channel}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>1. Traffic to Inquiry Conversion</span>
                <span className="font-mono-code text-slate-300">
                  {((selectedCampaign.rawInquiries / selectedCampaign.sessions) * 100).toFixed(2)}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>2. Lead Qualification (Budget + Scope Verified)</span>
                <span className="font-mono-code text-cyan-300">
                  {((selectedCampaign.qualifiedLeads / selectedCampaign.rawInquiries) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Synthetic dataset illustrating the core principle from PDF Section 15: "Distinguish activity from useful demand. Measure qualified inquiries and funnel completion; do not promise rankings or follower vanity."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
