import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Trophy,
  Layers,
  Users,
  Trees,
  Maximize2,
  X,
  Database,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { careerHighlights } from '../data/portfolioData';
import { fetchPortfolioImages, PortfolioImage } from '../lib/supabase';

interface PortfolioSectionProps {
  onOpenCv: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenCv }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [dbImages, setDbImages] = useState<PortfolioImage[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    fetchPortfolioImages().then((imgs) => {
      if (imgs && imgs.length > 0) {
        setDbImages(imgs);
      }
    });
  }, []);

  const getImageFor = (id: string, fallback: string) => {
    const found = dbImages.find((img) => img.id === id);
    return found ? found.image_url : fallback;
  };

  const projects = [
    {
      id: 'casecation',
      dbId: 'casecation-award',
      badge: 'CaseCation Season 2',
      title: 'CaseCation Season 2',
      category: 'NATIONAL CASE COMPETITION & BRANDING',
      role: 'Branding and Production Wing Head',
      period: 'Aug 2025 – Oct 2025',
      organization: 'Rajshahi University Business Club',
      description:
        'Led a dedicated 15-member creative team to engineer the nationwide branding identity, marketing collateral, and digital presence for one of Bangladesh’s premier inter-university business competitions. Produced over 450+ custom visual assets, curated 20+ campus banners across top public & private universities, and received formal stage recognition.',
      impactBadge: '450+ Assets • 20+ Banners • 15-Member Squad',
      image: getImageFor('casecation-award', '/images/casecation_award.jpg'),
      deliverables: [
        'End-to-end branding identity and visual asset architecture',
        'Direction of 15-member cross-functional design squad',
        'Nationwide promotional banners across top university campuses',
        'Stage felicitation and organizational award for outstanding production',
      ],
      metrics: [
        { label: 'Visual Deliverables', value: '450+' },
        { label: 'Campus Footprint', value: '20+ Univs' },
        { label: 'Team Managed', value: '15 Members' },
      ],
    },
    {
      id: 'hult-prize',
      dbId: 'hult-team-ru',
      badge: 'HULT PRIZE at RU',
      title: 'HULT PRIZE at University of Rajshahi',
      category: 'GLOBAL SOCIAL ENTREPRENEURSHIP CHALLENGE',
      role: 'Former Deputy Campus Director & Chief of Admin',
      period: '2023 – 2025',
      organization: 'Hult Prize Global Foundation',
      description:
        'Spearheaded university-wide outreach, campus promotions, and operational coordination for the world’s largest student social entrepreneurship challenge. Successfully mobilized 750+ student teams to submit social enterprise solutions, trained a 50+ member volunteer committee, and directed logistics for on-campus pitch days.',
      impactBadge: '750+ Teams • 50+ Committee • Global Impact',
      image: getImageFor('hult-team-ru', '/images/hult_team_ru.jpg'),
      deliverables: [
        'Outreach strategy achieving 750+ participating student teams',
        'Supervised 50+ organizing committee members across multi-wings',
        'Secured event partnerships, judicial panels, and training sessions',
        'Managed on-stage operations for campus-wide Grand Finale',
      ],
      metrics: [
        { label: 'Teams Mobilized', value: '750+' },
        { label: 'Organizers Led', value: '50+' },
        { label: 'Phases Executed', value: '4 Rounds' },
      ],
    },
    {
      id: 'pathchinhno',
      dbId: 'pathchinhno-social',
      badge: 'Project Pathchinhno',
      title: 'Project Pathchinhno (পথ চিহ্ন)',
      category: 'ENVIRONMENTAL & COMMUNITY ACTION',
      role: 'Founder & Lead Coordinator',
      period: '2023 – Present',
      organization: 'Youth Social Impact Umbrella',
      description:
        'Founded and led an action-driven youth initiative addressing ecological conservation and street welfare. Engineered The Green FootPrint (170+ native trees planted across university zones), Mission BluePulse (Padma River bank waste cleanup & microplastics advocacy), and Winter Heaven (shelter & warmth for street animals).',
      impactBadge: '170+ Trees • River Cleanup • Street Animal Care',
      image: getImageFor('pathchinhno-social', '/images/pathchinhno_social.jpg'),
      deliverables: [
        'Tree plantation drive planting 170+ sustainable native saplings',
        'Padma riverbank cleanliness campaign with 40+ youth volunteers',
        'Community winter shelter kits distributed for vulnerable animals',
        'Partnership with regional environmental advocacy groups',
      ],
      metrics: [
        { label: 'Trees Planted', value: '170+' },
        { label: 'Youth Volunteers', value: '40+' },
        { label: 'Core Programs', value: '3 Tracks' },
      ],
    },
    {
      id: 'rubc-exec',
      dbId: 'jamil-portrait',
      badge: 'RUBC Executive VP',
      title: 'Rajshahi University Business Club',
      category: 'HUMAN RESOURCE & STRATEGIC OPERATIONS',
      role: 'Vice President (Resource Management & Planning)',
      period: 'Apr 2026 – Present',
      organization: 'Executive Committee 2026-27',
      description:
        'Directing human resource governance, skill incubation, and operational workflows for a vibrant community of over 200+ members. Standardized leadership succession frameworks, coordinated department leaders, and formulated competency bootcamps for student professionals.',
      impactBadge: '200+ Community • HR Governance • Capacity Workshops',
      image: getImageFor('jamil-portrait', '/images/jamil_profile_official.jpg'),
      deliverables: [
        'HR and resource planning across 5 specialized wings',
        'Structured capacity development workshops and peer mentoring',
        'Executive committee coordination for flagship annual events',
        'Creation of leadership tracking systems for incoming batches',
      ],
      metrics: [
        { label: 'Active Members', value: '200+' },
        { label: 'Workshops Led', value: '6+' },
        { label: 'Governance Term', value: '2026-27' },
      ],
    },
    {
      id: 'imagen-venture',
      dbId: 'imagen-cert',
      badge: 'UNICEF ImaGen',
      title: 'ImaGen Ventures Youth Challenge',
      category: 'YOUTH SOCIAL INNOVATION & ACCELERATOR',
      role: 'National Finalist & Venture Architect',
      period: '2024 – 2025',
      organization: 'UNICEF, Generation Unlimited & JAAGO Foundation',
      description:
        'Selected as top national finalist among hundreds of nationwide entries for designing an innovative grassroots social enterprise. Participated in the intensive Mymensingh regional boot-camp, crafting scalable frameworks for climate resilience and youth capacity building.',
      impactBadge: 'National Finalist • Mymensingh Boot-Camp • UNICEF',
      image: getImageFor('imagen-cert', '/images/cert_unicef_imagen.jpg'),
      deliverables: [
        'Pitched actionable environmental sustainability business model',
        'Regional boot-camp intensive design-thinking sprints',
        'Direct evaluation and mentoring from UNICEF and JAAGO leadership',
        'Received verified Certificate of Appreciation & Achievement',
      ],
      metrics: [
        { label: 'Competition Tier', value: 'National' },
        { label: 'Boot-Camp', value: 'Mymensingh' },
        { label: 'Partner', value: 'UNICEF' },
      ],
    },
    {
      id: 'ignite-championship',
      dbId: 'ignite-award',
      badge: 'Ignite 3.0 Champion',
      title: 'Ignite 3.0 Business Article Writing',
      category: 'STRATEGIC WRITING & ANALYSIS',
      role: 'Champion (1st Place Winner)',
      period: '2024',
      organization: 'Rajshahi University Business Club (RUBC)',
      description:
        'Clinched the championship trophy and certificate in the flagship business article writing segment of Ignite 3.0. Formulated incisive critical analyses on macroeconomic dynamics, youth venture incubation, and policy modernization.',
      impactBadge: '1st Place Champion • Crystal Trophy • Publication',
      image: getImageFor('ignite-award', '/images/ignite_champion_award.jpg'),
      deliverables: [
        'Authored 1st place macroeconomic critique on youth enterprise',
        'Presented on-stage before senior academic and industry jurors',
        'Honored with official crystal champion crest and citation',
        'Published across university business club media channels',
      ],
      metrics: [
        { label: 'Rank', value: '1st Place' },
        { label: 'Evaluation Score', value: 'Highest' },
        { label: 'Recognition', value: 'Trophy' },
      ],
    },
  ];

  const currentProject = projects[activeTab];

  const prevProject = () => {
    setActiveTab((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setActiveTab((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextProject();
    } else if (distance < -45) {
      prevProject();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="portfolio"
      className="py-12 lg:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto overflow-hidden"
    >
      {/* Header matching abdurrahmanrahim.com */}
      <div className="mb-6 relative z-10 text-center lg:text-left">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[15rem] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,rgba(37,99,235,0.08)_40%,transparent_70%)] blur-[40px] pointer-events-none -z-10 rounded-full mix-blend-screen hidden lg:block" />
        
        <span className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Featured Project
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black mb-1.5 tracking-tight">
              Projects That Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#34D399]">
                Impact
              </span>
            </h2>
            <p className="text-[#CBD5E1] text-xs sm:text-sm max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
              A showcase of campaigns, events, and creative initiatives demonstrating leadership, execution, and measurable outcomes.
            </p>
          </div>

          {/* Top-Right Deep Dive Link */}
          <div className="hidden lg:block shrink-0 mb-1">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3B82F6]/25 bg-white/5 text-xs font-bold hover:bg-white/10 hover:border-[#00D1FF]/40 text-[#F8FAFC] transition-all font-display group"
            >
              <span>View Deep Dive Portfolio / CV</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Selector Tabs with Swipe / Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 sm:mb-6 scrollbar-none">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setActiveTab(idx)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 min-h-[40px] select-none ${
              activeTab === idx
                ? 'bg-gradient-to-r from-[#00D1FF] to-[#3B82F6] text-[#F8FAFC] shadow-[0_0_20px_rgba(0,209,255,0.4)] border border-[#00D1FF]/40 scale-[1.02]'
                : 'bg-[#0A1F4D]/50 text-[#CBD5E1] hover:text-white hover:bg-[#0A1F4D]/80 border border-[#3B82F6]/15'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-white' : 'bg-[#00D1FF]'}`} />
            <span>{proj.badge}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Bento Showcase Card with Touch Swipe */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#050B18]/90 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="grid lg:grid-cols-12 gap-6 items-stretch w-full"
          >
            {/* Left Side: Visual Image & Floating Badges */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#3B82F6]/20 shadow-inner group">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={() => setPreviewImage(currentProject.image)}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B14]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Expand Image Button */}
                <button
                  onClick={() => setPreviewImage(currentProject.image)}
                  aria-label="View full image"
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/80 border border-white/15 transition-all z-20"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Top Right Floating Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/15 flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#F8FAFC] tracking-wider uppercase font-display truncate max-w-[160px]">
                    {currentProject.badge}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-12">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#00C4CC] uppercase tracking-wide truncate block">
                    {currentProject.role}
                  </span>
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {currentProject.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#0A1F4D]/50 border border-[#3B82F6]/20 text-center"
                  >
                    <div className="text-sm sm:text-lg font-display font-black text-[#00D1FF]">
                      {m.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#94A3B8] font-medium leading-tight truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Details, Narrative, Deliverables List, and CTAs */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col justify-between pl-0 lg:pl-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C4CC]">
                    {currentProject.category}
                  </span>
                  <span className="text-[#94A3B8]">&bull;</span>
                  <span className="text-[11px] text-[#94A3B8] font-mono">
                    {currentProject.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl sm:text-3xl font-display font-black text-[#F8FAFC] tracking-tight mb-2 sm:mb-3">
                  {currentProject.title}
                </h3>

                <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed mb-5 font-light">
                  {currentProject.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 sm:space-y-2.5 mb-5">
                  <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Key Deliverables & Execution Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {currentProject.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs text-[#CBD5E1] flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions and Navigation Bar */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#3B82F6]/15 flex items-center justify-between flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1F4D]/50 border border-[#00C4CC]/30 text-xs text-[#00C4CC] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[220px] sm:max-w-none">{currentProject.impactBadge}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#3B82F6]/25 bg-[#0A1F4D]/50 text-[#CBD5E1] hover:text-[#00D1FF] hover:bg-[#0A1F4D] flex items-center justify-center transition-all min-h-[32px] min-w-[32px]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#3B82F6]/25 bg-[#0A1F4D]/50 text-[#CBD5E1] hover:text-[#00D1FF] hover:bg-[#0A1F4D] flex items-center justify-center transition-all min-h-[32px] min-w-[32px]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20">
              <button
                onClick={() => setPreviewImage(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={previewImage}
                alt="Project detail preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
