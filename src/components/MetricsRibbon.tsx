import React from 'react';
import { Calendar, Users, Image as ImageIcon, UserPlus, Award, Trees } from 'lucide-react';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
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
      sublabel: 'Campus & Regional Summits',
      icon: <Calendar className="w-5 h-5" />,
      valueClass: 'text-[#38BDF8]',
      iconBoxClass: 'border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]',
    },
    {
      id: 'metric-registrations',
      value: '6,000+',
      label: 'REGISTRATIONS',
      sublabel: 'Participants & Delegates',
      icon: <Users className="w-5 h-5" />,
      valueClass: 'text-[#00E5FF]',
      iconBoxClass: 'border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]',
    },
    {
      id: 'metric-assets',
      value: '500+',
      label: 'ASSETS PRODUCED',
      sublabel: 'Campaign Branding & Media',
      icon: <ImageIcon className="w-5 h-5" />,
      valueClass: 'text-[#34D399]',
      iconBoxClass: 'border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399]',
    },
    {
      id: 'metric-members',
      value: '100+',
      label: 'MEMBERS LED',
      sublabel: 'Cross-functional Teams',
      icon: <UserPlus className="w-5 h-5" />,
      valueClass: 'text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] via-[#E879F9] to-[#C084FC]',
      iconBoxClass: 'border-[#F472B6]/30 bg-[#F472B6]/10 text-[#F472B6]',
    },
  ];

  const marqueeItems = [
    'RAJSHAHI UNIVERSITY',
    'RAJSHAHI UNIVERSITY BUSINESS CLUB',
    'MARICO BANGLADESH',
    'HULT PRIZE GLOBAL FOUNDATION',
    'UNILEVER BANGLADESH',
    'UNICEF GENERATION UNLIMITED',
    'JAAGO FOUNDATION',
    'DEPARTMENT OF PUBLIC ADMINISTRATION',
    'BYLC (BANGLADESH YOUTH LEADERSHIP CENTER)',
    'ASPIRE INSTITUTE',
    'BRAC BANGLADESH',
  ];

  return (
    <section id="metrics-marquee" className="relative z-10 py-6 sm:py-10 w-full overflow-hidden">
      {/* 4 Impact Metric Cards Container matching reference desktop & mobile */}
      <div className="max-w-[1536px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="rounded-3xl bg-[#06132D]/80 border border-[#00D1FF]/20 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
            {metrics.map((item, idx) => (
              <div
                key={item.id}
                id={item.id}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'lg:pl-6' : ''
                } ${idx >= 2 ? 'pt-4 sm:pt-0' : ''} p-2 sm:p-3 group`}
              >
                {/* Top Row: Metric Value + Icon */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-black tracking-tight leading-none ${item.valueClass}`}
                  >
                    {item.value}
                  </span>
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${item.iconBoxClass}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Bottom Row: Metric Label & Sublabel */}
                <div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Institutional & Partner Marquee Banner */}
      <div className="relative w-full border-y border-white/[0.08] bg-[#020713]/80 py-4 sm:py-5 overflow-hidden backdrop-blur-sm">
        {/* Left & Right gradient edge fades for smooth infinite stream */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#030B14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#030B14] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((brand, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6 shrink-0">
              <span className="text-xs sm:text-sm font-black tracking-widest text-slate-400/80 hover:text-[#00D1FF] transition-colors cursor-default">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]/50 mx-4 sm:mx-6 shadow-[0_0_6px_rgba(0,209,255,0.6)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
