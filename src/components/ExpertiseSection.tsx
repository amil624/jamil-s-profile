import React from 'react';
import { Target, Layers, Laptop, PenTool, LayoutTemplate, Video, FileSpreadsheet, Presentation, Share2 } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const tools = [
    { name: 'Meta Business Suite', category: 'Campaign & Social', icon: <Share2 className="w-5 h-5 text-[#0081FB]" /> },
    { name: 'Adobe Illustrator', category: 'Vector & Print', icon: <PenTool className="w-5 h-5 text-[#FF9A00]" /> },
    { name: 'Adobe Photoshop', category: 'Photo & Raster', icon: <Layers className="w-5 h-5 text-[#31A8FF]" /> },
    { name: 'Canva Pro', category: 'Rapid Graphics', icon: <LayoutTemplate className="w-5 h-5 text-[#00C4CC]" /> },
    { name: 'CapCut', category: 'Video Production', icon: <Video className="w-5 h-5 text-[#F8FAFC]" /> },
    { name: 'Microsoft PowerPoint', category: 'Pitch Decks', icon: <Presentation className="w-5 h-5 text-[#D24726]" /> },
    { name: 'Microsoft Excel', category: 'Data Analysis', icon: <FileSpreadsheet className="w-5 h-5 text-[#217346]" /> },
  ];

  return (
    <section
      id="expertise"
      className="py-12 lg:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto overflow-visible relative z-10 w-full mb-10"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
        
        {/* Left Side (65%): Core Expertise 2 Cards */}
        <div className="lg:w-[65%] flex flex-col">
          
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 text-center lg:text-left relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[15rem] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25)_0%,rgba(37,99,235,0.15)_40%,transparent_70%)] blur-[40px] pointer-events-none -z-10 rounded-full mix-blend-screen hidden lg:block" />
            
            <span className="text-[#00C4CC] text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
              CORE EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3">
              What I{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4CC] to-[#3B82F6]">
                Do Best
              </span>
            </h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
              A blend of strategic thinking, leadership, marketing, and creative execution that turns ideas into measurable impact.
            </p>
          </div>

          {/* 2 Big Cards */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 h-full">
            
            {/* Card 1: Strategic Planning & Operations */}
            <div className="p-6 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#0A1F4D]/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#3B82F6]/40 transition-all flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#3B82F6]/30 flex items-center justify-center shrink-0 bg-[#0A1F4D]/80 group-hover:scale-105 transition-transform">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2px] border-[#3B82F6] flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] leading-snug">
                  Strategic Planning &amp;<br />Operational Leadership
                </h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mt-auto pt-4 border-t border-[#3B82F6]/15">
                {[
                  'Campaign Architecture & Operations',
                  'Cross-Functional Team Governance (200+ Members)',
                  'Resource Management & Leadership Pipelines',
                  'Administrative Protocol & Public Policy',
                  'Performance Tracking & Metric Delivery',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="text-[#CBD5E1] text-xs sm:text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Creative Direction & Visual Production */}
            <div className="p-6 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#0A1F4D]/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#00C4CC]/40 transition-all flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#00C4CC]/30 flex items-center justify-center shrink-0 bg-[#0A1F4D]/80 group-hover:scale-105 transition-transform">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2px] border-[#00C4CC] flex items-center justify-center">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#00C4CC]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] leading-snug">
                  Creative Direction &amp;<br />Visual Brand Production
                </h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mt-auto pt-4 border-t border-[#3B82F6]/15">
                {[
                  'Visual Identity & Design Systems',
                  'Digital Campaign Assets (450+ Produced)',
                  'Nationwide Print Media & Stage Backdrops',
                  'Promotional Merchandising & Media Kits',
                  'Audience Engagement & Social Media Strategy',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4CC] shrink-0" />
                    <span className="text-[#CBD5E1] text-xs sm:text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Right Side (35%): Tools & Platforms */}
        <div className="lg:w-[35%] flex flex-col items-stretch">
          <div className="p-6 sm:p-8 lg:p-10 rounded-[1.75rem] sm:rounded-[2rem] border border-[#00C4CC]/20 bg-[#061435]/60 backdrop-blur-xl relative overflow-hidden h-full flex flex-col shadow-[0_4px_40px_rgba(0,196,204,0.05)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C4CC]/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3" />
            
            <div className="relative z-10 mb-6 sm:mb-8">
              <span className="text-[#00C4CC] text-[10px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
                TOOLS &amp; PLATFORMS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#F8FAFC] leading-tight mb-4">
                Platforms I Use<br />to Get Things Done
              </h3>
              <div className="w-12 h-[2px] bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3.5 relative z-10">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full border border-[#3B82F6]/15 bg-[#061435] hover:bg-[#0A1F4D] hover:border-[#3B82F6]/30 transition-all shadow-inner cursor-default group min-h-[44px]"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {tool.icon}
                    <span className="text-[#F8FAFC] font-bold tracking-wide text-xs sm:text-sm group-hover:text-[#00D1FF] transition-colors">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider hidden xs:inline">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
