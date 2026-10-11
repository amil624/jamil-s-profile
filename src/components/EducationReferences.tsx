import React, { useState } from 'react';
import { GraduationCap, BookOpen, Mail, UserCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { educationList, academicReferences } from '../data/portfolioData';

export const EducationReferences: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Section (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Education
              </h2>
              <p className="text-sm text-slate-400">
                Academic excellence grounded in public policy, administrative sciences, and humanities.
              </p>
            </div>

            <div className="space-y-5">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  id={`education-item-${idx}`}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c111e]/90 border border-slate-800/90 hover:border-slate-700 shadow-xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 font-semibold w-fit">
                      {edu.result}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-rose-300">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {edu.location} &bull; {edu.period}
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 pt-3 border-t border-slate-800/80 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic References Section (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Endorsements</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Academic References
              </h2>
              <p className="text-sm text-slate-400">
                Distinguished faculty leadership at Department of Public Administration, University of Rajshahi.
              </p>
            </div>

            <div className="space-y-4">
              {academicReferences.map((ref, idx) => (
                <div
                  key={idx}
                  id={`reference-item-${idx}`}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 shadow-lg space-y-3 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {ref.name}
                    </h3>
                    <div className="text-xs font-medium text-indigo-300">
                      {ref.title}, {ref.department}
                    </div>
                    <div className="text-xs text-slate-400">
                      {ref.institution}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
                    >
                      <Mail className="w-3.5 h-3.5 text-rose-400" />
                      <span>{ref.email}</span>
                    </a>
                    
                    <button
                      onClick={() => copyEmail(ref.email)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors text-xs flex items-center gap-1"
                      title="Copy email address"
                    >
                      {copiedEmail === ref.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
