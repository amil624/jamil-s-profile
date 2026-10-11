/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EndorsementsSection } from './components/EndorsementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AchievementsPage } from './components/AchievementsPage';
import { CertificationsPage } from './components/CertificationsPage';
import { FullExperiencePage } from './components/FullExperiencePage';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Read initial URL path
    const path = window.location.pathname;
    if (['/achievements', '/certifications', '/experience'].includes(path)) {
      setCurrentPath(path);
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    if (currentPath !== '/') return;

    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'experience',
        'expertise',
        'portfolio',
        'achievements',
        'contact',
      ];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'hero' ? 'about' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-[#030B14] text-[#F8FAFC] selection:bg-[#00D1FF] selection:text-[#030B14] font-sans antialiased overflow-x-hidden">
      {/* Fixed Navbar with Glassmorphism matching abdurrahmanrahim.com */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Dynamic View Routing */}
      <main className="relative">
        {currentPath === '/achievements' ? (
          <AchievementsPage onNavigate={handleNavigate} />
        ) : currentPath === '/certifications' ? (
          <CertificationsPage onNavigate={handleNavigate} />
        ) : currentPath === '/experience' ? (
          <FullExperiencePage onNavigate={handleNavigate} />
        ) : (
          <>
            {/* 3-Column Hero Section */}
            <Hero
              onOpenCv={() => setIsCvModalOpen(true)}
              onNavigateToProject={() => {
                const el = document.getElementById('portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Impact Metrics Bar & Institutional Marquee */}
            <MetricsRibbon />

            {/* About & Education (The Person Behind The Projects) */}
            <AboutSection />

            {/* Experience & Leadership */}
            <ExperienceSection onNavigate={handleNavigate} />

            {/* Core Expertise (What I Do Best) & Tools */}
            <ExpertiseSection />

            {/* Portfolio (Projects That Create Impact) */}
            <PortfolioSection onOpenCv={() => setIsCvModalOpen(true)} />

            {/* Achievements & Metrics Podium */}
            <AchievementsSection onNavigate={handleNavigate} />

            {/* Live Endorsements & Peer Recommendations (Supabase Powered) */}
            <EndorsementsSection />

            {/* Contact Form & Direct Connect */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
