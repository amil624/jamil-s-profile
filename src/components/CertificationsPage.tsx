import React, { useState } from 'react';
import { ArrowLeft, Award, CheckCircle2, Calendar, Building, ExternalLink, ShieldCheck, Eye, X, ZoomIn } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

interface CertificationsPageProps {
  onNavigate: (path: string) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onNavigate }) => {
  const [activeCertModal, setActiveCertModal] = useState<{ title: string; image: string; issuer: string } | null>(null);

  return (
    <section
      id="certifications-page"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-[1536px] mx-auto min-h-screen relative z-10 w-full overflow-hidden"
    >
      {/* Background glow matching abdurrahmanrahim.com */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.12)_0%,rgba(37,99,235,0.05)_55%,transparent_70%)] blur-[80px] pointer-events-none -z-10 rounded-full mix-blend-screen overflow-hidden" />

      {/* Back to Portfolio button */}
      <div className="mb-8 sm:mb-12">
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          id="cert-back-to-portfolio-btn"
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#34D399]/40 text-[#CBD5E1] hover:text-[#F8FAFC] transition-all group font-medium text-xs tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] min-h-[40px]"
        >
          <ArrowLeft className="w-4 h-4 text-[#34D399] group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Header */}
      <div className="mb-10 sm:mb-14 text-center max-w-4xl mx-auto">
        <span className="text-[#34D399] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          CREDENTIALS &amp; UPSKILLING
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-4 sm:mb-6">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-[#CBD5E1] text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
          Structured leadership development courses, innovation bootcamps, and certified management competencies with verified certificates.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certificationsList.map((cert) => (
          <div
            key={cert.id}
            className="p-5 sm:p-7 rounded-[1.75rem] sm:rounded-[2rem] border border-[#3B82F6]/20 bg-[#050B18]/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-[#34D399]/40 hover:scale-[1.01] transition-all group"
          >
            <div>
              {/* Optional Certificate Visual Image Card */}
              {cert.image && (
                <div
                  onClick={() => setActiveCertModal({ title: cert.title, image: cert.image!, issuer: cert.issuer })}
                  className="mb-4 relative rounded-xl overflow-hidden border border-white/10 bg-[#030B14] cursor-pointer group/certimg aspect-[4/3] shadow-lg"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/certimg:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/certimg:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/certimg:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold border border-white/30 shadow-xl">
                      <ZoomIn className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>View Certificate</span>
                    </span>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white/90 bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                    Verified Credential
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] font-bold text-[#34D399] uppercase tracking-wider">
                  {cert.type}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                  Verified
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-[#F8FAFC] leading-snug mb-2 group-hover:text-[#34D399] transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs text-[#00D1FF] font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-xs text-[#CBD5E1] font-light leading-relaxed mb-4">
                {cert.description}
              </p>
            </div>

            <div className="pt-3 sm:pt-4 mt-auto border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#34D399]" />
                <span>{cert.date}</span>
              </span>
              <span className="text-[11px] text-[#00C4CC] font-mono">
                {cert.credentialId}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal Lightbox */}
      {activeCertModal && (
        <div
          onClick={() => setActiveCertModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#050B18] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/80">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {activeCertModal.title}
                </h3>
                <p className="text-xs text-[#34D399]">
                  {activeCertModal.issuer}
                </p>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close Certificate Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-black/50 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={activeCertModal.image}
                alt={activeCertModal.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
