import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OverviewView } from './views/OverviewView';
import { ServicesView } from './views/ServicesView';
import { LabView } from './views/LabView';
import { MethodologyView } from './views/MethodologyView';
import { CompanyView } from './views/CompanyView';
import { ContactView } from './views/ContactView';
import { DiscoveryModal } from './components/DiscoveryModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConstellationBackground } from './components/ConstellationBackground';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('overview');
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState<boolean>(false);
  const [contactInitialTopic, setContactInitialTopic] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['overview', 'services', 'lab', 'methodology', 'company', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceTopic = (topic: string) => {
    setContactInitialTopic(topic);
    handleTabChange('contact');
  };

  const handleDiscoverySubmit = (brief: any) => {
    console.log("Discovery brief submitted:", brief);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200 relative">
      {/* Animated Constellation & Orbital Background (matching reference screenshot) */}
      <ConstellationBackground />

      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
      />

      {/* Main View Container with Animated Page Transitions */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentTab === 'overview' && (
              <OverviewView
                setCurrentTab={handleTabChange}
                onOpenDiscovery={() => setIsDiscoveryOpen(true)}
                onSelectServiceTopic={handleSelectServiceTopic}
              />
            )}

            {currentTab === 'services' && (
              <ServicesView
                onOpenDiscovery={() => setIsDiscoveryOpen(true)}
                onSelectInquiryService={handleSelectServiceTopic}
              />
            )}

            {currentTab === 'lab' && <LabView />}

            {currentTab === 'methodology' && (
              <MethodologyView
                onOpenDiscovery={() => setIsDiscoveryOpen(true)}
                setCurrentTab={handleTabChange}
              />
            )}

            {currentTab === 'company' && (
              <CompanyView
                onOpenDiscovery={() => setIsDiscoveryOpen(true)}
                setCurrentTab={handleTabChange}
              />
            )}

            {currentTab === 'contact' && (
              <ContactView
                initialServiceTopic={contactInitialTopic}
                onOpenDiscovery={() => setIsDiscoveryOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={handleTabChange}
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
      />

      {/* Interactive Discovery & Scope Estimator Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        onSubmitInquiry={handleDiscoverySubmit}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}
