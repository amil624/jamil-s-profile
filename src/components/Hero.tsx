import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  TrendingUp,
  Palette,
  Users,
  HeartHandshake,
  Target,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { getStoredImage } from '../lib/imageStorage';

interface HeroProps {
  onOpenCv: () => void;
  onNavigateToProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onNavigateToProject }) => {
  const [profileImg, setProfileImg] = useState<string>(() =>
    getStoredImage('hero_profile', '/images/jamil_profile_official.jpg')
  );

  useEffect(() => {
    const handleUpdate = (e: CustomEvent) => {
      if (e.detail?.key === 'hero_profile') {
        setProfileImg(e.detail.dataUrl || '/images/jamil_profile_official.jpg');
      }
    };
    window.addEventListener('portfolio_image_updated' as any, handleUpdate);
    return () => window.removeEventListener('portfolio_image_updated' as any, handleUpdate);
  }, []);

  const focusSkills = [
    { label: 'Strategic Thinking', icon: <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D1FF]" /> },
    { label: 'Creative Execution', icon: <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38BDF8]" /> },
    { label: 'Team Leadership', icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#34D399]" /> },
    { label: 'Social Impact', icon: <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78BFA]" /> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-[110px] lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1536px] xl:max-w-[1600px] mx-auto flex flex-col justify-center overflow-hidden"
    >
      {/* High-tech ambient glowing radial lights matching reference design */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[32rem] sm:w-[48rem] h-[32rem] sm:h-[48rem] bg-[radial-gradient(circle,rgba(0,209,255,0.12)_0%,transparent_65%)] blur-[95px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] sm:w-[42rem] h-[30rem] sm:h-[42rem] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_65%)] blur-[95px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-[radial-gradient(circle,rgba(52,211,153,0.06)_0%,transparent_70%)] blur-[90px]" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
        
        {/* Left Column: Top Tag, Display Headline, Tagline, Skill Pills, CTAs */}
        <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          {/* Subheader pill matching reference desktop & mobile */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#00D1FF]/30 bg-[#0A1F4D]/60 text-[10px] sm:text-xs font-bold tracking-widest text-[#00D1FF] uppercase mb-4 sm:mb-5 shadow-[0_0_15px_rgba(0,209,255,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_8px_rgba(0,209,255,0.9)] animate-pulse" />
            <span>Public Administration Senior &bull; RUBC VP</span>
          </div>

          {/* Large Display Title - Full Name restored at top */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-[clamp(2.8rem,3.8vw,4.2rem)] xl:text-[clamp(4.2rem,4.6vw,5.5rem)] 2xl:text-[6rem] font-display font-black leading-[0.98] sm:leading-[1.02] tracking-tight text-[#F8FAFC] mb-3 sm:mb-4">
            <span className="block tracking-tight text-white">Md. Jamil Hosen</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-[#00E5FF] to-[#34D399] tracking-tight drop-shadow-[0_0_35px_rgba(0,209,255,0.3)]">
              Khandakar
            </span>
          </h1>

          {/* Executive Subhead */}
          <div className="text-xs sm:text-sm font-semibold text-[#00D1FF] mb-3 sm:mb-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="text-[#38BDF8]">Vice President, RUBC</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-[#34D399]">Deputy Campus Director, Hult Prize RU</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-300">Public Administration, RU</span>
          </div>

          {/* Subtitle / Intro */}
          <p className="text-[#CBD5E1] text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6 sm:mb-7 max-w-xl">
            {profileData.tagline}
          </p>

          {/* 4 Competency Pills with Glow & Custom Colors */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5 mb-7 sm:mb-8">
            {focusSkills.map((skill) => (
              <div
                key={skill.label}
                className="px-3.5 sm:px-4 py-2 rounded-xl border border-[#3B82F6]/25 bg-[#06132D]/70 text-[#F8FAFC] text-xs font-bold flex items-center gap-2 hover:border-[#00D1FF]/50 hover:bg-[#0A1F4D] transition-all shadow-md cursor-default select-none backdrop-blur-sm"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons: "View My Work" & "Download Resume" */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                if (onNavigateToProject) {
                  onNavigateToProject('portfolio');
                } else {
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="hero-view-work-btn"
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#00D1FF] to-[#3B82F6] text-[#030B14] font-black rounded-xl text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(0,209,255,0.6)] transition-all flex items-center justify-center gap-2.5 group hover:scale-[1.02] active:scale-[0.98] border border-[#00D1FF]/40 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCv}
              id="hero-download-resume-btn"
              className="px-7 sm:px-8 py-3.5 sm:py-4 border border-[#3B82F6]/30 bg-white/[0.04] text-[#F8FAFC] rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-white/[0.09] hover:border-[#00D1FF]/50 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00D1FF]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Profile Centerpiece matching Desktop & Mobile screenshots */}
        <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5 flex flex-col items-center justify-center relative z-20 mt-4 lg:mt-0">
          
          <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
            
            {/* Outer Glowing Concentric Rings matching abdurrahmanrahim.com */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xs:w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[460px] h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[420px] xl:h-[460px] rounded-full border border-[#00D1FF]/25 bg-gradient-to-tr from-[#00D1FF]/10 via-[#3B82F6]/5 to-transparent shadow-[0_0_80px_rgba(0,209,255,0.2),inset_0_0_40px_rgba(0,209,255,0.15)] -z-10 animate-pulse pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] xs:w-[270px] sm:w-[320px] lg:w-[360px] xl:w-[400px] h-[240px] xs:h-[270px] sm:h-[320px] lg:h-[360px] xl:h-[400px] rounded-full border border-dashed border-[#38BDF8]/30 -z-10 pointer-events-none" />

            {/* Floating Glass Badge 1: Top-Left (Strategic Planner) */}
            <div className="absolute -top-3 -left-2 xs:-left-3 sm:-left-6 lg:-left-8 z-30 max-w-[160px] xs:max-w-[190px] sm:max-w-[210px] p-2 sm:p-2.5 rounded-2xl bg-[#06132D]/90 border border-[#00D1FF]/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-2.5 transition-transform hover:scale-105 select-none pointer-events-auto">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 text-[#00D1FF]" />
              </div>
              <div className="overflow-hidden text-left">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs font-black text-white truncate">
                    Strategic Planner
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#00D1FF] -rotate-45 shrink-0" />
                </div>
                <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium truncate">
                  RUBC Executive 2026-27
                </p>
              </div>
            </div>

            {/* Floating Glass Badge 2: Bottom-Right (Digitalyst & Operations) */}
            <div className="absolute bottom-6 -right-2 xs:-right-3 sm:-right-6 lg:-right-8 z-30 max-w-[170px] xs:max-w-[200px] sm:max-w-[220px] p-2 sm:p-2.5 rounded-2xl bg-[#06132D]/90 border border-[#34D399]/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-2.5 transition-transform hover:scale-105 select-none pointer-events-auto">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center shrink-0">
                <Globe2 className="w-4 h-4 text-[#34D399]" />
              </div>
              <div className="overflow-hidden text-left">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs font-black text-white truncate">
                    Digitalyst
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#34D399] -rotate-45 shrink-0" />
                </div>
                <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium truncate">
                  Deputy Campus Director
                </p>
              </div>
            </div>

            {/* The Main Authentic Profile Image Container */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="relative group overflow-hidden rounded-3xl border border-[#00D1FF]/25 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#0A1F4D]/40 to-[#030B14]">
                
                {/* Real Photo */}
                <img
                  src={profileImg}
                  alt="Md. Jamil Hosen Khandakar Official Portrait"
                  className="w-full object-cover object-top max-h-[360px] xs:max-h-[400px] sm:max-h-[460px] lg:max-h-[520px] xl:max-h-[580px] transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://ik.imagekit.io/Jamils/Jamil%20Hosen%20Khandakar.%20Jpg%20(1).heif?tr=f-auto';
                    }
                  }}
                />

                {/* Seamless gradient fade at the bottom into the deep background */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#030B14] via-[#030B14]/80 to-transparent pointer-events-none" />
              </div>

              {/* Status Indicator Pill at Portrait Base */}
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06132D]/90 border border-[#00D1FF]/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Md. Jamil Hosen Khandakar
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
