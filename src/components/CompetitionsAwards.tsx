import React, { useState } from 'react';
import { Trophy, Award, Medal, CheckCircle, ShieldCheck, Star, Sparkles, FileBadge } from 'lucide-react';
import {
  honorsAndAwards,
  caseCompetitions,
  leadershipCertifications,
} from '../data/portfolioData';

export const CompetitionsAwards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'awards' | 'competitions' | 'certifications'>('all');

  return (
    <section id="honors" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Trophy className="w-3.5 h-3.5" />
              <span>Recognition & Accolades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Honors, Competitions & Certifications
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              National youth innovation challenges, business case competitions, diplomacy recognitions, and executive leadership credentials.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {[
              { id: 'all', label: 'Overview' },
              { id: 'awards', label: 'Honors' },
              { id: 'competitions', label: 'Case Battles' },
              { id: 'certifications', label: 'Certifications' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Honors & Awards (7 cols) */}
          {(activeTab === 'all' || activeTab === 'awards') && (
            <div className={`${activeTab === 'awards' ? 'lg:col-span-12' : 'lg:col-span-7'} space-y-4`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                <Medal className="w-4 h-4" />
                <span>Honors & Awards</span>
              </div>

              <div className="space-y-3.5">
                {honorsAndAwards.map((item) => (
                  <div
                    key={item.id}
                    id={`award-${item.id}`}
                    className={`p-5 rounded-xl border transition-all duration-200 ${
                      item.featured
                        ? 'bg-gradient-to-r from-rose-950/20 via-slate-900/80 to-slate-900/80 border-rose-500/30 hover:border-rose-500/60 shadow-md'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-white tracking-tight">
                            {item.title}
                          </h3>
                          {item.featured && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-rose-300 font-medium">
                          {item.organization}
                        </div>
                        {item.description && (
                          <p className="text-xs text-slate-400 leading-relaxed pt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/50">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column: Case Competitions & Certifications (5 cols) */}
          <div className={`${activeTab === 'all' ? 'lg:col-span-5' : activeTab === 'competitions' ? 'lg:col-span-12' : activeTab === 'certifications' ? 'lg:col-span-12' : 'hidden'} space-y-8`}>
            
            {/* Case Competitions Block */}
            {(activeTab === 'all' || activeTab === 'competitions') && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Trophy className="w-4 h-4" />
                  <span>Case & Ideation Competitions</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseCompetitions.map((c, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white tracking-tight">
                          {c.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            c.stage === 'Semi-finalist'
                              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}
                        >
                          {c.stage}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">{c.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Certifications Block */}
            {(activeTab === 'all' || activeTab === 'certifications') && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <FileBadge className="w-4 h-4" />
                  <span>Leadership & Professional Certifications</span>
                </div>

                <div className="space-y-2.5">
                  {leadershipCertifications.map((cert, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/20 to-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors flex items-start gap-3.5"
                    >
                      <div className="p-2 rounded-lg bg-indigo-950/50 border border-indigo-800/40 text-indigo-400 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-white">
                          {cert.title}
                        </div>
                        <div className="text-xs text-indigo-300/80 font-medium">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
