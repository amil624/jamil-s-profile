import React from 'react';
import { ArrowLeft, Briefcase, Calendar, Users, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface FullExperiencePageProps {
  onNavigate: (path: string) => void;
}

export const FullExperiencePage: React.FC<FullExperiencePageProps> = ({ onNavigate }) => {
  const fullTimeline = [
    {
      role: "English Language Trainer - Smart Student's Finance (SSF) - CEC",
      organization: 'BRAC Microfinance (Dabi)',
      type: 'Professional Experience',
      period: 'July 2026 – Present',
      location: 'Rajshahi, Bangladesh',
      highlights: [
        'Teach 65+ primary and high school students practical English communication skills.',
        "Conduct interactive lessons to improve students' English proficiency and confidence.",
      ],
    },
    {
      role: 'Research Enumerator | Government-Funded Research Projects',
      organization: 'Department of Public Administration, University of Rajshahi',
      type: 'Professional Experience',
      period: '2025 – 2026',
      location: 'University of Rajshahi',
      highlights: [
        'Collected primary data from 250+ respondents and 10 FGDs through field interviews and surveys.',
        'Conducted fieldwork across 5-6 upazilas for 5 research projects.',
      ],
    },
    {
      role: 'Vice President (Resource Management & Planning)',
      organization: 'Rajshahi University Business Club (RUBC)',
      type: 'Executive Leadership',
      period: 'Apr 2026 – Present',
      location: 'University of Rajshahi',
      highlights: [
        'Oversee HR management and career development frameworks for 200+ club members across departments.',
        'Lead strategic coordination between Executive Wings: Research & Development, Event Operations, Media & Branding, and Corporate Relations.',
        'Formulate leadership evaluation systems and executive succession pipelines for the 2026–27 academic tenure.',
      ],
    },
    {
      role: 'Branding and Production Wing Head',
      organization: 'CaseCation Season 2 (National Business Case Competition)',
      type: 'Event Directorship',
      period: 'Aug 2025 – Oct 2025',
      location: 'Nationwide / University of Rajshahi',
      highlights: [
        'Directed a 15-member creative production squad under tight turnaround schedules.',
        'Engineered over 450+ branding assets, including digital promos, judge scorecards, print programs, and 20+ nationwide campus banners.',
        'Coordinated with stage technical teams to deliver lighting, backdrops, and video intros during the National Grand Finale.',
        'Awarded official stage recognition for stellar production output.',
      ],
    },
    {
      role: 'Deputy Director of Branding & Promotion',
      organization: 'UNRAVEL 5X (National Business Competition)',
      type: 'Event Directorship',
      period: 'Aug 2025 – Sep 2025',
      location: 'University of Rajshahi',
      highlights: [
        'Co-led digital marketing and creative asset scheduling across Facebook, LinkedIn, and university media partners.',
        'Drafted engaging visual and textual copy driving team registrations from across 25+ colleges and universities.',
      ],
    },
    {
      role: 'Chief of Administration',
      organization: 'HULT PRIZE at University of Rajshahi 2024-25',
      type: 'Global Innovation Challenge',
      period: 'Nov 2024 – Feb 2025',
      location: 'University of Rajshahi',
      highlights: [
        'Supervised administrative records, protocol compliance, official correspondence, and judge coordination.',
        'Managed logistical pipelines for campus semi-finals and final presentation sessions.',
      ],
    },
    {
      role: 'Former Deputy Campus Director',
      organization: 'HULT PRIZE at University of Rajshahi',
      type: 'Executive Leadership',
      period: '2023 – 2024',
      location: 'University of Rajshahi',
      highlights: [
        'Directed university-wide promotion and outreach across 12 faculties and 59 departments.',
        'Achieved a milestone 750+ student team registrations for the On-Campus program.',
        'Coordinated with global Hult Prize representatives to adhere to worldwide competition regulations.',
      ],
    },
    {
      role: 'Deputy Director of Branding & Promotion',
      organization: 'Rajshahi University MUN 2025 & North Bengal MUN 2025',
      type: 'Diplomatic Conference Directorship',
      period: 'Jan 2025 – Jun 2025',
      location: 'Rajshahi, Bangladesh',
      highlights: [
        'Crafted delegates’ handbook, committee dossiers, visual identification cards, and promotional media campaigns.',
        'Managed social presence reaching over 50,000+ diplomatic enthusiasts nationwide.',
      ],
    },
    {
      role: 'Founder & Lead Coordinator',
      organization: 'Project Pathchinhno (পথ চিহ্ন)',
      type: 'Social & Environmental Venture',
      period: '2023 – Present',
      location: 'Rajshahi & Rangpur Divisions',
      highlights: [
        'Designed The Green FootPrint program, successfully planting 170+ native oxygen-rich trees across campus.',
        'Launched Mission BluePulse to clean hazardous waste and raise microplastics awareness along the Padma riverbank.',
        'Engineered the Winter Heaven project providing emergency care, warm bedding, and feeding for community street animals.',
      ],
    },
  ];

  return (
    <section
      id="full-experience-page"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-[1536px] mx-auto min-h-screen relative z-10 w-full overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,rgba(37,99,235,0.05)_55%,transparent_70%)] blur-[80px] pointer-events-none -z-10 rounded-full mix-blend-screen overflow-hidden" />

      {/* Back to Portfolio button */}
      <div className="mb-8 sm:mb-12">
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          id="exp-back-to-portfolio-btn"
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
          CHRONOLOGY &amp; CAREER PATH
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-4 sm:mb-6">
          Full Experience &amp; Track Record
        </h1>
        <p className="text-[#CBD5E1] text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
          A comprehensive breakdown of student executive governance, branding directorships, national business competitions, and social ventures.
        </p>
      </div>

      {/* Timeline of Experience */}
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {fullTimeline.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#050B18]/90 backdrop-blur-xl shadow-2xl hover:border-[#00D1FF]/40 transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-bold text-[#00C4CC] uppercase tracking-wider block mb-1">
                  {item.type}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold font-display text-[#F8FAFC] group-hover:text-[#00D1FF] transition-colors">
                  {item.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] shrink-0 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{item.period}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#00D1FF] mb-3 sm:mb-4">
              {item.organization} &bull; <span className="text-slate-400 font-normal">{item.location}</span>
            </p>

            <ul className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-white/10">
              {item.highlights.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] shrink-0 mt-1.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
