import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Palette,
  Users,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData, careerHighlights } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
  onNavigateToProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onNavigateToProject }) => {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance rotation every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveHighlightIndex((prev) =>
        prev === careerHighlights.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeHighlightIndex]);

  const prevHighlight = () => {
    setActiveHighlightIndex((prev) =>
      prev === 0 ? careerHighlights.length - 1 : prev - 1
    );
  };

  const nextHighlight = () => {
    setActiveHighlightIndex((prev) =>
      prev === careerHighlights.length - 1 ? 0 : prev + 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextHighlight();
    } else if (distance < -45) {
      prevHighlight();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  const currentHighlight = careerHighlights[activeHighlightIndex] || careerHighlights[0];

  const focusSkills = [
    { label: 'Strategic Thinking', icon: <TrendingUp className="w-4 h-4 text-[#3B82F6]" /> },
    { label: 'Creative Execution', icon: <Palette className="w-4 h-4 text-[#06B6D4]" /> },
    { label: 'Team Leadership', icon: <Users className="w-4 h-4 text-[#34D399]" /> },
    { label: 'Social Impact', icon: <HeartHandshake className="w-4 h-4 text-[#8B5CF6]" /> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-[110px] lg:pb-16 px-4 sm:px-6 max-w-[1536px] mx-auto flex items-center overflow-hidden"
    >
      {/* Ambient background glows matching abdurrahmanrahim.com */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[35rem] sm:w-[45rem] h-[35rem] sm:h-[45rem] bg-[radial-gradient(circle,rgba(37,99,235,0.09)_0%,transparent_60%)] blur-[90px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] bg-[radial-gradient(circle,rgba(6,182,212,0.07)_0%,transparent_60%)] blur-[90px]" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Bio, Skill Pills, CTAs */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col justify-center text-left">
          
          {/* Executive Sub-badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#0A1F4D]/50 text-[11px] sm:text-xs font-semibold text-[#00D1FF] mb-4 sm:mb-5 w-fit shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_8px_rgba(0,209,255,0.8)] animate-pulse" />
            <span className="truncate">Public Administration Senior &bull; RUBC VP</span>
          </div>

          {/* Large Display Title - Mobile Responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.4rem,4vw,4rem)] xl:text-[4.6rem] font-display font-black leading-[1.04] tracking-tight text-[#F8FAFC] mb-3">
            <span className="block break-words sm:whitespace-nowrap">Md. Jamil Hosen</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-[#00E5FF] to-[#34D399] break-words sm:whitespace-nowrap">
              Khandakar
            </span>
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-[#E2E8F0] text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6 max-w-lg">
            {profileData.tagline}
          </p>

          {/* 4 Competency Pills with Glow & Custom Colors */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-8">
            {focusSkills.map((skill) => (
              <div
                key={skill.label}
                className="px-3.5 sm:px-4 py-2 rounded-xl border border-[#3B82F6]/20 bg-[#0A1F4D]/50 text-[#F8FAFC] text-xs font-bold flex items-center gap-2 hover:border-[#3B82F6]/40 hover:bg-[#0A1F4D]/80 transition-all shadow-md cursor-default select-none"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons: "View My Work" & "Download Resume" */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#portfolio"
              id="hero-view-work-btn"
              className="px-6 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#00D1FF] to-[#3B82F6] text-[#F8FAFC] rounded-xl text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,209,255,0.5)] transition-all flex items-center justify-center gap-2.5 group hover:scale-[1.02] active:scale-[0.98] border border-[#00D1FF]/30 min-h-[44px]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenCv}
              id="hero-download-resume-btn"
              className="px-6 sm:px-7 py-3.5 sm:py-4 border border-[#3B82F6]/30 bg-white/[0.04] text-[#F8FAFC] rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-white/[0.09] hover:border-[#3B82F6]/50 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] min-h-[44px]"
            >
              <Download className="w-4 h-4 text-[#00D1FF]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Center Column: Portrait Image with Circular Glowing Ring Backdrop */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col justify-end items-center relative z-10 mt-6 lg:mt-0 pointer-events-none self-end">
          <div className="relative inline-block w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-full xl:max-w-[460px] transition-all pointer-events-auto">
            
            {/* Pulsating Glowing Ring Backdrop */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] xs:w-[280px] sm:w-[340px] lg:w-[360px] xl:w-[440px] h-[250px] xs:h-[280px] sm:h-[340px] lg:h-[360px] xl:h-[440px] rounded-full border border-[#3B82F6]/20 bg-[#0A1F4D]/10 backdrop-blur-sm shadow-[0_0_60px_rgba(37,99,235,0.18),inset_0_0_30px_rgba(6,182,212,0.15)] -z-10 animate-[pulse_6s_infinite_alternate]" />
            
            {/* Portrait Image */}
            <img
              src="/src/assets/images/jamil_portrait_1789908349117.jpg"
              alt="Md. Jamil Hosen Khandakar Portrait"
              className="relative z-10 w-full object-contain object-bottom filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] max-h-[300px] xs:max-h-[340px] sm:max-h-[400px] lg:max-h-[calc(100vh-140px)] xl:max-h-[660px] rounded-2xl mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Smooth bottom gradient fade into page background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030B14] via-[#030B14]/90 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Right Column: Dynamic CAREER HIGHLIGHTS Carousel Card */}
        <div
          className="col-span-12 lg:col-span-3 xl:col-span-4 flex flex-col justify-center relative z-30 mt-4 lg:mt-0 py-2 sm:py-6 lg:self-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full rounded-[1.5rem] sm:rounded-[1.75rem] border border-[#3B82F6]/25 bg-[#050B18]/90 backdrop-blur-xl p-5 sm:p-6 xl:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative flex flex-col justify-between group h-fit overflow-hidden">
            
            {/* Animated slide countdown progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
              <motion.div
                key={activeHighlightIndex}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '100%' : '100%' }}
                transition={{ duration: isPaused ? 0 : 5, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#00D1FF] to-[#34D399]"
              />
            </div>

            <div className="flex flex-col flex-grow">
              {/* Header with Title and Prev/Next Carousel Arrows */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 mt-1">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#00C4CC] uppercase flex items-center gap-2 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)] animate-pulse" />
                  CAREER HIGHLIGHTS
                </span>

                <div className="flex items-center gap-1.5 z-10 relative">
                  <button
                    onClick={prevHighlight}
                    aria-label="Previous career highlight"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#3B82F6]/30 bg-[#0A1F4D]/60 text-[#CBD5E1] hover:text-[#00D1FF] hover:bg-[#0A1F4D] transition-all flex items-center justify-center active:scale-90 min-h-[32px] min-w-[32px]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextHighlight}
                    aria-label="Next career highlight"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#3B82F6]/30 bg-[#0A1F4D]/60 text-[#CBD5E1] hover:text-[#00D1FF] hover:bg-[#0A1F4D] transition-all flex items-center justify-center active:scale-90 min-h-[32px] min-w-[32px]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic Animated Content Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  {/* Title & Role */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-display font-black text-[#F8FAFC] tracking-tight leading-tight mb-1">
                      {currentHighlight.organization}
                    </h3>
                    <p className="text-xs text-[#00D1FF] font-semibold uppercase tracking-wide">
                      {currentHighlight.role}
                    </p>
                  </div>

                  {/* Highlight Image Preview with Ambient Glow */}
                  <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#0A1F4D] to-[#020817] rounded-xl overflow-hidden border border-[#3B82F6]/20 mb-3 sm:mb-4 group/img shrink-0">
                    <img
                      src={currentHighlight.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src={currentHighlight.imageUrl}
                      alt={currentHighlight.organization}
                      className="relative z-10 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2.5 z-20">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#030B14]/85 backdrop-blur-md border border-[#00C4CC]/30 text-[#00C4CC]">
                        {currentHighlight.period}
                      </span>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <p className="text-[#CBD5E1] text-xs leading-relaxed line-clamp-3 mb-3.5 font-light">
                    {currentHighlight.shortIntro}
                  </p>

                  {/* Metric Pill */}
                  {currentHighlight.metrics && currentHighlight.metrics[0] && (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A1F4D]/50 border border-[#3B82F6]/20 text-xs text-[#94A3B8]">
                      <span className="text-[#00C4CC] font-bold">
                        {currentHighlight.metrics[0].value}
                      </span>
                      <span>&bull;</span>
                      <span className="truncate">{currentHighlight.metrics[0].label}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Jump to Project link & Pagination Dots */}
            <div className="pt-3.5 mt-3 border-t border-[#3B82F6]/15 flex items-center justify-between">
              <a
                href="#portfolio"
                className="text-xs font-bold text-[#00D1FF] hover:text-[#34D399] transition-colors flex items-center gap-1.5 group/link py-1"
              >
                <span>Explore Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Direct Jump Dots */}
              <div className="flex items-center gap-1.5">
                {careerHighlights.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHighlightIndex(idx)}
                    aria-label={`Jump to highlight ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeHighlightIndex === idx
                        ? 'w-5 bg-[#00D1FF]'
                        : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
