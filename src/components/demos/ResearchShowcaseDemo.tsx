import React, { useState } from 'react';
import { Microscope, Activity, FileCheck2, ExternalLink, AlertTriangle, Cpu, Layers } from 'lucide-react';

export const ResearchShowcaseDemo: React.FC = () => {
  const [activeResearch, setActiveResearch] = useState<'vision' | 'eeg'>('vision');
  const [heatmapIntensity, setHeatmapIntensity] = useState<number>(65);

  return (
    <div className="bg-[#0A0E1A] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-white/[0.08] bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              Section 20 & 07 Research Record
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-400">Academic & Applied Science</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            Research Foundation: Vision & Signal Processing
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Published research background in semi-supervised computer vision and EEG time-series dataset preparation.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-white/[0.08]">
          <button
            onClick={() => setActiveResearch('vision')}
            className={`px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors ${
              activeResearch === 'vision'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Microscope className="w-3.5 h-3.5" />
            <span>Agricultural Vision AI</span>
          </button>
          <button
            onClick={() => setActiveResearch('eeg')}
            className={`px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors ${
              activeResearch === 'eeg'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>EEG Exam Dataset</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {activeResearch === 'vision' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Interactive Heatmap Simulator */}
            <div className="rounded-xl border border-white/[0.08] bg-slate-900/60 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono-code text-slate-300">
                  Model Inspection: Betel Leaf Chlorosis & Necrosis
                </span>
                <span className="text-xs font-mono-code text-emerald-400">
                  Semi-Supervised ResNet
                </span>
              </div>

              {/* Simulated Specimen Canvas */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-950 border border-white/[0.06] flex items-center justify-center">
                {/* Visual representation of specimen */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-emerald-900/80 via-emerald-700/60 to-emerald-950/90 border border-emerald-500/30 flex items-center justify-center">
                  <div className="w-24 h-0.5 bg-emerald-300/40 rotate-45 transform" />
                  <div className="w-20 h-0.5 bg-emerald-300/30 -rotate-45 transform" />
                  
                  {/* Heatmap overlay */}
                  <div
                    className="absolute inset-0 rounded-full mix-blend-screen pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 65% 40%, rgba(244, 63, 94, ${heatmapIntensity / 100}) 0%, rgba(234, 179, 8, ${(heatmapIntensity / 100) * 0.7}) 35%, transparent 70%)`
                    }}
                  />
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] font-mono-code text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded">
                  Grad-CAM Attention Map: {heatmapIntensity}% Opacity
                </div>
              </div>

              {/* Slider controller */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Grad-CAM Interpretability Layer</span>
                  <span className="font-mono-code text-cyan-300">{heatmapIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={heatmapIntensity}
                  onChange={(e) => setHeatmapIntensity(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Research Context & Scope Boundaries */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  Agricultural Vision Paper (Published)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Published paper examining betel leaf disease identification utilizing semi-supervised deep learning architectures with explainable Grad-CAM activation mapping to isolate foliar lesions with sparse labeled data.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono-code">
                  <span>Domain: Plant Pathology & CV</span>
                  <span>·</span>
                  <span>Contribution: Data Prep & Model Evaluation</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed">
                  <div className="font-semibold text-amber-300">Section 07/20 Public Disclosure Boundary:</div>
                  This research verifies data preparation rigor and evaluation methodologies. It serves as feasibility foundation and does not claim clinical or generalized commercial agricultural guarantees without client-specific ground-truthing.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* EEG Time Series Data Simulation */}
            <div className="rounded-xl border border-white/[0.08] bg-slate-900/60 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono-code text-slate-300">
                  Signal Trace: Multi-Channel EEG During Exam Tasks
                </span>
                <span className="text-xs font-mono-code text-cyan-400">
                  128 Hz Sampling
                </span>
              </div>

              {/* Waveform visual */}
              <div className="h-56 bg-slate-950 rounded-lg p-4 flex flex-col justify-around font-mono-code text-[11px] text-slate-500 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400">FP1-A1</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-full h-0.5 bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400">FP2-A2</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-full h-0.5 bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400">C3-T3</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-full h-0.5 bg-indigo-400/80" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400">O1-P3</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-full h-0.5 bg-teal-400/80" />
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono-code">
                Artifact Filtering: Notch 50Hz + Bandpass [0.5–45Hz] + Baseline Correction
              </div>
            </div>

            {/* Scientific Transparency */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  Exam Cognitive EEG Dataset (Published)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Published dataset contribution comprising raw and preprocessed electroencephalogram recordings gathered during academic testing tasks. Highlights strict sensor data pipeline engineering, protocol compliance, and anomaly rejection.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono-code">
                  <span>Domain: Neuro-Informatics & Biosignals</span>
                  <span>·</span>
                  <span>Contribution: Sensor Calibration & Curation</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300 leading-relaxed">
                <div className="font-semibold text-cyan-300 mb-1">Ethical Boundary:</div>
                This confirms biosignal data preparation and feature extraction acumen. As documented in Section 07 and 18, it is strictly non-clinical research and not presented as a medical diagnosis product.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
