import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  Check, 
  Clock, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  FileText,
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface ContactViewProps {
  initialServiceTopic?: string;
  onOpenDiscovery: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialServiceTopic,
  onOpenDiscovery
}) => {
  const [inquiryType, setInquiryType] = useState<string>(
    initialServiceTopic || "Website Design & Development"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [workflowDetails, setWorkflowDetails] = useState("");
  const [timeframe, setTimeframe] = useState("Discovery within 2 weeks");
  const [submitted, setSubmitted] = useState(false);

  const targetEmail = "satoradev@gmail.com";
  const whatsappNumber = "+880 1714-722651";
  const whatsappRaw = "8801714722651";

  const inquiryTypes = [
    { 
      id: "Website Design & Development", 
      label: "Discuss Your Website", 
      prompt: "Current URL, needs (new site, redesign, store, or repair)",
      activeClass: "bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]"
    },
    { 
      id: "SaaS & Custom Software", 
      label: "Plan Your Software", 
      prompt: "Who uses it, main workflow, database requirements, integrations",
      activeClass: "bg-purple-500/20 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
    },
    { 
      id: "Custom AI Chatbots", 
      label: "Explore Custom Chatbot", 
      prompt: "Target audience, approved content sources, escalation owner",
      activeClass: "bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.25)]"
    },
    { 
      id: "AI Solutions & Automation", 
      label: "Map Automation Opportunity", 
      prompt: "What staff repeat, tools used, estimated frequency",
      activeClass: "bg-amber-500/20 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
    },
    { 
      id: "Digital Marketing & Growth", 
      label: "Growth Diagnostic", 
      prompt: "Current search visibility, content goals, inbound lead channels",
      activeClass: "bg-pink-500/20 border-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.25)]"
    }
  ];

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`[Satora.dev Inquiry] ${inquiryType} - ${org || name}`);
    const body = encodeURIComponent(
`Client Name: ${name}
Work Email: ${email}
Organization: ${org}
Current Website: ${currentUrl || 'N/A'}
Inquiry Focus: ${inquiryType}
Target Timeframe: ${timeframe}

Project Context & Workflow Details:
${workflowDetails}
`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
`Hello Satora.dev,
I am submitting a project inquiry:
Name: ${name || 'Prospective Client'}
Organization: ${org || 'N/A'}
Inquiry Focus: ${inquiryType}
Timeframe: ${timeframe}
Details: ${workflowDetails || 'Looking to discuss a new project.'}`
    );
    return `https://wa.me/${whatsappRaw}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger direct mail client dispatch to satoradev@gmail.com
    window.location.href = buildMailtoUrl();
  };

  return (
    <div className="space-y-16 pb-20 relative overflow-hidden">
      {/* Ambient glowing background orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] colorful-glow-orb-1 blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] colorful-glow-orb-2 blur-[140px] pointer-events-none opacity-40" />

      {/* Header */}
      <section className="pt-12 text-left space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono-code text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Inquiry & Engagement Protocol</span>
          <span className="text-slate-600">/</span>
          <span>Response Guaranteed &lt; 24h</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
        >
          Let's Define a Practical Next Step
        </motion.h1>

        <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
          Tell us what your business needs to do better: explain its services, launch a product, connect a workflow, answer repeated questions, or build a measurable growth channel. Inquiries are transmitted directly to <strong className="text-cyan-300 font-mono-code font-normal">satoradev@gmail.com</strong> or our instant WhatsApp line.
        </p>
      </section>

      {/* Main Grid: Form + Commercial Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left 2 Cols: Structured Inquiry Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/[0.08] shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Project Inquiry Prepared for Transmission
                  </h3>
                  <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your inquiry for <strong>{inquiryType}</strong> is routed directly to <strong className="text-cyan-300 font-mono-code">satoradev@gmail.com</strong>.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={buildMailtoUrl()}
                      className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send to satoradev@gmail.com</span>
                    </a>

                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" color="#022c22" />
                      <span>Send via WhatsApp (+880 1714-722651)</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Edit or submit another query
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Select Inquiry Topic */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono-code">
                      1. Select Inquiry Focus
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {inquiryTypes.map((t) => (
                        <motion.button
                          key={t.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setInquiryType(t.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            inquiryType === t.id
                              ? t.activeClass
                              : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="font-semibold text-xs text-white mb-0.5">{t.label}</div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">{t.id}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Client Basic Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@organization.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Organization / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Health Systems"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Current Website URL (When Available)
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        value={currentUrl}
                        onChange={(e) => setCurrentUrl(e.target.value)}
                        className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Context & Description */}
                  <div className="text-xs">
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Tell us about your context, users, and the main workflow *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        inquiryTypes.find(t => t.id === inquiryType)?.prompt ||
                        "Describe who uses the system, the problem to solve, and the desired outcome..."
                      }
                      value={workflowDetails}
                      onChange={(e) => setWorkflowDetails(e.target.value)}
                      className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 leading-relaxed transition-colors"
                    />
                  </div>

                  {/* Timeframe & Engagement */}
                  <div className="text-xs">
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Target Start Window
                    </label>
                    <select
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Discovery within 2 weeks">Immediate Discovery Sprint (within 2 weeks)</option>
                      <option value="Milestone Project within 1 month">Scoped Milestone Build (within 1 month)</option>
                      <option value="Quarterly planning">Quarterly Planning & Budget Assessment</option>
                      <option value="Care & Maintenance transition">Transitioning Existing Live System to Satora Care</option>
                    </select>
                  </div>

                  {/* Submission and Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={onOpenDiscovery}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Use Interactive Scope Diagnostic Instead</span>
                    </button>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <a
                        href={buildWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                      >
                        <WhatsAppIcon className="w-4 h-4" color="#25D366" />
                        <span>WhatsApp Quick Send</span>
                      </a>

                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="flex-1 sm:flex-initial py-3 px-6 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2 cursor-pointer border border-cyan-400/30 whitespace-nowrap"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit to satoradev@gmail.com</span>
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Col: Commercial Information & Standards */}
          <div className="space-y-6">
            {/* Direct Contact Card with Official Email and WhatsApp */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-slate-900/70 border border-cyan-500/30 space-y-4 shadow-xl backdrop-blur-md"
            >
              <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider block font-bold">
                Direct Coordination
              </span>
              <div className="space-y-3.5 text-xs text-slate-200">
                <a
                  href={`mailto:${targetEmail}`}
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono-code">Official Inquiry Inbox</span>
                    <span className="font-semibold text-white group-hover:text-cyan-300">{targetEmail}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappRaw}?text=${encodeURIComponent("Hello Satora.dev, I would like to inquire about your services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-emerald-300 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <WhatsAppIcon className="w-4 h-4" color="#25D366" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-mono-code font-bold">WhatsApp Direct Line</span>
                    <span className="font-semibold text-white group-hover:text-emerald-300 font-mono-code">{whatsappNumber}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06]">
                  <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono-code">Headquarters</span>
                    <span className="text-slate-200">Dhaka, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono-code">Market Direction</span>
                    <span className="text-slate-200">Selected International Delivery</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SLA Response Guarantee */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-purple-950/20 border border-purple-500/30 space-y-3 text-xs text-slate-300 shadow-lg"
            >
              <div className="flex items-center gap-2 text-purple-300 font-semibold">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Response Commitment</span>
              </div>
              <p className="leading-relaxed">
                Inquiries sent to <strong className="text-white">satoradev@gmail.com</strong> or WhatsApp are reviewed directly by the responsible capability lead. We return a structured scope note within 24 hours.
              </p>
            </motion.div>

            {/* Respect for Data Boundary */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs text-slate-300 shadow-lg"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidentiality Protocol</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All client project details and workflow documents are maintained under strict confidentiality. Client operational data never appears in public demonstrations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
