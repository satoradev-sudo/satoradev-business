import React, { useMemo, useState } from 'react';
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
  Activity,
  ExternalLink,
  Globe2,
  Search,
} from 'lucide-react';
import { ServiceFlowDemo } from '../components/demos/ServiceFlowDemo';
import { KnowledgeDeskDemo } from '../components/demos/KnowledgeDeskDemo';
import { SupplyTrackDemo } from '../components/demos/SupplyTrackDemo';
import { GrowthLoopDemo } from '../components/demos/GrowthLoopDemo';
import { ResearchShowcaseDemo } from '../components/demos/ResearchShowcaseDemo';
import serviceFlowPreview from '../assets/images/satora_serviceflow_system_1791393447158.jpg';
import knowledgeDeskPreview from '../assets/images/satora_knowledgedesk_ai_1791393463516.jpg';
import supplyTrackPreview from '../assets/images/satora_hero_futuristic_lab_1791393431492.jpg';
import growthLoopPreview from '../assets/images/satora_hero_futuristic_lab_1791393431492.jpg';
import researchPreview from '../assets/images/satora_research_agriculture_vision_1791393479754.jpg';
import { CLIENT_PROJECTS } from '../data/clientProjects';

type LabTab = 'serviceflow' | 'knowledgedesk' | 'supplytrack' | 'growthloop' | 'research' | 'projects';

const isLabTab = (value: string | null): value is LabTab =>
  value !== null &&
  ['serviceflow', 'knowledgedesk', 'supplytrack', 'growthloop', 'research', 'projects'].some(
    (tab) => tab === value
  );

const getDemoFromHash = (): LabTab => {
  const demo = new URLSearchParams(window.location.hash.split('?')[1] || '').get('demo');
  return isLabTab(demo) ? demo : 'serviceflow';
};

const getDemoUrl = (tab: LabTab) =>
  `${window.location.origin}${window.location.pathname}#lab?demo=${tab}`;

export const LabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>(getDemoFromHash);
  const [projectSearch, setProjectSearch] = useState('');
  const [projectCategory, setProjectCategory] = useState('all');

  const visibleProjects = useMemo(() => {
    const query = projectSearch.trim().toLowerCase();
    return CLIENT_PROJECTS.filter((project) => {
      const matchesCategory = projectCategory === 'all' || project.category === projectCategory;
      const searchableContent = [
        project.name,
        project.categoryLabel,
        project.summary,
        project.scope,
        project.role,
        ...project.technologies
      ].join(' ').toLowerCase();
      return matchesCategory && (!query || searchableContent.includes(query));
    });
  }, [projectCategory, projectSearch]);

  React.useEffect(() => {
    const syncDemoFromHash = () => setActiveTab(getDemoFromHash());
    window.addEventListener('hashchange', syncDemoFromHash);
    return () => window.removeEventListener('hashchange', syncDemoFromHash);
  }, []);

  const selectDemo = (tab: LabTab) => {
    setActiveTab(tab);
    window.location.hash = `lab?demo=${tab}`;
  };

  const prototypes: Array<{
    id: LabTab;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    activeBtn: string;
    accentColor: string;
  }> = [
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
    },
    {
      id: 'projects',
      title: 'Projects & Services',
      subtitle: 'Web Services & Project Demos',
      icon: <Sparkles className="w-4 h-4" />,
      activeBtn: 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]',
      accentColor: 'text-cyan-400'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 pb-16 sm:pb-20 relative overflow-hidden">
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
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-4 border-b border-white/[0.08] pb-6">
          {prototypes.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <motion.button
                key={p.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectDemo(p.id)}
                className={`min-w-0 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? p.activeBtn
                    : 'bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:bg-white/[0.08]'
                }`}
              >
                <span>{p.icon}</span>
                <span className="min-w-0 text-left">
                  <span className="block font-bold leading-tight">{p.title}</span>
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
            {activeTab === 'projects' && (
              <div className="space-y-10">
                <section className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider font-semibold">
                      Web Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Design, Build, Fix & Improve Websites
                    </h2>
                    <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
                      Start with your business need, then choose the right solution. WordPress is one platform option—not the whole offering.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'UI/UX Design',
                        description: 'Clear, thoughtful interfaces designed around real users and their needs.'
                      },
                      {
                        title: 'Web Development',
                        description: 'Responsive websites and features built to support your business.'
                      },
                      {
                        title: 'Redesign & Repair',
                        description: 'Improve site structure, fix issues, and make important user flows work better.'
                      },
                      {
                        title: 'Optimization',
                        description: 'Improve performance, usability, and search-engine foundations.'
                      }
                    ].map((service) => (
                      <article
                        key={service.title}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-400/40 transition-colors space-y-2"
                      >
                        <h3 className="text-base font-semibold text-white">{service.title}</h3>
                        <p className="text-sm text-slate-300 leading-relaxed">{service.description}</p>
                      </article>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Whether you need a new site, an overdue redesign, a focused repair, or ongoing improvement, we scope the work around your goals.
                  </p>
                </section>

                <section className="space-y-5 border-t border-white/[0.08] pt-8">
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider font-semibold">
                      Client Website Projects
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Healthcare Websites and Digital Experiences
                    </h2>
                    <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
                      Browse eight healthcare website projects using the details supplied for this portfolio. Open each live site to explore it directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
                      <div className="flex flex-wrap gap-2" aria-label="Filter projects by category">
                        {[
                          { id: 'all', label: 'All projects' },
                          { id: 'home-healthcare', label: 'Home healthcare' },
                          { id: 'assisted-living', label: 'Assisted living' },
                          { id: 'community-health', label: 'Community health' },
                          { id: 'medical-transport', label: 'Medical transport' }
                        ].map((category) => (
                          <button
                            key={category.id}
                            type="button"
                            aria-pressed={projectCategory === category.id}
                            onClick={() => setProjectCategory(category.id)}
                            className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${
                              projectCategory === category.id
                                ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-200'
                                : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20'
                            }`}
                          >
                            {category.label}
                          </button>
                        ))}
                      </div>

                      <label className="relative block w-full lg:max-w-xs">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          type="search"
                          value={projectSearch}
                          onChange={(event) => setProjectSearch(event.target.value)}
                          placeholder="Search projects or technologies"
                          aria-label="Search projects or technologies"
                          className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                        />
                      </label>
                    </div>

                    <p className="text-xs text-slate-400" aria-live="polite">
                      Showing {visibleProjects.length} of {CLIENT_PROJECTS.length} projects.
                    </p>

                    {visibleProjects.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {visibleProjects.map((project) => (
                          <article
                            key={project.id}
                            className="group min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 transition-colors hover:border-cyan-400/40"
                          >
                            <div className={`relative aspect-[16/9] overflow-hidden ${project.image ? 'bg-white' : 'bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-4'}`}>
                              {project.image ? (
                                <img
                                  src={project.image.src}
                                  alt={project.image.alt}
                                  loading="lazy"
                                  className="h-full w-full object-contain object-center"
                                />
                              ) : (
                                <div className="flex h-full flex-col justify-between">
                                  <div className="flex items-center gap-2 text-slate-400" aria-hidden="true">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                                      <Globe2 className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div className="min-w-0">
                                      <p className="text-xs font-semibold text-slate-200">No screenshot supplied</p>
                                      <p className="truncate text-[11px] text-slate-400">{new URL(project.liveUrl).hostname}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="space-y-3 p-4 sm:p-5">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono-code text-cyan-200">
                                  {project.categoryLabel}
                                </span>
                                <span className="text-[10px] text-slate-500">Outcome reported in supplied brief</span>
                              </div>
                              <h3 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
                                {project.name}
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
                              <p className="text-xs leading-relaxed text-slate-400">
                                <span className="font-semibold text-slate-300">Project scope:</span> {project.scope}
                              </p>
                              <p className="text-xs leading-relaxed text-slate-400">
                                <span className="font-semibold text-slate-300">Role:</span> {project.role}
                              </p>
                              <div className="flex flex-wrap gap-1.5" aria-label={`Technologies used for ${project.name}`}>
                                {project.technologies.map((technology) => (
                                  <span key={technology} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] text-slate-300">
                                    {technology}
                                  </span>
                                ))}
                              </div>
                              <p className="text-xs text-slate-300">
                                <span className="font-semibold text-slate-200">Reported outcome:</span> {project.reportedOutcome}
                              </p>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                              >
                                Visit live site <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <p className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-sm text-slate-300">
                        No projects match this search. Try a different name, service, technology, or category.
                      </p>
                    )}

                    <p className="text-xs leading-relaxed text-slate-400">
                      Project descriptions, technology lists, and outcomes are based on supplied information. Reported outcomes have not been independently verified; the client websites could not be accessed here to verify their current status or retrieve screenshots. No case-study or repository URLs were supplied.
                    </p>
                  </div>
                </section>

                <section className="space-y-5 border-t border-white/[0.08] pt-8">
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code text-purple-300 uppercase tracking-wider font-semibold">
                      Selected Project Demos
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Explore What We Build
                    </h2>
                    <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
                      Open an interactive concept to explore its workflow. These are demonstrations, not claims of deployed client projects.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {[
                      {
                        tab: 'serviceflow' as const,
                        title: 'ServiceFlow',
                        description: 'Inquiry-to-service CRM pipeline with team assignment and client status tracking.',
                        image: serviceFlowPreview,
                        imageAlt: 'Concept artwork of a connected workflow dashboard'
                      },
                      {
                        tab: 'knowledgedesk' as const,
                        title: 'KnowledgeDesk',
                        description: 'Approved-content AI assistant with source verification and human escalation.',
                        image: knowledgeDeskPreview,
                        imageAlt: 'Concept artwork illustrating a connected AI knowledge network'
                      },
                      {
                        tab: 'supplytrack' as const,
                        title: 'SupplyTrack',
                        description: 'Procurement coordination demo for supplier comparison and approval workflows.',
                        image: supplyTrackPreview,
                        imageAlt: 'Concept artwork of a digital operations workspace'
                      },
                      {
                        tab: 'growthloop' as const,
                        title: 'GrowthLoop',
                        description: 'Marketing attribution and lead-quality concept for connecting activity to inquiries.',
                        image: growthLoopPreview,
                        imageAlt: 'Concept artwork representing digital analytics and growth'
                      },
                      {
                        tab: 'research' as const,
                        title: 'Research Showcase',
                        description: 'Interactive examples covering agricultural computer vision and EEG signal data.',
                        image: researchPreview,
                        imageAlt: 'Concept artwork of a computer-vision plant research workstation'
                      }
                    ].map((project) => (
                      <a
                        key={project.tab}
                        href={getDemoUrl(project.tab)}
                        onClick={(event) => {
                          event.preventDefault();
                          selectDemo(project.tab);
                        }}
                        className="group min-w-0 overflow-hidden rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-purple-400/40 transition-colors text-left"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-950/85 border border-white/15 px-2.5 py-1 text-[10px] font-mono-code text-slate-100 backdrop-blur">
                            Concept artwork
                          </span>
                        </div>
                        <div className="p-4 sm:p-5 space-y-3">
                          <span className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 text-[10px] font-mono-code text-purple-200">
                            Interactive demo
                          </span>
                          <h3 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {project.description}
                          </p>
                          <span className="block break-all text-[11px] text-slate-500 font-mono-code">
                            {getDemoUrl(project.tab)}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                            Open live demo <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            )}
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
