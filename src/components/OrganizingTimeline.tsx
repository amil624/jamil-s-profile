import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Megaphone, Settings2, Globe2 } from 'lucide-react';
import { organizingExperience } from '../data/portfolioData';

export const OrganizingTimeline: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'branding':
        return <Megaphone className="w-5 h-5 text-rose-400" />;
      case 'operations':
        return <Settings2 className="w-5 h-5 text-indigo-400" />;
      case 'diplomacy':
        return <Globe2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#090d16]/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Execution & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Organizing & Project Management
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Leading logistical planning, national brand promotion, diplomacy conference management, and volunteer administration.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {organizingExperience.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0d1322]/80 border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(exp.category)}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {exp.organization}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="uppercase tracking-wider font-semibold text-slate-400">
                  {exp.category}
                </span>
                <span className="font-mono text-slate-400">#0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
