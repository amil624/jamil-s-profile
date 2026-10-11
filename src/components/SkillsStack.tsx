import React from 'react';
import { Cpu, Layers, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsStack: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#090d16]/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Software Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Strategic operations, executive communication, and high-impact digital production software.
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              id={`skill-category-${catIdx}`}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0d1322]/90 border border-slate-800/80 p-6 sm:p-8 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span>{cat.category}</span>
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  {cat.skills.length} Competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white">
                          {skill.name}
                        </div>
                        {skill.level && (
                          <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                            {skill.level}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
