import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowRight, ShieldCheck, Copy, Download, Building, Layers } from 'lucide-react';
import { CLIENT_SECTORS, CORE_SERVICES } from '../data/companyData';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry: (brief: any) => void;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  isOpen,
  onClose,
  onSubmitInquiry
}) => {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState(CLIENT_SECTORS[0].sector);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(["Website Redesign & Conversion Architecture"]);
  const [selectedServices, setSelectedServices] = useState<string[]>(["web-dev"]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientWebsite, setClientWebsite] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getRecommendedEngagement = () => {
    if (selectedServices.includes("ai-automation") || selectedServices.includes("ai-chatbots")) {
      return {
        model: "Bounded Discovery & Scoped AI Pilot",
        timeline: "2 to 4 Weeks Pilot",
        recommendedDeliverables: [
          "Requirements baseline and data permission audit",
          "Knowledge ingestion / vector retrieval prototype",
          "Deterministic rule fallbacks & human escalation route",
          "Verification benchmark against test query set"
        ]
      };
    } else if (selectedServices.includes("saas-software")) {
      return {
        model: "Product Discovery & Bounded Software MVP",
        timeline: "6 to 10 Weeks",
        recommendedDeliverables: [
          "User story prioritization and bounded workflow scope",
          "Role-based UI wireframes and database schema design",
          "Backend API and tenant isolation verification",
          "Production deployment, automated backups, and handover"
        ]
      };
    } else if (selectedServices.includes("digital-marketing")) {
      return {
        model: "Growth Diagnostic & Attribution Setup",
        timeline: "2 Weeks Assessment + Monthly Cycle",
        recommendedDeliverables: [
          "Technical SEO and on-page conversion audit",
          "CRM-connected conversion event tracking",
          "Content and qualified lead baseline establishment"
        ]
      };
    } else {
      return {
        model: "Milestone Website Project & CMS Handover",
        timeline: "4 to 6 Weeks",
        recommendedDeliverables: [
          "UI/UX discovery, sitemap and responsive wireframes",
          "Client-editable CMS or custom frontend architecture",
          "Lead form routing, speed audit and technical SEO",
          "Client handover training and improvement backlog"
        ]
      };
    }
  };

  const engagement = getRecommendedEngagement();

  const handleCopyBrief = () => {
    const briefText = `Satora.dev Project Discovery Brief
Organization: ${clientName || "Prospective Client"} (${selectedSector})
Current Website: ${clientWebsite || "Not provided"}
Services Requested: ${selectedServices.map(s => CORE_SERVICES.find(cs => cs.id === s)?.title).join(", ")}
Recommended Engagement: ${engagement.model} (${engagement.timeline})
Deliverables:
${engagement.recommendedDeliverables.map(d => `- ${d}`).join("\n")}
`;
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = {
      clientName,
      clientEmail,
      clientWebsite,
      sector: selectedSector,
      services: selectedServices,
      engagement: engagement.model,
      timeline: engagement.timeline,
      timestamp: new Date().toISOString()
    };
    onSubmitInquiry(brief);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090E1A] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">
                Interactive Project Scope Diagnostic
              </h3>
              <p className="text-xs text-slate-400">
                Ground your initiative using Satora.dev's structured capability model.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-white">
                Discovery Brief Transmitted
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{clientName || "there"}</strong>. Your structured project brief has been recorded. Our Commercial Analysis and Technical Leads will review the scope and schedule your discovery session within 24 hours.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:satoradev@gmail.com?subject=${encodeURIComponent(`[Discovery Brief] ${clientName || 'Prospective Client'} (${selectedSector})`)}&body=${encodeURIComponent(
`Organization: ${clientName || 'Prospective Client'} (${selectedSector})
Email: ${clientEmail}
Current Website: ${clientWebsite || 'Not provided'}
Services Requested: ${selectedServices.map(s => CORE_SERVICES.find(cs => cs.id === s)?.title).join(', ')}
Recommended Model: ${engagement.model} (${engagement.timeline})
Deliverables:
${engagement.recommendedDeliverables.map(d => `- ${d}`).join('\n')}
`
                  )}`}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Dispatch to satoradev@gmail.com</span>
                </a>

                <a
                  href={`https://wa.me/8801714722651?text=${encodeURIComponent(
`Hello Satora.dev, here is our Project Scope Brief:
Organization: ${clientName || 'Client'} (${selectedSector})
Services: ${selectedServices.map(s => CORE_SERVICES.find(cs => cs.id === s)?.title).join(', ')}
Recommended Model: ${engagement.model}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Send via WhatsApp (+880 1714-722651)</span>
                </a>

                <button
                  onClick={handleCopyBrief}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] flex items-center gap-2 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{copied ? 'Copied!' : 'Copy Brief'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/[0.06] pb-3">
                <span>Phase {step} of 3: {step === 1 ? 'Industry & Problem' : step === 2 ? 'Required Capabilities' : 'Review & Contact'}</span>
                <div className="flex gap-1.5">
                  <div className={`w-8 h-1.5 rounded-full ${step >= 1 ? 'bg-cyan-400' : 'bg-slate-800'}`} />
                  <div className={`w-8 h-1.5 rounded-full ${step >= 2 ? 'bg-cyan-400' : 'bg-slate-800'}`} />
                  <div className={`w-8 h-1.5 rounded-full ${step >= 3 ? 'bg-cyan-400' : 'bg-slate-800'}`} />
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono-code">
                    1. Select Your Organization Sector
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CLIENT_SECTORS.map((s) => (
                      <button
                        key={s.sector}
                        onClick={() => setSelectedSector(s.sector)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedSector === s.sector
                            ? 'bg-cyan-950/40 border-cyan-400/60 text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="font-semibold text-xs text-white mb-0.5">{s.sector}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-2">{s.need}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono-code">
                    2. Select Desired Service Offerings
                  </label>
                  <div className="space-y-2">
                    {CORE_SERVICES.map((serv) => {
                      const isChecked = selectedServices.includes(serv.id);
                      return (
                        <div
                          key={serv.id}
                          onClick={() => toggleService(serv.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            isChecked
                              ? 'bg-cyan-950/40 border-cyan-400/50 text-white'
                              : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-xs text-white">{serv.title}</div>
                            <div className="text-[11px] text-slate-400">{serv.shortDesc}</div>
                          </div>
                          <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-white/20'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in">
                  {/* Scope Output Summary */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                      <span className="text-xs font-mono-code text-cyan-400">
                        Recommended Engagement Model
                      </span>
                      <span className="text-xs font-semibold text-white font-mono-code">
                        {engagement.timeline}
                      </span>
                    </div>
                    <div className="font-semibold text-sm text-white">{engagement.model}</div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {engagement.recommendedDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-cyan-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Your Name or Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Health, Dr. Marcus Lee"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-slate-950 border border-white/[0.1] rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-white/[0.1] rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Current Website / URL (Optional)</label>
                      <input
                        type="text"
                        placeholder="https://yourbusiness.com"
                        value={clientWebsite}
                        onChange={(e) => setClientWebsite(e.target.value)}
                        className="w-full bg-slate-950 border border-white/[0.1] rounded-lg px-3.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="px-3.5 py-2 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/[0.08] flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{copied ? 'Copied' : 'Copy Brief'}</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Discovery Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!submitted && (
          <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
