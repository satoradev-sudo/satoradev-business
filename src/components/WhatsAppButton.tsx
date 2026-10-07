import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+880 1714-722651";
  const whatsappUrl = `https://wa.me/8801714722651?text=${encodeURIComponent(
    "Hello Satora.dev, I would like to discuss a project inquiry regarding digital experiences, software, and AI systems."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Expanded Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-80 p-5 rounded-3xl bg-[#090E1A]/95 border border-emerald-500/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(16,185,129,0.25)] space-y-3 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                  <WhatsAppIcon size={18} color="#25D366" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Satora.dev WhatsApp</div>
                  <div className="text-[10px] text-emerald-400 font-mono-code flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Direct Team Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with our engineering and commercial leads on WhatsApp for immediate scope clarifications or inquiries.
            </p>

            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono-code text-slate-300 flex items-center justify-between">
              <span>Direct:</span>
              <span className="text-emerald-400 font-bold">{phoneNumber}</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer"
            >
              <WhatsAppIcon size={16} color="#022c22" />
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button with Authentic WhatsApp Vector Icon */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-300/40 cursor-pointer group"
      >
        <WhatsAppIcon size={18} color="#052e16" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </motion.button>
    </div>
  );
};
