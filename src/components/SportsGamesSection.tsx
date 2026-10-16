import React from 'react';
import {
  Trophy,
  Award,
  Crown,
  Shield,
  Star,
  Flame,
  Medal,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { sportsAndGamesData } from '../data/portfolioData';

// Custom SVG Icons for specific sports
const CricketIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Cricket Bat & Ball */}
    <path d="M14 4l6 6-9 9a2 2 0 0 1-2.8 0L6 16.8a2 2 0 0 1 0-2.8L14 4z" />
    <path d="M3 21l3-3" />
    <circle cx="18" cy="18" r="2.5" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const FootballIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Football / Soccer Ball */}
    <circle cx="12" cy="12" r="9" />
    <polygon points="12 8 8 11 9 16 15 16 16 11 12 8" />
    <path d="M12 3v5" />
    <path d="M3.5 8.5l4.5 2.5" />
    <path d="M5.5 18l3.5-2" />
    <path d="M18.5 18l-3.5-2" />
    <path d="M20.5 8.5l-4.5 2.5" />
  </svg>
);

const BasketballIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Basketball with seam lines */}
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    <path d="M5.6 5.6c4.5 4.5 4.5 11.8 0 16.3" />
    <path d="M18.4 5.6c-4.5 4.5-4.5 11.8 0 16.3" />
  </svg>
);

export const SportsGamesSection: React.FC = () => {
  const statsOverview = [
    {
      value: '5x',
      label: 'Champion Titles',
      sublabel: 'Football (3x) & Cricket (2x)',
      icon: <Trophy className="w-4 h-4 text-[#34D399]" />,
      color: 'text-[#34D399]',
      glow: 'shadow-[0_0_20px_rgba(52,211,153,0.2)]',
    },
    {
      value: '4x',
      label: 'Team Captaincy',
      sublabel: 'Football & Cricket Squads',
      icon: <Crown className="w-4 h-4 text-[#F59E0B]" />,
      color: 'text-[#F59E0B]',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]',
    },
    {
      value: '2x',
      label: 'Man of the Tournament',
      sublabel: 'Consecutive Cricket MVP',
      icon: <Star className="w-4 h-4 text-[#00D1FF]" />,
      color: 'text-[#00D1FF]',
      glow: 'shadow-[0_0_20px_rgba(0,209,255,0.2)]',
    },
    {
      value: '1x',
      label: 'Court Runner-Up',
      sublabel: 'Basketball Defender 2025',
      icon: <Medal className="w-4 h-4 text-[#A78BFA]" />,
      color: 'text-[#A78BFA]',
      glow: 'shadow-[0_0_20px_rgba(167,139,250,0.2)]',
    },
  ];

  return (
    <section
      id="sports"
      className="py-12 lg:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto relative z-10 w-full mb-10 overflow-hidden"
    >
      {/* Background ambient radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-gradient-to-br from-[#34D399]/10 via-[#00D1FF]/5 to-transparent rounded-full blur-[110px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#3B82F6]/10 via-[#F59E0B]/5 to-transparent rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[15rem] bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.2)_0%,rgba(0,209,255,0.1)_40%,transparent_70%)] blur-[40px] pointer-events-none -z-10 rounded-full mix-blend-screen hidden lg:block" />

          <span className="text-[#34D399] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            ATHLETIC LEADERSHIP &amp; COMPETITIVE SPIRIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3">
            Sports &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#00D1FF] to-[#3B82F6]">
              Games
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
            Leadership on the field translates directly to organizational execution: competitive drive, high-pressure teamwork, and leading from the front to bring home championship trophies.
          </p>
        </div>

        {/* 4-Column Athletic Highlights Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {statsOverview.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-[#06132D]/70 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#00D1FF]/40 transition-all ${item.glow}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Accolade 0{idx + 1}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10">
                  {item.icon}
                </div>
              </div>
              <div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-display font-black ${item.color} tracking-tight leading-none mb-1`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-light mt-0.5 truncate">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Detailed Tournament Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* CARD 1: Intra Department Cricket Tournament */}
          <div className="p-6 sm:p-7 rounded-[1.75rem] sm:rounded-[2rem] border border-[#34D399]/30 bg-gradient-to-b from-[#061A2E]/90 to-[#030B14]/90 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#34D399]/60 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] transition-all group relative overflow-hidden">
            {/* Ambient Watermark */}
            <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <CricketIcon className="w-48 h-48 text-[#34D399]" />
            </div>

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>CHAMPION 2X</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                  DUAL MVP
                </span>
              </div>

              {/* Tournament Title & Sport Tag */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#34D399] uppercase tracking-wider mb-1 font-mono">
                <CricketIcon className="w-4 h-4 text-[#34D399]" />
                <span>Cricket Tournament</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight mb-2">
                Intra Department Cricket Tournament
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-5">
                Department of Public Administration Cricket Squad
              </p>

              {/* Accolades Pills */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 text-[#34D399]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Champion 2 Times
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Editions: 2023, 2026
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                    <Crown className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Led as Team Captain
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Captained the squad in both tournaments
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-[#00D1FF]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Man of the Tournament (MVP)
                    </div>
                    <div className="text-[11px] text-[#00D1FF] font-semibold">
                      Awarded MVP in both tournament editions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Takeaway */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Primary Role:</span>
              <span className="font-bold text-[#34D399]">Captain &amp; All-Rounder</span>
            </div>
          </div>

          {/* CARD 2: Intra University Football Tournament */}
          <div className="p-6 sm:p-7 rounded-[1.75rem] sm:rounded-[2rem] border border-[#00D1FF]/30 bg-gradient-to-b from-[#061935]/90 to-[#030B14]/90 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] transition-all group relative overflow-hidden">
            {/* Ambient Watermark */}
            <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <FootballIcon className="w-48 h-48 text-[#00D1FF]" />
            </div>

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D1FF]/15 border border-[#00D1FF]/40 text-[#00D1FF] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-[#00D1FF]" />
                  <span>CHAMPION 3X</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-full border border-[#38BDF8]/30">
                  3-PEAT DYNASTY
                </span>
              </div>

              {/* Tournament Title & Sport Tag */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D1FF] uppercase tracking-wider mb-1 font-mono">
                <FootballIcon className="w-4 h-4 text-[#00D1FF]" />
                <span>Football Championship</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight mb-2">
                Intra University Football Tournament
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-5">
                Department of Public Administration Football Team
              </p>

              {/* Accolades Pills */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 text-[#00D1FF]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Champion 3 Times (3-Peat)
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Seasons: 2023, 2024, 2025
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center shrink-0">
                    <Crown className="w-4 h-4 text-[#34D399]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Led Team 2 Times as Captain
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Captained 2 of 3 championship victories
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#818CF8]/15 border border-[#818CF8]/30 flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4 text-[#818CF8]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      University-Wide Supremacy
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Unbeaten streak across inter-departmental knockouts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Takeaway */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Primary Role:</span>
              <span className="font-bold text-[#00D1FF]">Captain &amp; Playmaker</span>
            </div>
          </div>

          {/* CARD 3: Intra University Basket Ball Tournament 2024-25 */}
          <div className="p-6 sm:p-7 rounded-[1.75rem] sm:rounded-[2rem] border border-[#F59E0B]/30 bg-gradient-to-b from-[#251806]/60 to-[#030B14]/90 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#F59E0B]/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all group relative overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Ambient Watermark */}
            <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <BasketballIcon className="w-48 h-48 text-[#F59E0B]" />
            </div>

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <Medal className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>RUNNER-UP (2025)</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                  DEFENDER
                </span>
              </div>

              {/* Tournament Title & Sport Tag */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1 font-mono">
                <BasketballIcon className="w-4 h-4 text-[#F59E0B]" />
                <span>Basketball Tournament</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight mb-2">
                Intra University Basket Ball Tournament 2024-25
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-5">
                Department of Public Administration Basket Ball Team
              </p>

              {/* Accolades Pills */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                    <Medal className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Runner-up (2025)
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Season 2024-25 Grand Finale
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Role: Defender
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Played pivotal role anchoring court defense
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/15 border border-[#A78BFA]/30 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-[#A78BFA]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Defensive Rebounds &amp; Stops
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Guarding perimeter shooters and setting rapid transitions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Takeaway */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Primary Role:</span>
              <span className="font-bold text-[#F59E0B]">Defender &amp; Rebounder</span>
            </div>
          </div>

        </div>

        {/* Motivational Athletic Leadership Quote */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#06142E]/70 via-[#0A1F4D]/50 to-[#06142E]/70 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-[#34D399]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-white font-semibold">
                “Captaincy on the court and field instills the same grit needed to run complex student operations: stay calm, rally your teammates, and execute under pressure.”
              </p>
              <span className="text-[11px] text-[#00D1FF] font-mono mt-0.5 block">
                — Md. Jamil Hosen Khandakar
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[11px] font-bold text-[#34D399] shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Sportsmanship &amp; Grit</span>
          </div>
        </div>

      </div>
    </section>
  );
};
