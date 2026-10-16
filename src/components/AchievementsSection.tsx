import React from 'react';
import { Trophy, ArrowRight, Award, Flame, Users, Layers, Trees } from 'lucide-react';
import { AuthenticCardMedia } from './AuthenticCardMedia';

interface AchievementsSectionProps {
  onNavigate: (path: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onNavigate }) => {
  const statCards = [
    {
      value: '750+',
      label: 'TEAMS REACHED',
      subLabel: 'Campus Mobilization at HULT Prize RU',
      icon: <Flame className="w-6 h-6 text-[#FF9A00]" />,
      glowColor: 'rgba(255, 154, 0, 0.2)',
    },
    {
      value: '200+',
      label: 'MEMBERS LED',
      subLabel: 'Strategic HR & Capacity at RUBC',
      icon: <Users className="w-6 h-6 text-[#00D1FF]" />,
      glowColor: 'rgba(0, 209, 255, 0.2)',
    },
    {
      value: '450+',
      label: 'ASSETS PRODUCED',
      subLabel: 'Nationwide Branding & Stage Banners',
      icon: <Layers className="w-6 h-6 text-[#00C4CC]" />,
      glowColor: 'rgba(0, 196, 204, 0.2)',
    },
    {
      value: '170+',
      label: 'TREES PLANTED',
      subLabel: 'Pathchinhno Climate Action Drive',
      icon: <Trees className="w-6 h-6 text-[#34D399]" />,
      glowColor: 'rgba(52, 211, 153, 0.2)',
    },
  ];

  const podiumCards = [
    {
      id: 'casecation-season-2-recognition',
      title: 'CaseCation Season 2 Grand Finale Stage Recognition',
      badge: 'Production Wing Head Award',
      category: 'NATIONAL BUSINESS CASE COMPETITION',
      organizer: 'Rajshahi University Business Club (RUBC)',
      year: '2025',
      initialImage: '',
      description: 'Formal stage felicitation for leading a 15-member creative squad and producing 450+ branding assets across 20+ universities.',
    },
    {
      id: 'imagen-ventures-youth-challenge',
      title: 'ImaGen Ventures Youth Challenge 2024-25 Finalist',
      badge: 'National Finalist & Boot-Camp',
      category: 'UNICEF & GENERATION UNLIMITED',
      organizer: 'UNICEF, Generation Unlimited & JAAGO Foundation',
      year: '2024–2025',
      initialImage: '',
      description: 'Awarded finalist certificate for architecting a scalable youth-driven social venture model during the Mymensingh regional boot-camp.',
    },
    {
      id: 'ignite-article-writing-championship',
      title: 'Ignite 3.0 Article Writing Championship (1st Place)',
      badge: 'Champion (1st Place)',
      category: 'STRATEGIC WRITING & ANALYSIS',
      organizer: 'Rajshahi University Business Club (RUBC)',
      year: '2024',
      initialImage: '',
      description: 'Clinched first place for authoritative analysis of macroeconomic transitions and youth enterprise viability.',
    },
    {
      id: 'hult-prize-campus-deputy-director',
      title: 'Hult Prize at University of Rajshahi Organizing Team',
      badge: 'Deputy Campus Director',
      category: 'GLOBAL SOCIAL ENTREPRENEURSHIP',
      organizer: 'Hult Prize Global Foundation',
      year: '2025',
      initialImage: '',
      description: 'Mobilized 750+ student teams to submit social ventures and led a 50+ member organizing committee across campus.',
    },
    {
      id: 'rubc-executive-vp-board',
      title: 'Rajshahi University Business Club Executive Board',
      badge: 'Vice President',
      category: 'EXECUTIVE LEADERSHIP & HR GOVERNANCE',
      organizer: 'RUBC Executive Committee 2026-27',
      year: '2026',
      initialImage: '/images/jamil_profile_official.jpg',
      description: 'Directing strategic HR governance, member talent development, and organizational operations for a 200+ member community.',
    },
    {
      id: 'project-pathochinhno-esg',
      title: 'Project Pathochinhno Environmental & Youth Action',
      badge: 'Founder & Lead Coordinator',
      category: 'SUSTAINABILITY & UN SDGS',
      organizer: 'Youth Social Impact Umbrella',
      year: '2025–Present',
      initialImage: '',
      description: 'Planted 170+ native trees and conducted the Mission BluePulse Padma riverbank conservation drive with 40+ youth volunteers.',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 max-w-[1536px] mx-auto relative overflow-hidden w-full mb-10"
    >
      {/* Background radial glows matching abdurrahmanrahim.com */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[45rem] h-[45rem] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_60%)] blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[45rem] h-[45rem] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,transparent_60%)] blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-14 text-center lg:text-left relative">
          <span className="text-[#00C4CC] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3 sm:mb-4">
            Competition &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#00C4CC]">
              Innovation Success
            </span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed mx-auto lg:mx-0 font-medium">
            Recognition earned through national business case competitions, innovation challenges, leadership initiatives, and entrepreneurship programs.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-10 sm:mb-16">
          {statCards.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] border border-[#3B82F6]/15 bg-[#000F2E]/20 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-[#3B82F6]/35 transition-all duration-300 group flex items-center gap-4 sm:gap-5 cursor-default relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
                style={{ background: `radial-gradient(circle at center, ${stat.glowColor} 0%, transparent 70%)` }}
              />
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#3B82F6]/20 bg-[#0A1F4D]/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                {stat.icon}
              </div>
              <div className="text-left relative z-10 min-w-0">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#F8FAFC] tracking-tight mb-0.5">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-wider leading-snug truncate">
                  {stat.label}
                </p>
                <p className="text-[10px] text-[#00C4CC] font-semibold tracking-wide mt-0.5 truncate">
                  {stat.subLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Podium Cards with Authentic Media Card */}
        <div className="mb-10 sm:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {podiumCards.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3 sm:gap-4 group/podium">
                {/* Authentic Photo or Verified Official Credential Certificate */}
                <AuthenticCardMedia
                  id={`achievement_${item.id}`}
                  title={item.title}
                  subtitle={item.organizer}
                  badge={item.badge}
                  year={item.year}
                  initialImage={item.initialImage}
                  category={item.category}
                  aspectRatioClass="h-[240px] sm:h-[280px]"
                />

                {/* Details card below image */}
                <div className="p-4 sm:p-5 rounded-[1.25rem] border border-[#3B82F6]/20 bg-[#040D21]/90 backdrop-blur-md text-left flex flex-col justify-between min-h-[130px] sm:min-h-[140px] h-full shadow-2xl hover:border-[#00D1FF]/30 transition-all duration-300">
                  <div>
                    <span className="text-[10px] font-bold text-[#00C4CC] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC] leading-snug line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] font-light line-clamp-2">
                      {item.organizer}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#CBD5E1]">
                    <span className="text-[#00D1FF] font-semibold">{item.badge}</span>
                    <span className="font-mono text-[#94A3B8]">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Achievements Button */}
        <div className="text-center">
          <a
            href="/achievements"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/achievements');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            id="achievements-view-all-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-[#F8FAFC] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all min-h-[48px]"
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
