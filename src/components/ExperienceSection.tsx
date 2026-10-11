import React from 'react';
import { Briefcase, Users, Calendar, ArrowRight, Building, Award } from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (path: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigate }) => {
  const professionalExperience = [
    {
      title: 'Branding and Production Wing Head',
      organization: 'CaseCation Season 2',
      period: 'Aug 2025 – Oct 2025',
      type: 'National Case Competition',
      summary: 'Led 15-member team; produced 450+ assets & 20+ nationwide banners.',
    },
    {
      title: 'Deputy Director of Branding & Promotion',
      organization: 'UNRAVEL 5X',
      period: 'Aug 2025 – Sep 2025',
      type: 'Business Case Competition',
      summary: 'Directed promotional campaigns, social media assets, and audience engagement.',
    },
    {
      title: 'Chief of Administration',
      organization: 'HULT PRIZE at University of Rajshahi 2024-25',
      period: 'Nov 2024 – Feb 2025',
      type: 'Global Innovation Challenge',
      summary: 'Supervised administrative affairs, official communications, and volunteer coordination.',
    },
    {
      title: 'Deputy Director of Branding & Promotion',
      organization: 'Rajshahi University MUN 2025 & North Bengal MUN 2025',
      period: 'Jan 2025 – Jun 2025',
      type: 'Diplomatic Conference',
      summary: 'Formulated visual strategy and produced promotional merchandise and media kits.',
    },
  ];

  const leadershipAffiliations = [
    {
      title: 'Vice President (Resource Management & Planning)',
      organization: 'Rajshahi University Business Club (RUBC)',
      period: 'Apr 2026 – Present',
      summary: 'Directing HR and strategic operations for 200+ members and leadership pipelines.',
    },
    {
      title: 'Former Deputy Campus Director',
      organization: 'HULT PRIZE at University of Rajshahi',
      period: '2023 – 2024',
      summary: 'Spearheaded campus-wide mobilization across 750+ teams and managed cross-functional squads.',
    },
    {
      title: 'Founder & Lead Coordinator',
      organization: 'Project Pathchinhno (পথ চিহ্ন)',
      period: '2023 – Present',
      summary: 'Spearheading The Green FootPrint (170+ trees), Mission BluePulse, and animal shelter programs.',
    },
    {
      title: 'Executive Committee Member & Lead',
      organization: 'Public Administration Student Association',
      period: '2023 – Present',
      summary: 'Coordinating student welfare, academic seminars, and inter-batch cultural initiatives.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 lg:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto relative z-10 w-full mb-10 overflow-hidden"
    >
      {/* Background ambient radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-[#06B6D4]/10 to-[#2563EB]/5 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#2563EB]/10 to-[#34D399]/5 rounded-full blur-[100px] opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[15rem] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25)_0%,rgba(37,99,235,0.15)_40%,transparent_70%)] blur-[40px] pointer-events-none -z-10 rounded-full mix-blend-screen hidden lg:block" />
          
          <span className="text-[#34D399] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            EXPERIENCE &amp; LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3 sm:mb-4">
            Experience &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Leadership
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
            A journey of growth through meaningful roles, real responsibilities, and leadership that drives impact.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-10">
          
          {/* Left Column: Professional & Strategic Experience */}
          <div className="p-5 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/15 bg-[#0A1F4D]/35 backdrop-blur-md flex flex-col justify-between h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-[#06B6D4]/30 transition-colors group">
            <div>
              <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 flex items-center justify-center group-hover:bg-[#06B6D4]/20 transition-colors shrink-0">
                  <Briefcase className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-display">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {professionalExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-[#061A40]/40 hover:border-[#3B82F6]/30 transition-all duration-300"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#00D1FF] mb-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 mt-1 self-start sm:self-auto font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Affiliations */}
          <div className="p-5 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/15 bg-[#0A1F4D]/35 backdrop-blur-md flex flex-col justify-between h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-[#2563EB]/30 transition-colors group">
            <div>
              <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors shrink-0">
                  <Users className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-display">
                  Leadership &amp; Affiliations
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {leadershipAffiliations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-[#061A40]/40 hover:border-[#3B82F6]/30 transition-all duration-300"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#00D1FF] mb-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 mt-1 self-start sm:self-auto font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* View Full Experience Button leading to /experience */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="/experience"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/experience');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            id="experience-view-full-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-[#F8FAFC] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all min-h-[48px]"
          >
            <span>View Full Experience</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
