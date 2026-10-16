import React from 'react';
import { Briefcase, Users, Calendar, ArrowRight, Award, Layers, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (path: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigate }) => {
  // Section 1: Professional Experience (Direct from user image.png)
  const professionalExperience = [
    {
      title: "English Language Trainer - Smart Student's Finance (SSF) - CEC",
      organization: 'BRAC Microfinance (Dabi)',
      period: 'July 2026 – Present',
      points: [
        'Teach 65+ primary and high school students practical English communication skills.',
        "Conduct interactive lessons to improve students' English proficiency and confidence.",
      ],
    },
    {
      title: 'Research Enumerator | Government-Funded Research Projects',
      organization: 'Department of Public Administration, University of Rajshahi',
      period: '2025 – 2026',
      points: [
        'Collected primary data from 250+ respondents and 10 FGDs through field interviews and surveys.',
        'Conducted fieldwork across 5-6 upazilas for 5 research projects.',
      ],
    },
  ];

  // Section 2: Leadership and Organizing Experience (Renamed from former professional list, 4th item removed)
  const leadershipAndOrganizingExperience = [
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
  ];

  // Section 3: Leadership & Affiliations
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
        <div className="mb-8 sm:mb-12 text-center lg:text-left relative">
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

        {/* 3-Section Structured Grid: 1. Professional Experience, 2. Leadership and Organizing Experience, 3. Leadership & Affiliations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 mb-8 sm:mb-10 items-stretch">
          
          {/* Column 1: Professional Experience (Newly Added from image.png) */}
          <div className="p-5 sm:p-7 md:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#00D1FF]/25 bg-[#06142E]/70 backdrop-blur-xl flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-[#00D1FF]/45 transition-all group">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border border-[#00D1FF]/30 bg-[#00D1FF]/10 flex items-center justify-center group-hover:bg-[#00D1FF]/20 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,209,255,0.2)]">
                  <Briefcase className="w-5 h-5 text-[#00D1FF]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#00D1FF] uppercase block">
                    Section 01
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#F8FAFC] font-display leading-tight">
                    Professional Experience
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {professionalExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-[#061A40]/60 hover:border-[#00D1FF]/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-[#F8FAFC] leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#00D1FF] mb-2.5">
                      <span>{item.organization}</span>
                      <span className="font-mono text-[11px] text-slate-400 shrink-0 ml-2">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#CBD5E1] font-light">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              <span>Teaching &amp; Fieldwork Research</span>
            </div>
          </div>

          {/* Column 2: Leadership and Organizing Experience (Renamed with 4th item removed) */}
          <div className="p-5 sm:p-7 md:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/25 bg-[#06142E]/70 backdrop-blur-xl flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-[#3B82F6]/45 transition-all group">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Layers className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase block">
                    Section 02
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#F8FAFC] font-display leading-tight">
                    Leadership and Organizing Experience
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {leadershipAndOrganizingExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-[#061A40]/60 hover:border-[#3B82F6]/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#F8FAFC] leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#38BDF8] mb-1.5">
                      <span>{item.organization}</span>
                      <span className="font-mono text-[11px] text-slate-400 shrink-0 ml-2">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>National Competitions &amp; Operations</span>
            </div>
          </div>

          {/* Column 3: Leadership & Affiliations */}
          <div className="p-5 sm:p-7 md:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#34D399]/25 bg-[#06142E]/70 backdrop-blur-xl flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-[#34D399]/45 transition-all group">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border border-[#34D399]/30 bg-[#34D399]/10 flex items-center justify-center group-hover:bg-[#34D399]/20 transition-colors shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  <Users className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#34D399] uppercase block">
                    Section 03
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#F8FAFC] font-display leading-tight">
                    Leadership &amp; Affiliations
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {leadershipAffiliations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-[#061A40]/60 hover:border-[#34D399]/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#F8FAFC] leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#34D399] mb-1.5">
                      <span>{item.organization}</span>
                      <span className="font-mono text-[11px] text-slate-400 shrink-0 ml-2">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>Campus Governance &amp; Social Initiatives</span>
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
            <span>View Full Experience Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
