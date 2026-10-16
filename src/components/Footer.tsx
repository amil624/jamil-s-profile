import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, ExternalLink, Linkedin, Heart, Database, Lock } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { SupabaseStatusModal } from './SupabaseStatusModal';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isDbModalOpen, setIsDbModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface FooterNavLink {
    label: string;
    sectionId?: string;
    path?: string;
  }

  const navLinks: FooterNavLink[] = [
    { label: 'About', sectionId: 'about' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'portfolio' },
    { label: 'Sports', sectionId: 'sports' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, item: FooterNavLink) => {
    e.preventDefault();
    if (item.sectionId) {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(item.sectionId!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (item.path) {
      onNavigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#3B82F6]/15 bg-[#030B14] py-12 px-6 relative z-10">
      <div className="max-w-[1536px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-center">
          
          {/* Brand Left */}
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-[#00C4CC]/40 bg-[#0A1F4D]/60 shadow-[0_0_15px_rgba(0,209,255,0.3)] shrink-0">
              <img
                src="/images/jamil_profile_official.jpg"
                alt="Md. Jamil Hosen Khandakar"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = 'https://ik.imagekit.io/Jamils/Jamil%20Hosen%20Khandakar.%20Jpg%20(1).heif?tr=f-auto,w-120,h-120';
                  }
                }}
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#F8FAFC] block">
                Md. Jamil Hosen Khandakar
              </span>
              <span className="text-xs text-[#94A3B8]">
                Public Administration &bull; Strategy & Execution &bull; RUBC Vice President
              </span>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.path || '/'}
                onClick={(e) => handleLinkClick(e, item)}
                className="text-xs font-semibold text-[#CBD5E1] hover:text-[#00D1FF] uppercase tracking-wider transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            &copy; {new Date().getFullYear()} Md. Jamil Hosen Khandakar. Built with strategic craftsmanship and dedication.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDbModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#3ECF8E] hover:text-white transition-colors"
            >
              <Database className="w-3 h-3" />
              <span>Supabase DB</span>
            </button>
            <span>&bull;</span>
            <button
              onClick={() => {
                onNavigate('/admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#00D1FF] transition-colors"
              title="Administrator Panel"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
            <span>&bull;</span>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D1FF] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="hover:text-[#00D1FF] transition-colors flex items-center gap-1.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      <SupabaseStatusModal
        isOpen={isDbModalOpen}
        onClose={() => setIsDbModalOpen(false)}
      />
    </footer>
  );
};
