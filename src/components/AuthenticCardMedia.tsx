import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, ZoomIn, CheckCircle2 } from 'lucide-react';
import { getStoredImage } from '../lib/imageStorage';

interface AuthenticCardMediaProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  year?: string;
  initialImage?: string;
  category?: string;
  aspectRatioClass?: string;
  onZoom?: (imgUrl: string) => void;
}

export const AuthenticCardMedia: React.FC<AuthenticCardMediaProps> = ({
  id,
  title,
  subtitle,
  badge,
  year,
  initialImage,
  category,
  aspectRatioClass = 'aspect-[16/10]',
  onZoom,
}) => {
  // Check if initial image is one of the legacy AI generated ones
  const isAiGenerated = (url?: string) => {
    if (!url) return false;
    return (
      url.includes('casecation_award') ||
      url.includes('hult_team_ru') ||
      url.includes('pathchinhno_social') ||
      url.includes('cert_') ||
      url.includes('ignite_champion') ||
      url.includes('aspire_cert') ||
      url.includes('bylc_cert')
    );
  };

  const [imageUrl, setImageUrl] = useState<string>(() => {
    const stored = getStoredImage(id);
    if (stored) return stored;
    if (initialImage && !isAiGenerated(initialImage)) return initialImage;
    return '';
  });

  useEffect(() => {
    const handleUpdate = (e: CustomEvent) => {
      if (e.detail?.key === id) {
        setImageUrl(e.detail.dataUrl || '');
      }
    };
    window.addEventListener('portfolio_image_updated' as any, handleUpdate);
    return () => window.removeEventListener('portfolio_image_updated' as any, handleUpdate);
  }, [id]);

  return (
    <div className={`relative ${aspectRatioClass} w-full rounded-2xl overflow-hidden border border-[#00D1FF]/20 bg-[#040D21] group transition-all`}>
      {imageUrl ? (
        // Authentic Real Uploaded Image
        <div className="relative w-full h-full bg-[#020713]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030B14] via-transparent to-transparent opacity-80" />
          
          {/* Zoom button */}
          {onZoom && (
            <button
              onClick={() => onZoom(imageUrl)}
              title="View full resolution"
              className="absolute top-3 left-3 p-2 rounded-xl bg-black/60 hover:bg-[#00D1FF] hover:text-black text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          )}

          {badge && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#00D1FF] uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>
      ) : (
        // Clean, High-Fidelity Verified Official Credential Certificate (ZERO AI artifacts, ZERO public edit controls)
        <div className="relative w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#06132D] via-[#040D21] to-[#020713] border border-white/[0.08] select-none">
          {/* Watermark Crest */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
            <Award className="w-36 h-36 text-[#00D1FF]" />
          </div>

          {/* Top header of certificate */}
          <div className="flex items-center justify-between z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[10px] font-bold tracking-widest text-[#00D1FF] uppercase">
              <ShieldCheck className="w-3 h-3 text-[#00D1FF]" />
              <span>OFFICIAL CREDENTIAL</span>
            </div>

            {year && (
              <span className="text-[11px] font-mono font-bold text-slate-400">
                {year}
              </span>
            )}
          </div>

          {/* Center Credential Details */}
          <div className="my-auto z-10 py-2">
            <h4 className="text-sm sm:text-base font-bold text-white leading-tight mb-1 line-clamp-2">
              {title}
            </h4>
            {subtitle && (
              <p className="text-xs text-[#94A3B8] font-medium line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom Verified Record Badge */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] z-10">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Credential Record</span>
            </div>

            {category && (
              <span className="text-[10px] font-mono uppercase text-slate-500">
                {category}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
