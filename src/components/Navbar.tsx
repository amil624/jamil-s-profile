import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'About', path: '#about' },
    { label: 'Experience', path: '#experience' },
    { label: 'Projects', path: '#portfolio' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Certifications', path: '/certifications' },
  ];

  const handleItemClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (path.startsWith('#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const el = document.querySelector(path);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030B14]/90 backdrop-blur-md border-b border-[#3B82F6]/15 shadow-xl shadow-black/40 py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-[#030B14]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Left Brand Identity: Initial Avatar + Name + Tagline */}
          <a
            href="/"
            onClick={(e) => handleItemClick(e, '/')}
            id="nav-logo"
            className="group flex items-center gap-2.5 sm:gap-3 text-left"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#00C4CC]/30 bg-[#0A1F4D]/50 flex items-center justify-center font-display font-black text-xs sm:text-sm text-[#00D1FF] shadow-[0_0_15px_rgba(0,209,255,0.25)] group-hover:border-[#00D1FF]/60 transition-all">
              JK
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm sm:text-base leading-tight text-[#F8FAFC] tracking-tight group-hover:text-[#00D1FF] transition-colors">
                {profileData.name}
              </span>
              <span className="hidden xs:inline-block text-[9px] sm:text-[10px] text-[#94A3B8] font-medium tracking-wide">
                Driving Impact Through{' '}
                <span className="text-[#06B6D4] font-semibold">Strategy</span> &{' '}
                <span className="text-[#34D399] font-semibold">Execution</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links & Action */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <nav className="hidden md:flex items-center gap-6" id="desktop-nav">
              {navItems.map((item) => {
                const isAnchor = item.path.startsWith('#');
                const isActive = isAnchor
                  ? currentPath === '/' && activeSection === item.path.replace('#', '')
                  : currentPath === item.path;

                return (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleItemClick(e, item.path)}
                    id={`nav-link-${item.label.toLowerCase()}`}
                    className={`relative hover:text-[#00D1FF] transition-all duration-200 text-[13px] font-bold tracking-wider uppercase py-1 ${
                      isActive
                        ? 'text-[#00D1FF] text-glow-blue'
                        : 'text-[#CBD5E1]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D1FF] to-[#34D399] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Let's Talk CTA Button (Visible on all screens) */}
            <a
              href="#contact"
              onClick={(e) => handleItemClick(e, '#contact')}
              id="nav-cta-contact"
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#34D399] text-[#F8FAFC] rounded-full text-xs font-bold tracking-wide shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 sm:gap-2 shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 sm:p-2.5 rounded-xl bg-[#0A1F4D]/60 border border-[#3B82F6]/20 text-[#CBD5E1] hover:text-[#F8FAFC] active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00D1FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/75 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-drawer-menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden relative z-50 bg-[#050B18]/95 backdrop-blur-2xl border-b border-[#3B82F6]/25 px-5 py-6 space-y-4 shadow-2xl"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isAnchor = item.path.startsWith('#');
                  const isActive = isAnchor
                    ? currentPath === '/' && activeSection === item.path.replace('#', '')
                    : currentPath === item.path;

                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      onClick={(e) => handleItemClick(e, item.path)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-[#0A1F4D] text-[#00D1FF] border border-[#00D1FF]/40 shadow-[0_0_15px_rgba(0,209,255,0.15)]'
                          : 'text-[#CBD5E1] hover:text-white hover:bg-white/5 active:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_8px_rgba(0,209,255,0.8)]" />
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#3B82F6]/15 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleItemClick(e, '#contact')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#34D399] text-[#F8FAFC] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/30 min-h-[44px] active:scale-[0.98] transition-transform"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
