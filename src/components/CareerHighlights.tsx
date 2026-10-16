import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Users,
  ChevronRight,
  Maximize2,
  Trees,
  Droplets,
  Home,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { careerHighlights } from '../data/portfolioData';
import { CareerHighlight } from '../types';
import { AuthenticCardMedia } from './AuthenticCardMedia';

export const CareerHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<CareerHighlight | null>(null);

  const getSubProjectIcon = (name: string) => {
    switch (name) {
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="highlights" className="py-20 lg:py-28 relative">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pillars of Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Career Highlights
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Flagship leadership roles, national competition brand direction, and high-impact community initiatives across Rajshahi and Bangladesh.
            </p>
          </div>

          <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span>4 Key Milestones in Sequence</span>
          </div>
        </div>

        {/* Highlights Cards List */}
        <div className="space-y-12">
          {careerHighlights.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.id}
                id={`highlight-card-${item.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c101c]/90 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300 backdrop-blur-xl"
              >
                {/* Index number watermark */}
                <div className="absolute top-4 right-6 sm:top-6 sm:right-8 text-5xl sm:text-6xl font-black text-slate-800/40 pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-5 ${
                      isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
                    }`}
                  >
                    {/* Badge and Period */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.period}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-base sm:text-lg font-medium text-slate-300">
                        {item.organization}
                      </div>
                      {item.subOrganization && (
                        <div className="text-xs sm:text-sm text-rose-400/90 font-medium">
                          {item.subOrganization}
                        </div>
                      )}
                    </div>

                    {/* Short Intro - Highlighted from user chat instructions */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic border-l-4 border-l-rose-500">
                      "{item.shortIntro}"
                    </div>

                    {/* Metric chips */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {item.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800"
                        >
                          <div className="text-xs text-slate-400 font-medium truncate">
                            {m.label}
                          </div>
                          <div className="text-sm font-bold text-white tracking-tight mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Detailed CV Bullet points */}
                    <div className="space-y-2.5 pt-2">
                      {item.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Subprojects for Project Pathchinhno */}
                    {item.subProjects && (
                      <div className="mt-6 pt-5 border-t border-slate-800 space-y-3" id="pathchinhno-pillars">
                        <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Trees className="w-4 h-4" />
                          <span>Pathchinhno (পথ চিহ্ন) 3 Core Initiatives:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {item.subProjects.map((sp, spIdx) => (
                            <div
                              key={spIdx}
                              className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 hover:border-emerald-500/60 transition-colors"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                {getSubProjectIcon(sp.iconName)}
                                <span className="text-xs font-bold text-white">
                                  {sp.name}
                                </span>
                              </div>
                              <div className="text-[11px] font-semibold text-emerald-400 mb-1">
                                {sp.metric}
                              </div>
                              <p className="text-[11px] text-slate-400 leading-normal">
                                {sp.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Image Column */}
                  <div
                    className={`${
                      isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                    }`}
                  >
                    <AuthenticCardMedia
                      id={`highlight_${item.id}`}
                      title={item.role}
                      subtitle={item.organization}
                      badge={item.badge}
                      year={item.period}
                      initialImage={item.id === 'rubc-vp' ? '/images/jamil_profile_official.jpg' : ''}
                      aspectRatioClass="aspect-[4/3]"
                      onZoom={() => setSelectedHighlight(item)}
                    />

                    {/* Image Caption */}
                    {item.imageCaption && (
                      <div className="p-3.5 bg-[#0f1523] rounded-xl mt-3 border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                        <span className="line-clamp-1">{item.imageCaption}</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal for Image / Highlight Deep Dive */}
      {selectedHighlight && (
        <div
          id="highlight-preview-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedHighlight(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            >
              ✕
            </button>

            <div className="space-y-5">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${selectedHighlight.badgeColor}`}>
                {selectedHighlight.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedHighlight.role}
              </h3>
              <p className="text-rose-400 font-medium text-sm">
                {selectedHighlight.organization} &bull; {selectedHighlight.period}
              </p>

              {selectedHighlight.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-slate-700">
                  <img
                    src={selectedHighlight.imageUrl}
                    alt={selectedHighlight.role}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                  {selectedHighlight.imageCaption && (
                    <div className="p-3 bg-slate-900 text-xs text-slate-300 italic">
                      {selectedHighlight.imageCaption}
                    </div>
                  )}
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedHighlight.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs uppercase font-bold text-slate-400">Key Deliverables:</div>
                {selectedHighlight.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedHighlight(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-rose-600 text-white hover:bg-rose-500"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
