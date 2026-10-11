import React from 'react';
import { Calendar, Users, Image as ImageIcon, UserPlus } from 'lucide-react';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
  valueClass: string;
  iconBoxClass: string;
}

export const MetricsRibbon: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      id: 'metric-events',
      value: '25+',
      label: 'EVENTS ORGANIZED',
      icon: <Calendar className="w-5 h-5" />,
      valueClass: 'text-[#38BDF8]',
      iconBoxClass: 'border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]',
    },
    {
      id: 'metric-registrations',
      value: '6,000+',
      label: 'REGISTRATIONS',
      icon: <Users className="w-5 h-5" />,
      valueClass: 'text-[#00E5FF]',
      iconBoxClass: 'border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]',
    },
    {
      id: 'metric-assets',
      value: '500+',
      label: 'ASSETS PRODUCED',
      icon: <ImageIcon className="w-5 h-5" />,
      valueClass: 'text-[#34D399]',
      iconBoxClass: 'border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399]',
    },
    {
      id: 'metric-members',
      value: '100+',
      label: 'MEMBERS LED',
      icon: <UserPlus className="w-5 h-5" />,
      valueClass: 'text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#E879F9] to-[#C084FC]',
      iconBoxClass: 'border-[#F472B6]/30 bg-[#F472B6]/10 text-[#F472B6]',
    },
  ];

  const marqueeItems = [
    'RAJSHAHI UNIVERSITY',
    'RAJSHAHI UNIVERSITY BUSINESS CLUB',
    'MARICO BANGLADESH',
    'HULT PRIZE',
    'UNILEVER BANGLADESH',
    'YOUTH THINKERS SOCIETY',
    'DEPARTMENT OF PUBLIC ADMINISTRATION',
    'BRAC BANGLADESH',
    'BANGLADESH INNOVATION FORUM',
  ];

  return (
    <section id="metrics-marquee" className="relative z-10 py-10 sm:py-14 w-full overflow-hidden">
      {/* 4 Impact Metric Cards Container */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#06132D]/85 border border-[#1E3A8A]/35 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-[#38BDF8]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[140px] group"
            >
              {/* Top Row: Metric Value + Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-black tracking-tight leading-none ${item.valueClass}`}>
                  {item.value}
                </span>
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${item.iconBoxClass}`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Bottom Row: Metric Label */}
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Institutional & Partner Marquee Banner */}
      <div className="relative w-full border-y border-white/[0.08] bg-[#020713]/80 py-5 sm:py-6 overflow-hidden backdrop-blur-sm">
        {/* Left & Right gradient edge fades for smooth infinite stream */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-[#030B14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-[#030B14] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center whitespace-nowrap">
          {/* Repeated items to ensure seamless infinite looping */}
          {[...marqueeItems, ...marqueeItems].map((org, index) => (
            <div key={index} className="inline-flex items-center">
              <span className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-slate-300/90 hover:text-white transition-colors select-none px-8 sm:px-12">
                {org}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00D1FF]/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
