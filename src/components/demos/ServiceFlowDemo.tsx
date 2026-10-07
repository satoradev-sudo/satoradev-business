import React, { useState } from 'react';
import { CheckCircle2, Clock, User, ArrowRight, Plus, Eye, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

interface InquiryLead {
  id: string;
  client: string;
  businessType: string;
  serviceRequested: string;
  source: string;
  submittedAt: string;
  stage: 'new' | 'discovery' | 'scoped' | 'delivery' | 'completed';
  assignedOwner: string;
  slaHoursLeft: number;
  budgetBand: string;
  notes: string;
}

const INITIAL_LEADS: InquiryLead[] = [
  {
    id: "SF-1042",
    client: "MedEd Academy",
    businessType: "Training Provider",
    serviceRequested: "Course Information Site + Lead Routing",
    source: "Growth Diagnostic Landing Page",
    submittedAt: "2 hours ago",
    stage: 'new',
    assignedOwner: "Customer Care Lead",
    slaHoursLeft: 6,
    budgetBand: "Discovery + Milestone Build",
    notes: "Requires clear syllabus layout, automated email confirmations, and CRM lead capture."
  },
  {
    id: "SF-1039",
    client: "Apex Distribution Hub",
    businessType: "Operations & Logistics",
    serviceRequested: "SupplyTrack Internal Workflow",
    source: "Direct Referral",
    submittedAt: "1 day ago",
    stage: 'discovery',
    assignedOwner: "Commercial Ops Lead",
    slaHoursLeft: 18,
    budgetBand: "Custom Software MVP",
    notes: "Discovery call completed. Reviewing quotation comparison logic and supplier approvals."
  },
  {
    id: "SF-1035",
    client: "NexaCare Clinics",
    businessType: "Care Service",
    serviceRequested: "Accessible Portal + Inquiry Routing",
    source: "Technical SEO Audit",
    submittedAt: "3 days ago",
    stage: 'scoped',
    assignedOwner: "Tech & UX Lead",
    slaHoursLeft: 42,
    budgetBand: "Milestone Contract",
    notes: "WCAG 2.2 AA wireframes approved. Staging environment setup initiated."
  },
  {
    id: "SF-1028",
    client: "FinTrack Advisory",
    businessType: "Knowledge Team",
    serviceRequested: "Approved-Content AI Knowledge Assistant",
    source: "Organic Search",
    submittedAt: "1 week ago",
    stage: 'delivery',
    assignedOwner: "AI Backend Lead",
    slaHoursLeft: 96,
    budgetBand: "Scoped AI Pilot",
    notes: "FAISS vector database configured with 14 approved policy docs. Human triage queue active."
  }
];

export const ServiceFlowDemo: React.FC = () => {
  const [leads, setLeads] = useState<InquiryLead[]>(INITIAL_LEADS);
  const [selectedLead, setSelectedLead] = useState<InquiryLead>(INITIAL_LEADS[0]);
  const [clientPortalView, setClientPortalView] = useState(false);
  const [newInquiryTitle, setNewInquiryTitle] = useState("");
  const [newInquiryType, setNewInquiryType] = useState("Service Businesses");

  const moveStage = (leadId: string, nextStage: InquiryLead['stage']) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, stage: nextStage } : l);
    setLeads(updated);
    if (selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, stage: nextStage });
    }
  };

  const handleAddSampleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInquiryTitle.trim()) return;
    const newEntry: InquiryLead = {
      id: `SF-${Math.floor(1000 + Math.random() * 9000)}`,
      client: newInquiryTitle.trim(),
      businessType: newInquiryType,
      serviceRequested: "Digital Presence & Workflow Assessment",
      source: "Live Inquiry Portal",
      submittedAt: "Just now",
      stage: 'new',
      assignedOwner: "Customer Care Lead",
      slaHoursLeft: 24,
      budgetBand: "Discovery Phase",
      notes: "Newly received inquiry. Initial discovery review pending."
    };
    setLeads([newEntry, ...leads]);
    setSelectedLead(newEntry);
    setNewInquiryTitle("");
  };

  const stages: { key: InquiryLead['stage']; title: string; color: string }[] = [
    { key: 'new', title: '1. New Inquiry', color: 'border-amber-500/40' },
    { key: 'discovery', title: '2. Discovery & Audit', color: 'border-blue-500/40' },
    { key: 'scoped', title: '3. Scope & Plan', color: 'border-cyan-500/40' },
    { key: 'delivery', title: '4. In Delivery', color: 'border-purple-500/40' },
    { key: 'completed', title: '5. Handover & Care', color: 'border-emerald-500/40' },
  ];

  return (
    <div className="bg-[#0A0E1A] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
      {/* Demo Header */}
      <div className="p-6 border-b border-white/[0.08] bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              Section 20 Prototype
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-400">Concept Demonstration</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            ServiceFlow: Inquiry-to-Service Workspace
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Simulates the coordinated route from public website inquiry to team assignment, SLA response reminders, and clear client status visibility.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setClientPortalView(!clientPortalView)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
              clientPortalView
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                : 'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:bg-white/[0.08]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{clientPortalView ? 'Switch to Operator CRM' : 'Preview Client Status View'}</span>
          </button>
        </div>
      </div>

      {clientPortalView ? (
        /* Client's Transparent Status Tracker */
        <div className="p-8 bg-[#070A12]">
          <div className="max-w-2xl mx-auto rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider">
                  Client Project Status Portal
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">{selectedLead.client}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 font-mono-code">Reference ID</span>
                <div className="text-xs font-semibold text-slate-200 font-mono-code">{selectedLead.id}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Engagement Lifecycle Progress</span>
                <span className="font-mono-code text-cyan-300 uppercase">
                  {selectedLead.stage === 'new' ? 'Discovery Initiation' :
                   selectedLead.stage === 'discovery' ? 'Requirements Analysis' :
                   selectedLead.stage === 'scoped' ? 'Scope Agreed & Scheduled' :
                   selectedLead.stage === 'delivery' ? 'Active Sprint Execution' : 'Delivered & Handed Over'}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 h-full"
                  style={{
                    width: selectedLead.stage === 'new' ? '20%' :
                           selectedLead.stage === 'discovery' ? '40%' :
                           selectedLead.stage === 'scoped' ? '60%' :
                           selectedLead.stage === 'delivery' ? '80%' : '100%'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 font-mono-code text-[11px]">Primary Account Lead</div>
                <div className="text-white font-medium mt-1">{selectedLead.assignedOwner}</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 font-mono-code text-[11px]">Next Milestone Review</div>
                <div className="text-white font-medium mt-1">Within {selectedLead.slaHoursLeft}h</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300 leading-relaxed">
              <div className="font-semibold text-cyan-300 mb-1">Operational Guarantee:</div>
              Decisions, test results, and source code deliverables are transparently synchronized with your team. Zero black-box delivery.
            </div>
          </div>
        </div>
      ) : (
        /* Team Workspace View */
        <div className="p-6 space-y-6">
          {/* Quick Submit Test Inquiry */}
          <form onSubmit={handleAddSampleInquiry} className="flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <input
              type="text"
              placeholder="Simulate receiving inquiry (e.g. Horizon Logistics, Apex Institute)..."
              value={newInquiryTitle}
              onChange={(e) => setNewInquiryTitle(e.target.value)}
              className="flex-1 w-full bg-slate-900/80 border border-white/[0.1] rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <select
              value={newInquiryType}
              onChange={(e) => setNewInquiryType(e.target.value)}
              className="bg-slate-900/80 border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none"
            >
              <option value="Service Businesses">Service Businesses</option>
              <option value="Training Providers">Training Providers</option>
              <option value="Care Organizations">Care Organizations</option>
              <option value="Operations & Logistics">Operations & Logistics</option>
              <option value="Startup Product Teams">Startup Product Teams</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Simulate Inquiry</span>
            </button>
          </form>

          {/* Pipeline Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {stages.map((st) => {
              const leadsInStage = leads.filter(l => l.stage === st.key);
              return (
                <div
                  key={st.key}
                  className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3 flex flex-col min-h-[300px]"
                >
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06]">
                    <span className="text-xs font-semibold text-slate-300 font-mono-code">
                      {st.title}
                    </span>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {leadsInStage.length}
                    </span>
                  </div>

                  <div className="space-y-2 flex-1">
                    {leadsInStage.map((lead) => {
                      const isSelected = selectedLead.id === lead.id;
                      return (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-3 rounded-lg border transition-all cursor-pointer text-left ${
                            isSelected
                              ? 'bg-cyan-950/40 border-cyan-400/50 shadow-md'
                              : 'bg-slate-900/70 border-white/[0.06] hover:border-white/[0.15]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono-code mb-1">
                            <span>{lead.id}</span>
                            <span className="text-amber-400 flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" />
                              {lead.slaHoursLeft}h
                            </span>
                          </div>
                          <div className="font-semibold text-xs text-white line-clamp-1">
                            {lead.client}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {lead.serviceRequested}
                          </div>

                          <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <User className="w-2.5 h-2.5 text-cyan-400" />
                              <span className="truncate max-w-[80px]">{lead.assignedOwner.split(" ")[0]}</span>
                            </span>
                            <span className="text-slate-500 font-mono-code">
                              {lead.submittedAt}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {leadsInStage.length === 0 && (
                      <div className="h-24 flex items-center justify-center text-[11px] text-slate-500 italic">
                        Empty stage
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Lead Action Panel */}
          {selectedLead && (
            <div className="p-5 rounded-xl bg-slate-900/90 border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm">
                    Active Inspection: {selectedLead.client}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-code">({selectedLead.id})</span>
                  <span className="text-xs text-cyan-400 font-mono-code">[{selectedLead.businessType}]</span>
                </div>
                <p className="text-xs text-slate-400">
                  {selectedLead.notes}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-400 font-mono-code mr-1">Move:</span>
                {selectedLead.stage !== 'discovery' && (
                  <button
                    onClick={() => moveStage(selectedLead.id, 'discovery')}
                    className="px-2.5 py-1 text-xs rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]"
                  >
                    To Discovery
                  </button>
                )}
                {selectedLead.stage !== 'scoped' && (
                  <button
                    onClick={() => moveStage(selectedLead.id, 'scoped')}
                    className="px-2.5 py-1 text-xs rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]"
                  >
                    To Scoped
                  </button>
                )}
                {selectedLead.stage !== 'delivery' && (
                  <button
                    onClick={() => moveStage(selectedLead.id, 'delivery')}
                    className="px-2.5 py-1 text-xs rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]"
                  >
                    To Delivery
                  </button>
                )}
                {selectedLead.stage !== 'completed' && (
                  <button
                    onClick={() => moveStage(selectedLead.id, 'completed')}
                    className="px-2.5 py-1 text-xs rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40"
                  >
                    Mark Handover Complete
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
