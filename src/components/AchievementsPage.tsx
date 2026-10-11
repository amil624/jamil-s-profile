import React, { useState } from 'react';
import { ArrowLeft, Trophy, Award, Medal, Star, ExternalLink, Calendar, Users } from 'lucide-react';

interface AchievementsPageProps {
  onNavigate: (path: string) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Case Competition', 'National Challenge', 'Diplomacy & MUN', 'University & Sports'];

  const allAchievements = [
    {
      id: 'imagen-venture',
      title: 'ImaGen Ventures Youth Challenge 2024-25',
      category: 'National Challenge',
      badge: 'National Finalist',
      badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
      organizer: 'UNICEF, Generation Unlimited & JAAGO Foundation',
      year: '2024 – 2025',
      location: 'Mymensingh Regional Boot-Camp',
      description:
        'Selected as one of the national finalists among hundreds of nationwide entries. Developed an actionable social business venture model addressing environmental sustainability and youth empowerment.',
      impact: 'Top finalist squad at intensive regional boot-camp; pitched before UNICEF and JAAGO judges.',
    },
    {
      id: 'mun-metropolitan',
      title: 'Metropolitan University National MUN 2025',
      category: 'Diplomacy & MUN',
      badge: 'Special Mention II',
      badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
      organizer: 'Metropolitan University Model United Nations Association',
      year: 'Jan 2025',
      location: 'Sylhet, Bangladesh',
      description:
        'Awarded Special Mention II for representing allocated diplomatic stance with exceptional resolution drafting, persuasive debate, coalition building, and multilateral negotiation.',
      impact: 'Recognized by executive board for multilateral diplomacy and policy framework precision.',
    },
    {
      id: 'ignite-writing',
      title: 'Ignite 3.0 Article Writing Competition',
      category: 'Case Competition',
      badge: 'Champion (1st Place)',
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
      organizer: 'Rajshahi University Business Club (RUBC)',
      year: '2024',
      location: 'University of Rajshahi',
      description:
        'Clinched the championship in the flagship business article writing segment. Authored an incisive analysis of macroeconomic transitions and youth enterprise viability.',
      impact: 'Awarded 1st place among top student contributors across faculties.',
    },
    {
      id: 'casecation-production-award',
      title: 'CaseCation Season 2 Production Excellence Award',
      category: 'Case Competition',
      badge: 'Executive Felicitation',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      organizer: 'Rajshahi University Business Club',
      year: 'Oct 2025',
      location: 'Kazi Nazrul Islam Auditorium, RU',
      description:
        'Formally recognized on stage during the National Grand Finale for curating 450+ assets, designing 20+ university banners, and steering visual production with zero operational delays.',
      impact: 'Received special crest and certificate for distinguished leadership in creative branding.',
    },
    {
      id: 'basketball-tournament',
      title: 'Inter Department Basketball Tournament',
      category: 'University & Sports',
      badge: 'Runners-Up',
      badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
      organizer: 'University of Rajshahi Sports Board',
      year: '2023',
      location: 'Gymnasium Complex, University of Rajshahi',
      description:
        'Starting team member for the Department of Public Administration basketball team, battling through group stages and knockout matches to reach the Grand Final.',
      impact: 'Silver medal; contributed to inter-department camaraderie and athletic performance.',
    },
    {
      id: 'hult-ru-organizer',
      title: 'Hult Prize Global Recognition for Campus Impact',
      category: 'National Challenge',
      badge: 'Outstanding Leadership',
      badgeColor: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300',
      organizer: 'Hult Prize Foundation Global Headquarters',
      year: '2024',
      location: 'University of Rajshahi Chapter',
      description:
        'Awarded Certificate of Appreciation for successfully mobilizing 750+ candidate teams and coordinating regional outreach across Northern Bangladesh.',
      impact: 'Surpassed past campus engagement records by over 40%.',
    },
  ];

  const filteredAchievements =
    selectedCategory === 'All'
      ? allAchievements
      : allAchievements.filter((a) => a.category === selectedCategory);

  return (
    <section
      id="achievements-page"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-[1536px] mx-auto min-h-screen relative z-10 w-full overflow-hidden"
    >
      {/* Background glow matching abdurrahmanrahim.com */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,rgba(37,99,235,0.05)_55%,transparent_70%)] blur-[80px] pointer-events-none -z-10 rounded-full mix-blend-screen overflow-hidden" />

      {/* Back to Portfolio button */}
      <div className="mb-8 sm:mb-12">
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          id="back-to-portfolio-btn"
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D1FF]/40 text-[#CBD5E1] hover:text-[#F8FAFC] transition-all group font-medium text-xs tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] min-h-[40px]"
        >
          <ArrowLeft className="w-4 h-4 text-[#00D1FF] group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Header */}
      <div className="mb-10 sm:mb-14 text-center max-w-4xl mx-auto">
        <span className="text-[#00C4CC] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
          AWARDS &amp; TRACK RECORD
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-4 sm:mb-6">
          Achievements &amp; Recognitions
        </h1>
        <p className="text-[#CBD5E1] text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
          A documented record of case competitions, innovation challenges, debate &amp; diplomatic recognitions, and university leadership honors.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[38px] ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#00D1FF] to-[#3B82F6] text-[#F8FAFC] shadow-[0_0_20px_rgba(0,209,255,0.4)] border border-[#00D1FF]/30 scale-[1.03]'
                : 'bg-[#0A1F4D]/40 text-[#CBD5E1] hover:text-white hover:bg-[#0A1F4D]/70 border border-[#3B82F6]/15'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredAchievements.map((item) => (
          <div
            key={item.id}
            className="p-5 sm:p-7 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#050B18]/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-[#00D1FF]/40 hover:scale-[1.01] transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] font-bold text-[#00C4CC] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-[#F8FAFC] leading-snug mb-2 group-hover:text-[#00D1FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#00D1FF] font-medium mb-3">
                {item.organizer}
              </p>

              <p className="text-xs text-[#CBD5E1] font-light leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 sm:pt-4 mt-auto border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{item.year}</span>
              </span>
              <span className="text-[11px] text-[#34D399] font-medium truncate max-w-[160px]">
                {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
