import React from 'react';
import { User, GraduationCap, Quote, Award, BookOpen, UserCheck, Mail } from 'lucide-react';
import { educationList, academicReferences } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 lg:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto relative z-10 w-full mb-10 overflow-hidden"
    >
      {/* Background ambient radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-[#06B6D4]/10 to-[#2563EB]/5 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#2563EB]/10 to-[#06B6D4]/5 rounded-full blur-[100px] opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 relative text-center lg:text-left">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[15rem] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25)_0%,rgba(37,99,235,0.15)_40%,transparent_70%)] blur-[40px] pointer-events-none -z-10 rounded-full mix-blend-screen hidden lg:block" />
          
          <span className="text-[#34D399] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            ABOUT & EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3">
            The Person Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              The Projects
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
            Public administration senior focused on student leadership, branding, operations, and social impact.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-0">
          
          {/* Card 1: About Me */}
          <div className="p-6 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#0A1F4D]/40 backdrop-blur-md flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#06B6D4]/30 transition-all group">
            
            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#06B6D4]/50 shadow-[0_0_20px_rgba(6,182,212,0.35)] shrink-0 bg-[#0A1F4D]">
                <img
                  src="/images/jamil_profile_official.jpg"
                  alt="Md. Jamil Hosen Khandakar Profile"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://ik.imagekit.io/Jamils/Jamil%20Hosen%20Khandakar.%20Jpg%20(1).heif?tr=f-auto,w-150,h-150';
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] font-display">
                  About Me
                </h3>
                <span className="text-xs text-[#00D1FF] font-semibold">
                  Md. Jamil Hosen Khandakar
                </span>
              </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-[#CBD5E1] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl flex-grow font-light">
              <p>
                I am a senior student of Public Administration at the University of Rajshahi (CGPA: 3.65 / 4.00), passionate about turning conceptual ideas into measurable organizational impact.
              </p>
              <p>
                Through my responsibilities as Vice President at the Rajshahi University Business Club (RUBC), former Deputy Campus Director for HULT Prize at RU, and founder of Project Pathchinhno, I have led cross-functional teams of up to 200+ members, produced over 450+ branding and campaign assets, and driven community initiatives.
              </p>
              <p>
                My background in administrative governance combined with hands-on event logistics, design production, and youth leadership allows me to bridge strategic vision with meticulous operational execution.
              </p>
            </div>

            {/* Bottom Quote Card matching abdurrahmanrahim.com */}
            <div className="p-5 sm:p-6 md:p-8 mt-auto rounded-2xl bg-gradient-to-tl from-[#06B6D4]/5 to-transparent border border-[#06B6D4]/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.05),0_0_20px_rgba(6,182,212,0.1)] flex gap-4 sm:gap-5 items-start relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 via-[#06B6D4]/10 to-transparent opacity-50 blur-xl pointer-events-none" />
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#06B6D4] opacity-90 shrink-0 fill-[#06B6D4]/20 relative z-10 pt-1" />
              <p className="text-[#F8FAFC] text-xs sm:text-sm md:text-base font-medium leading-relaxed italic relative z-10">
                “I enjoy working in team settings, figuring things out along the way, and taking ownership of the work I’m responsible for.”
              </p>
            </div>

          </div>

          {/* Card 2: Education & Academic References */}
          <div className="p-6 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#0A1F4D]/40 backdrop-blur-md flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#06B6D4]/30 transition-all group">
            
            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 flex items-center justify-center group-hover:bg-[#06B6D4]/20 transition-colors shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#06B6D4]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] font-display">
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l border-[#06B6D4]/20 flex-grow mt-2 ml-2 sm:ml-4 space-y-8 sm:space-y-10">
              
              {/* BBA / BPA */}
              <div className="relative">
                <div className="absolute top-1.5 -left-[33px] sm:-left-[41px] w-4 h-4 rounded-full bg-[#050B18] border-2 border-[#06B6D4] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-1 leading-tight">
                  Bachelor of Public Administration
                </h4>
                <p className="text-[#00D1FF] font-medium text-xs sm:text-sm mb-1">
                  University of Rajshahi &bull; Department of Public Administration
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#94A3B8] mb-2">
                  <span>Nov 2022 – Present (4th Year)</span>
                  <span>&bull;</span>
                  <span className="text-[#34D399] font-bold">CGPA: 3.65 / 4.00</span>
                </div>
                <p className="text-[#CBD5E1] text-xs leading-relaxed font-light">
                  Specialized coursework in Administrative Governance, Public Policy, Organizational Behavior, Human Resource Management, and Strategic Leadership.
                </p>
              </div>

              {/* HSC */}
              <div className="relative">
                <div className="absolute top-1.5 -left-[33px] sm:-left-[41px] w-4 h-4 rounded-full bg-[#050B18] border-2 border-[#3B82F6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-1 leading-tight">
                  Higher Secondary Certificate (HSC)
                </h4>
                <p className="text-[#00D1FF] font-medium text-xs sm:text-sm mb-1">
                  Pirgachha Govt. College, Rangpur &bull; Dinajpur Board
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#94A3B8]">
                  <span>Passed: 2021 &bull; Humanities</span>
                  <span>&bull;</span>
                  <span className="text-[#34D399] font-bold">GPA: 5.00 / 5.00</span>
                </div>
              </div>

              {/* SSC */}
              <div className="relative">
                <div className="absolute top-1.5 -left-[33px] sm:-left-[41px] w-4 h-4 rounded-full bg-[#050B18] border-2 border-[#3B82F6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC] mb-1 leading-tight">
                  Secondary School Certificate (SSC)
                </h4>
                <p className="text-[#00D1FF] font-medium text-xs sm:text-sm mb-1">
                  Jnankur High School, Pirgachha, Rangpur &bull; Dinajpur Board
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#94A3B8]">
                  <span>Science / Humanities</span>
                  <span>&bull;</span>
                  <span className="text-[#34D399] font-bold">GPA: 4.78 / 5.00</span>
                </div>
              </div>

            </div>

            {/* Academic Mentors Footer Bar with Emails */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#3B82F6]/15">
              <div className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Academic References</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#CBD5E1]">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-semibold text-white">Dr. Mst. Marzina Begum</span>
                  <p className="text-[11px] text-[#94A3B8]">Chairman &amp; Professor, Dept. of Public Administration</p>
                  <a
                    href="mailto:marzinabegum80@gmail.com"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#00D1FF] hover:underline mt-1 font-mono"
                  >
                    <Mail className="w-3 h-3" />
                    <span>marzinabegum80@gmail.com</span>
                  </a>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-semibold text-white">Dr. Md. Nurul Momen</span>
                  <p className="text-[11px] text-[#94A3B8]">Professor, Dept. of Public Administration</p>
                  <a
                    href="mailto:nurulmomen78@gmail.com"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#00D1FF] hover:underline mt-1 font-mono"
                  >
                    <Mail className="w-3 h-3" />
                    <span>nurulmomen78@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
