import React, { useState } from 'react';
import { Bot, Send, ShieldCheck, AlertCircle, FileText, ArrowRight, UserCheck, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  citations?: { doc: string; section: string; snippet: string }[];
  isRefusal?: boolean;
  confidence?: number;
  timestamp: string;
}

const PRESET_QUERIES = [
  "How does Satora.dev manage source code ownership and client handover?",
  "What are the 6 stages in the Satora.dev delivery methodology?",
  "Can you guarantee #1 ranking on Google and 100k viral followers?",
  "Can your AI assistant replace all human doctors and provide clinical diagnoses?"
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "m-1",
    sender: "assistant",
    text: "Welcome to KnowledgeDesk — Satora.dev's demonstration of an approved-content knowledge assistant. I only answer questions backed by certified company operational documentation. How may I assist your evaluation?",
    citations: [
      {
        doc: "Company Profile 2026",
        section: "Section 13 Custom AI Chatbots",
        snippet: "Approved business content with clear boundaries, source references, and a route to a person."
      }
    ],
    confidence: 0.99,
    timestamp: "10:00 AM"
  }
];

export const KnowledgeDeskDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [escalationStatus, setEscalationStatus] = useState<string | null>(null);

  const handleQuery = (queryText: string) => {
    if (!queryText.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let responseMsg: ChatMessage;

      const lower = queryText.toLowerCase();

      if (lower.includes("ownership") || lower.includes("handover") || lower.includes("source code")) {
        responseMsg = {
          id: `a-${Date.now()}`,
          sender: "assistant",
          text: "Satora.dev provides transparent ownership. The engagement specifies client access to source code, content, hosting, domain, analytics, and third-party accounts. Reusable company components and client-owned materials are distinctly identified, ensuring complete maintainability without proprietary lock-in.",
          citations: [
            {
              doc: "Satora.dev Operations Manual",
              section: "Section 18: Quality & Client Ownership",
              snippet: "Provide a handover that allows the client to understand and maintain the delivered system. Identify licenses, client-owned material and reusable company components."
            }
          ],
          confidence: 0.98,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (lower.includes("6 stage") || lower.includes("stages") || lower.includes("methodology") || lower.includes("delivery")) {
        responseMsg = {
          id: `a-${Date.now()}`,
          sender: "assistant",
          text: "The delivery framework comprises 6 coordinated stages: 1) Understand the problem, 2) Define the plan & boundaries, 3) Design the experience & primary journey, 4) Build & integrate with clean source control, 5) Test against acceptance criteria, and 6) Hand over with training and continuous improvement backlog.",
          citations: [
            {
              doc: "Delivery Framework Standard",
              section: "Section 17: How We Work",
              snippet: "Define the problem, agree the scope, build and test, hand over, then improve."
            }
          ],
          confidence: 0.99,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (lower.includes("guarantee") || lower.includes("#1") || lower.includes("viral") || lower.includes("followers")) {
        responseMsg = {
          id: `a-${Date.now()}`,
          sender: "assistant",
          text: "Policy Refusal: Satora.dev does NOT make fabricated promises or guarantee search rankings, follower counts, or vanity viral reach. Marketing engagements establish baseline visibility, measure qualified inbound inquiries, optimize conversion funnels, and connect tracking to CRM. We operate with strict evidence-based standards.",
          isRefusal: true,
          citations: [
            {
              doc: "Growth & Marketing Guidelines",
              section: "Section 15: Scope and Measurement",
              snippet: "Measure qualified inquiries, cost per qualified inquiry, and organic activity. Do not promise rankings, follower counts or revenue."
            }
          ],
          confidence: 0.95,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (lower.includes("doctor") || lower.includes("clinical") || lower.includes("medical") || lower.includes("replace")) {
        responseMsg = {
          id: `a-${Date.now()}`,
          sender: "assistant",
          text: "Safety Refusal: Satora.dev explicitly rejects unbounded clinical AI deployment. While our team has published research in agricultural image classification and EEG exam recordings, these do NOT constitute a clinical medical product. Regulated clinical decisions mandate accredited human authority.",
          isRefusal: true,
          citations: [
            {
              doc: "Scope Discipline & Responsible AI",
              section: "Section 04 & Section 14",
              snippet: "Clinical AI deployment requires evidence and capacity beyond scope. Sensor and medical work remains research or feasibility material."
            }
          ],
          confidence: 0.99,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        responseMsg = {
          id: `a-${Date.now()}`,
          sender: "assistant",
          text: `This query requires specialized scoping beyond my certified document index. In accordance with Satora.dev protocol, unverified information will not be fabricated. You can escalate directly to our human engineering specialist.`,
          isRefusal: true,
          citations: [
            {
              doc: "Chatbot Acceptance Standard",
              section: "Section 13: Custom AI Chatbots",
              snippet: "Do not promise that an assistant will always answer correctly or replace every support role. Always provide a route to a human owner."
            }
          ],
          confidence: 0.42,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      setMessages(prev => [...prev, responseMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleEscalate = () => {
    setEscalationStatus("Incident Ticket #ESC-2026 created. Routed to Human Engineering & Client Success Lead.");
    setTimeout(() => {
      setEscalationStatus(null);
    }, 5000);
  };

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
            <span className="text-xs text-slate-400">RAG Grounded Assistant</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            KnowledgeDesk: Approved-Content AI Assistant
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Simulates strict vector retrieval (pgvector/FAISS), source verification, refusal boundaries against hallucination, and instant human escalation.
          </p>
        </div>

        <button
          onClick={handleEscalate}
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-700/50 hover:bg-cyan-900/60 transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Trigger Human Escalation</span>
        </button>
      </div>

      {escalationStatus && (
        <div className="bg-emerald-950/40 border-b border-emerald-500/30 px-6 py-3 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{escalationStatus}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Chat Area */}
        <div className="lg:col-span-2 flex flex-col h-[480px]">
          {/* Messages list */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 text-xs ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-xl rounded-xl p-4 ${
                    m.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-medium'
                      : m.isRefusal
                      ? 'bg-amber-950/20 border border-amber-500/30 text-slate-200'
                      : 'bg-slate-900/80 border border-white/[0.08] text-slate-200'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>

                  {m.citations && m.citations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/[0.08] space-y-1.5">
                      <div className="text-[11px] font-mono-code text-cyan-400 flex items-center gap-1.5">
                        <FileText className="w-3 h-3" />
                        <span>Verified Source Grounding</span>
                        {m.confidence && (
                          <span className="text-slate-500 ml-auto">
                            Confidence: {(m.confidence * 100).toFixed(0)}%
                          </span>
                        )}
                      </div>
                      {m.citations.map((c, i) => (
                        <div key={i} className="text-[11px] text-slate-400 bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                          <span className="text-white font-medium">{c.doc}</span> ({c.section}): "{c.snippet}"
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-2 text-[10px] opacity-60 text-right font-mono-code">
                    {m.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 text-xs items-center text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <span className="font-mono-code text-[11px]">Retrieving vector embeddings & verifying policy bounds...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery(inputQuery);
            }}
            className="p-4 border-t border-white/[0.08] bg-slate-900/50 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about methodology, deliverables, governance, or policies..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-slate-950 border border-white/[0.1] rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Query</span>
            </button>
          </form>
        </div>

        {/* Sidebar: Preset Evaluation Questions & Guardrails */}
        <div className="p-6 bg-slate-950/40 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono-code">
              Preset Evaluation Scenarios
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Click any scenario to observe how KnowledgeDesk provides answers with verified citations or executes a safe refusal:
            </p>

            <div className="space-y-2">
              {PRESET_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuery(q)}
                  className="w-full text-left p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-cyan-950/20 text-xs text-slate-300 transition-all cursor-pointer flex items-start gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="line-clamp-2">{q}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.06] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Responsible AI Rule:</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              No hallucinatory guessing. If a query falls outside approved sources, the assistant refuses speculation and routes to the designated human team owner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
