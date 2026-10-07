import React, { useState } from 'react';
import { Check, X, FileCheck, Layers, AlertCircle, Building, DollarSign, History } from 'lucide-react';

interface VendorQuote {
  id: string;
  vendorName: string;
  location: string;
  item: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  deliveryDays: number;
  complianceRating: string;
  slaTerms: string;
  recommended: boolean;
}

const SAMPLE_QUOTES: VendorQuote[] = [
  {
    id: "Q-801",
    vendorName: "Apex Cloud Hardware Ltd.",
    location: "Singapore Hub",
    item: "Managed Enterprise Edge Cluster (3 Nodes)",
    unitPrice: 2400,
    quantity: 3,
    totalPrice: 7200,
    deliveryDays: 7,
    complianceRating: "99.2% (ISO 27001)",
    slaTerms: "4hr replacement SLA, 24/7 on-call hardware",
    recommended: true
  },
  {
    id: "Q-802",
    vendorName: "Delta Systems Global",
    location: "Frankfurt Hub",
    item: "Managed Enterprise Edge Cluster (3 Nodes)",
    unitPrice: 2850,
    quantity: 3,
    totalPrice: 8550,
    deliveryDays: 14,
    complianceRating: "98.5% (SOC2 Type II)",
    slaTerms: "Next-day replacement, standard business hours",
    recommended: false
  },
  {
    id: "Q-803",
    vendorName: "Kite Integrated Networks",
    location: "Tokyo Hub",
    item: "Managed Enterprise Edge Cluster (3 Nodes)",
    unitPrice: 2200,
    quantity: 3,
    totalPrice: 6600,
    deliveryDays: 21,
    complianceRating: "94.0% (Pending Audit)",
    slaTerms: "Best-effort remote dispatch",
    recommended: false
  }
];

export const SupplyTrackDemo: React.FC = () => {
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>("Q-801");
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [auditLog, setAuditLog] = useState<string[]>([
    "RFQ #REQ-4402 published for review",
    "Received 3 vendor proposals and cataloged line items",
    "Commercial Ops completed price variance benchmark"
  ]);

  const handleApprove = (quoteId: string) => {
    const q = SAMPLE_QUOTES.find(x => x.id === quoteId);
    setApprovalStatus('approved');
    setAuditLog(prev => [
      `Purchase order approved for ${q?.vendorName} ($${q?.totalPrice.toLocaleString()}) by Authorized Commercial Signatory.`,
      ...prev
    ]);
  };

  const handleReject = () => {
    setApprovalStatus('rejected');
    setAuditLog(prev => [
      "Quotation package returned for renegotiation with vendors.",
      ...prev
    ]);
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
            <span className="text-xs text-slate-400">Commercial Operations System</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            SupplyTrack: Procurement Coordination
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Supplier comparison, quotation ledger, delivery timeline verification, and tamper-evident approval governance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
            RFQ: Infrastructure Spec #REQ-4402
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Vendor Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_QUOTES.map((q) => {
            const isSelected = selectedQuoteId === q.id;
            return (
              <div
                key={q.id}
                onClick={() => setSelectedQuoteId(q.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                {q.recommended && (
                  <span className="absolute -top-2.5 right-4 text-[10px] font-mono-code uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-400 text-slate-950 font-bold">
                    Optimal Value
                  </span>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono-code">
                    <span>{q.id}</span>
                    <span>{q.location}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm">{q.vendorName}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{q.item}</p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Price:</span>
                      <span className="font-mono-code font-bold text-white text-sm">
                        ${q.totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Lead Time:</span>
                      <span className="font-mono-code text-cyan-300">{q.deliveryDays} Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Compliance:</span>
                      <span className="font-mono-code text-emerald-400">{q.complianceRating}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-300 mt-2">
                    <span className="text-slate-500 font-mono-code block text-[10px]">SLA Scope:</span>
                    {q.slaTerms}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className={`text-[11px] font-mono-code ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {isSelected ? '● Active Selection' : 'Click to Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action & Audit Record */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
          {/* Decision Controller */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono-code flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>Commercial Sign-off Gate</span>
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              Selected: <strong className="text-white">{SAMPLE_QUOTES.find(q => q.id === selectedQuoteId)?.vendorName}</strong> for total quote value of <strong className="text-cyan-300 font-mono-code">${SAMPLE_QUOTES.find(q => q.id === selectedQuoteId)?.totalPrice.toLocaleString()}</strong>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleApprove(selectedQuoteId)}
                className="flex-1 py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Execute PO Approval</span>
              </button>
              <button
                onClick={handleReject}
                className="py-2.5 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 font-medium text-xs rounded-lg border border-white/[0.08] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Flag for Re-quote</span>
              </button>
            </div>

            {approvalStatus === 'approved' && (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Approval recorded in tamper-evident ledger. PO dispatched to supplier.</span>
              </div>
            )}
            {approvalStatus === 'rejected' && (
              <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Procurement flagged. Renegotiation brief generated.</span>
              </div>
            )}
          </div>

          {/* Audit History */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono-code flex items-center gap-2">
              <History className="w-4 h-4 text-slate-400" />
              <span>Decision History & Audit Trail</span>
            </h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {auditLog.map((log, idx) => (
                <div key={idx} className="text-xs text-slate-400 flex items-start gap-2 border-b border-white/[0.03] pb-1.5">
                  <span className="text-cyan-400 font-mono-code text-[11px] shrink-0">
                    {`[0${idx + 1}]`}
                  </span>
                  <span className="leading-snug">{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
