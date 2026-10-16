import React, { useState, useEffect } from 'react';
import {
  Lock,
  ShieldCheck,
  Image as ImageIcon,
  Upload,
  Trash2,
  Save,
  CheckCircle2,
  ArrowLeft,
  Eye,
  FileText,
  Award,
  Briefcase,
  User,
  AlertCircle,
  KeyRound,
  LogOut,
  Edit3,
  X,
  Mail,
  GraduationCap,
  Trophy,
} from 'lucide-react';
import {
  getStoredImage,
  setStoredImage,
  removeStoredImage,
  getStoredInfo,
  setStoredInfo,
} from '../lib/imageStorage';
import { profileData, sportsAndGamesData } from '../data/portfolioData';

interface AdminPanelProps {
  onNavigate: (path: string) => void;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagPill: string;
  description: string;
  defaultImage: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigate }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('jamil_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Active Management Tab
  const [activeTab, setActiveTab] = useState<'projects' | 'profile' | 'achievements' | 'sports' | 'info'>('projects');

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Profile Image State
  const [heroProfileImg, setHeroProfileImg] = useState<string>(() =>
    getStoredImage('hero_profile', '/images/jamil_profile_official.jpg')
  );

  // Master Project List covering all featured initiatives
  const defaultProjects: ProjectData[] = [
    {
      id: 'casecation',
      title: 'CaseCation Season 2',
      category: 'NATIONAL CASE COMPETITION & BRANDING',
      tagPill: '450+ ASSETS • BRANDING • PRODUCTION',
      description:
        'Led a dedicated 15-member creative team to engineer the nationwide branding identity, marketing collateral, and digital presence for one of Bangladesh’s premier inter-university business competitions. Produced over 450+ custom visual assets, curated 20+ campus banners across top public & private universities, and received formal stage recognition.',
      defaultImage: '',
    },
    {
      id: 'hult-prize',
      title: 'HULT PRIZE at University of Rajshahi',
      category: 'GLOBAL SOCIAL ENTREPRENEURSHIP',
      tagPill: '750+ TEAMS • CAMPUS MOBILIZATION',
      description:
        'Spearheaded university-wide outreach, campus promotions, and operational coordination for the world’s largest student social entrepreneurship challenge. Successfully mobilized 750+ student teams to submit social enterprise solutions, trained a 50+ member volunteer committee, and directed logistics for on-campus pitch days.',
      defaultImage: '',
    },
    {
      id: 'pathchinhno',
      title: 'Project Pathchinhno (পথ চিহ্ন)',
      category: 'ENVIRONMENTAL & COMMUNITY ACTION',
      tagPill: '170+ TREES • PADMA RIVER • WELFARE',
      description:
        'Founded and led an action-driven youth initiative addressing ecological conservation and street welfare. Engineered The Green FootPrint (170+ native trees planted across university zones), Mission BluePulse (Padma River bank waste cleanup & microplastics advocacy), and Winter Heaven (shelter & warmth for street animals).',
      defaultImage: '',
    },
    {
      id: 'rubc-exec',
      title: 'Rajshahi University Business Club',
      category: 'HUMAN RESOURCE & STRATEGIC OPERATIONS',
      tagPill: '200+ COMMUNITY • HR GOVERNANCE',
      description:
        'Directing human resource governance, skill incubation, and operational workflows for a vibrant community of over 200+ members. Standardized leadership succession frameworks, coordinated department leaders, and formulated competency bootcamps for student professionals.',
      defaultImage: '/images/jamil_profile_official.jpg',
    },
    {
      id: 'imagen-venture',
      title: 'ImaGen Ventures Youth Challenge',
      category: 'YOUTH SOCIAL INNOVATION & ACCELERATOR',
      tagPill: 'NATIONAL FINALIST • UNICEF & JAAGO',
      description:
        'Selected as top national finalist among hundreds of nationwide entries for designing an innovative grassroots social enterprise. Participated in the intensive Mymensingh regional boot-camp, crafting scalable frameworks for climate resilience and youth capacity building.',
      defaultImage: '',
    },
    {
      id: 'ignite-championship',
      title: 'Ignite 3.0 Business Article Writing',
      category: 'STRATEGIC WRITING & ANALYSIS',
      tagPill: '1ST PLACE CHAMPION • RUBC',
      description:
        'Clinched the championship trophy and certificate in the flagship business article writing segment of Ignite 3.0. Formulated incisive critical analyses on macroeconomic dynamics, youth venture incubation, and policy modernization.',
      defaultImage: '',
    },
    {
      id: 'maroon-inc',
      title: 'MAROON INC',
      category: 'BRAND MARKETING',
      tagPill: 'CONTENT • DESIGN • PARTNERSHIPS',
      description:
        'Created marketing content, graphics, and audience engagement materials across multiple media platforms, including Quoted BD and All About Marketing. Contributed to a partnership campaign with bKash that onboarded and promoted multiple bite-sized media communities.',
      defaultImage: '',
    },
    {
      id: 'marico-matters',
      title: 'Marico Matters',
      category: 'CAMPAIGN',
      tagPill: 'CREATIVE PLANNING & VISUALS',
      description:
        'Contributed to Marico Values Month through campaign execution, visual communication, and engagement initiatives that reinforced organizational values and employee participation.',
      defaultImage: '',
    },
    {
      id: 'tedxru',
      title: 'TEDxRU',
      category: 'EVENT LEADERSHIP',
      tagPill: 'SPONSOR OUTREACH & PARTNERSHIPS',
      description:
        'Led budgeting and sponsorship operations, coordinating partners, stakeholders, and resources to support the successful execution of TEDx Rajshahi University.',
      defaultImage: '',
    },
  ];

  // Dynamic projects list loaded from storage if customized
  const [projectsList, setProjectsList] = useState<ProjectData[]>(() =>
    getStoredInfo('custom_projects_list', defaultProjects)
  );

  // Editing modal state for project text
  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);

  // Achievements & Credentials List for Management
  const initialAchievements = [
    {
      id: 'casecation-season-2-recognition',
      title: 'CaseCation Season 2 Stage Recognition',
      category: 'National Business Case Competition',
      year: '2025',
    },
    {
      id: 'imagen-ventures-youth-challenge',
      title: 'ImaGen Ventures Youth Challenge Finalist',
      category: 'UNICEF & Generation Unlimited',
      year: '2024–2025',
    },
    {
      id: 'ignite-article-writing-championship',
      title: 'Ignite 3.0 Article Writing Championship (1st Place)',
      category: 'Strategic Writing & Analysis',
      year: '2024',
    },
    {
      id: 'hult-prize-campus-deputy-director',
      title: 'Hult Prize Deputy Campus Director',
      category: 'Global Social Entrepreneurship',
      year: '2025',
    },
    {
      id: 'aspire-leaders',
      title: 'Aspire Leadership Program',
      category: 'Aspire Institute (Harvard Faculty)',
      year: '2025',
    },
    {
      id: 'bylc-event-planning',
      title: 'Event Planning & Project Management',
      category: 'BYLC',
      year: '2024',
    },
  ];

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = passcode.trim().toLowerCase();
    if (
      cleanPass === 'jamil2026' ||
      cleanPass === 'admin123' ||
      cleanPass === 'mjhk6969' ||
      cleanPass === 'admin'
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('jamil_admin_auth', 'true');
      setAuthError(null);
    } else {
      setAuthError('Invalid administrator authorization code. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('jamil_admin_auth');
  };

  // Helper for single image upload via file reader
  const uploadImageForItem = (storageKey: string, file: File, callback?: (url: string) => void) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setStoredImage(storageKey, dataUrl);
      if (callback) callback(dataUrl);
      showToast('Image uploaded and synced successfully!');
    };
    reader.readAsDataURL(file);
  };

  // Helper for direct URL input
  const saveUrlForItem = (storageKey: string, url: string, callback?: (url: string) => void) => {
    if (!url.trim()) return;
    setStoredImage(storageKey, url.trim());
    if (callback) callback(url.trim());
    showToast('Image URL saved successfully!');
  };

  // Save Project Info edits
  const handleSaveProjectEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const updated = projectsList.map((p) =>
      p.id === editingProject.id ? editingProject : p
    );
    setProjectsList(updated);
    setStoredInfo('custom_projects_list', updated);
    setStoredInfo(`project_info_${editingProject.id}`, editingProject);
    setEditingProject(null);
    showToast(`Updated info for "${editingProject.title}"!`);
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030B14] text-[#F8FAFC] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#061229] border border-[#00D1FF]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#00D1FF]/15 border border-[#00D1FF]/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,209,255,0.3)]">
              <Lock className="w-8 h-8 text-[#00D1FF]" />
            </div>
            <h1 className="text-2xl font-black font-display tracking-tight text-white mb-2">
              Authorized Access Only
            </h1>
            <p className="text-xs text-slate-400">
              Enter your administrator security passkey to manage media and portfolio information.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Administrator Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter access passcode (e.g. jamil2026)..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#030814] border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D1FF] transition-colors"
                  autoFocus
                />
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#3B82F6] text-[#030B14] font-black text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,209,255,0.5)] transition-all cursor-pointer"
            >
              Sign In to Admin Panel
            </button>
          </form>

          {/* Return link */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <button
              onClick={() => onNavigate('/')}
              className="text-xs text-slate-400 hover:text-[#00D1FF] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="min-h-screen bg-[#030B14] text-[#F8FAFC] pb-24">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 bg-[#061229]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00D1FF]/15 border border-[#00D1FF]/40 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#00D1FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-white font-display">
                  Portfolio Administrator Control
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                  Authorized
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <span className="text-[#00D1FF]">mjhk6969@gmail.com</span> &bull; Route: <span className="font-mono text-white">/admin</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span className="hidden sm:inline">View Public Site</span>
            </button>
            <button
              onClick={handleLogout}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#061229] border border-[#00D1FF]/50 text-[#00D1FF] shadow-2xl flex items-center gap-3 text-xs font-bold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Admin Content */}
      <main className="max-w-[1536px] mx-auto px-4 sm:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10">
          {[
            { id: 'projects', label: 'Portfolio & Project Media', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'profile', label: 'Hero Profile Photo', icon: <User className="w-4 h-4" /> },
            { id: 'achievements', label: 'Awards & Credentials', icon: <Award className="w-4 h-4" /> },
            { id: 'sports', label: 'Sports & Games', icon: <Trophy className="w-4 h-4" /> },
            { id: 'info', label: 'Academic Mentors & Info', icon: <FileText className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#00D1FF] text-[#030B14] shadow-[0_0_20px_rgba(0,209,255,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: PROJECTS & PORTFOLIO MEDIA */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#06142E] p-6 rounded-3xl border border-white/10">
              <div>
                <h2 className="text-xl font-black text-white font-display">
                  Project Attachments &amp; Content Management
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Upload authentic project photos or banners. Public visitors see verified credential certificates or your uploaded images with ZERO public upload controls.
                </p>
              </div>
              <div className="text-xs font-mono text-[#00D1FF] bg-[#00D1FF]/10 px-3 py-1.5 rounded-xl border border-[#00D1FF]/30 w-fit">
                Public Uploads Disabled &bull; Admin Only
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsList.map((proj) => {
                const storageKey = `portfolio_${proj.id}`;
                const currentImg = getStoredImage(storageKey, proj.defaultImage);

                return (
                  <div
                    key={proj.id}
                    className="p-5 sm:p-6 rounded-3xl bg-[#060F1E] border border-white/10 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview with Upload Overlay */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 bg-[#030914] border border-white/10 group">
                        {currentImg ? (
                          <img
                            src={currentImg}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-slate-500">
                            <ImageIcon className="w-10 h-10 mb-2 stroke-1" />
                            <span className="text-[11px]">Official Credential Seal shown on public site</span>
                          </div>
                        )}

                        {currentImg && (
                          <button
                            onClick={() => {
                              removeStoredImage(storageKey);
                              showToast(`Removed custom image for ${proj.title}`);
                            }}
                            title="Remove Image"
                            className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-600/90 text-white hover:bg-rose-500 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Card Content Display */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold tracking-widest text-[#00D1FF] uppercase font-mono truncate">
                          {proj.category}
                        </span>
                        <button
                          onClick={() => setEditingProject(proj)}
                          className="text-[11px] text-slate-400 hover:text-[#00D1FF] flex items-center gap-1 cursor-pointer shrink-0"
                          title="Edit project text info"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit Info</span>
                        </button>
                      </div>

                      <h3 className="text-lg font-black text-white font-display mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-4 line-clamp-3">
                        {proj.description}
                      </p>
                      <div className="mb-4">
                        <span className="inline-block px-2.5 py-1 rounded-md border border-[#00E5FF]/30 bg-[#00E5FF]/5 text-[#00E5FF] text-[10px] font-bold tracking-wider uppercase">
                          {proj.tagPill}
                        </span>
                      </div>
                    </div>

                    {/* Admin Image Controls */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <label className="w-full py-2 px-3 rounded-xl border border-dashed border-[#00D1FF]/40 bg-[#00D1FF]/5 hover:bg-[#00D1FF]/10 text-[#00D1FF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Authentic File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) uploadImageForItem(storageKey, f);
                          }}
                        />
                      </label>

                      <form
                        onSubmit={(e: any) => {
                          e.preventDefault();
                          const val = e.target.elements.urlInput.value;
                          saveUrlForItem(storageKey, val);
                          e.target.reset();
                        }}
                        className="flex gap-1.5"
                      >
                        <input
                          name="urlInput"
                          type="url"
                          placeholder="Or paste image URL..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#030914] border border-white/15 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-[#00D1FF]"
                        />
                        <button
                          type="submit"
                          className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#00D1FF] hover:text-[#030B14] text-[11px] font-bold text-white transition-colors cursor-pointer"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: HERO PROFILE PHOTO */}
        {activeTab === 'profile' && (
          <div className="bg-[#06142E] p-6 sm:p-8 rounded-3xl border border-white/10 max-w-2xl">
            <h2 className="text-xl font-black text-white font-display mb-1">
              Hero Profile Portrait Management
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Update the main hero portrait shown on desktop and mobile. Changes are saved instantly without any public editing controls.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="relative w-44 h-56 rounded-2xl overflow-hidden border-2 border-[#00D1FF]/40 bg-[#030B14] shadow-xl shrink-0">
                <img
                  src={heroProfileImg}
                  alt="Current Profile Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 space-y-4 w-full">
                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Upload New Portrait Photo
                  </span>
                  <label className="w-full py-3 px-4 rounded-xl border border-dashed border-[#00D1FF]/40 bg-[#00D1FF]/5 hover:bg-[#00D1FF]/10 text-[#00D1FF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Choose Photo From Computer</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) {
                          uploadImageForItem('hero_profile', f, (url) => setHeroProfileImg(url));
                        }
                      }}
                    />
                  </label>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Or Enter Direct Image URL
                  </span>
                  <form
                    onSubmit={(e: any) => {
                      e.preventDefault();
                      const val = e.target.elements.profileUrlInput.value;
                      if (val) {
                        saveUrlForItem('hero_profile', val, (url) => setHeroProfileImg(url));
                        e.target.reset();
                      }
                    }}
                    className="flex gap-2"
                  >
                    <input
                      name="profileUrlInput"
                      type="url"
                      placeholder="https://example.com/jamil-portrait.jpg"
                      className="flex-1 px-3 py-2 rounded-xl bg-[#030814] border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D1FF]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#00D1FF] text-[#030B14] text-xs font-bold hover:bg-[#00E5FF] transition-colors cursor-pointer"
                    >
                      Update
                    </button>
                  </form>
                </div>

                <button
                  onClick={() => {
                    removeStoredImage('hero_profile');
                    setHeroProfileImg('/images/jamil_profile_official.jpg');
                    showToast('Reset to default official portrait');
                  }}
                  className="text-xs text-slate-400 hover:text-rose-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset to Original Official Portrait</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AWARDS & CREDENTIALS */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="bg-[#06142E] p-6 rounded-3xl border border-white/10">
              <h2 className="text-xl font-black text-white font-display">
                Credentials &amp; Certificates Media
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Upload real certificates and stage photos for your credentials. If no photo is uploaded, a verified official credential seal is shown automatically with ZERO AI artifacts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialAchievements.map((item) => {
                const storageKey = `achievement_${item.id}`;
                const currentImg = getStoredImage(storageKey);

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#060F1E] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-[#030914] border border-white/10">
                        {currentImg ? (
                          <img
                            src={currentImg}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-slate-500">
                            <Award className="w-8 h-8 mb-1.5 stroke-1 text-[#00D1FF]" />
                            <span className="text-[10px]">Verified Credential Seal Active</span>
                          </div>
                        )}

                        {currentImg && (
                          <button
                            onClick={() => {
                              removeStoredImage(storageKey);
                              showToast(`Removed certificate for ${item.title}`);
                            }}
                            className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-600/90 text-white cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <div className="text-[10px] font-bold text-[#00C4CC] uppercase tracking-wider mb-1">
                        {item.category}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400">{item.year}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10">
                      <label className="w-full py-2 px-3 rounded-lg border border-dashed border-[#00D1FF]/40 bg-[#00D1FF]/5 hover:bg-[#00D1FF]/10 text-[#00D1FF] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors">
                        <Upload className="w-3 h-3" />
                        <span>Upload Real Certificate</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) uploadImageForItem(storageKey, f);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: ACADEMIC MENTORS & INFO */}
        {activeTab === 'info' && (
          <div className="bg-[#06142E] p-6 sm:p-8 rounded-3xl border border-white/10 max-w-3xl space-y-6">
            <div>
              <h2 className="text-xl font-black text-white font-display mb-1">
                Verified Academic Records &amp; Mentor Details
              </h2>
              <p className="text-xs text-slate-400">
                Official records locked into the portfolio according to your institutional documentation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D1FF] block mb-1">
                  Higher Secondary Certificate
                </span>
                <h4 className="font-bold text-white text-sm">HSC (Humanities)</h4>
                <p className="text-xs text-slate-300 mt-1">Passing Year: <strong className="text-emerald-400">2021</strong></p>
                <p className="text-xs text-slate-300">GPA: <strong className="text-emerald-400">5.00 / 5.00</strong></p>
                <p className="text-[11px] text-slate-500 mt-1">Pirgachha Govt. College, Rangpur</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D1FF] block mb-1">
                  Secondary School Certificate
                </span>
                <h4 className="font-bold text-white text-sm">SSC (Humanities / Science)</h4>
                <p className="text-xs text-slate-300 mt-1">GPA: <strong className="text-emerald-400">4.78 / 5.00</strong></p>
                <p className="text-[11px] text-slate-500 mt-1">Jnankur High School, Rangpur</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#34D399] block">
                Academic Mentors &amp; References
              </span>
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="font-bold text-white">Dr. Mst. Marzina Begum</div>
                  <div className="text-slate-400 text-[11px]">Chairman, Dept. of Public Administration</div>
                  <div className="text-[#00D1FF] font-mono mt-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>marzinabegum80@gmail.com</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="font-bold text-white">Dr. Md. Nurul Momen</div>
                  <div className="text-slate-400 text-[11px]">Professor, Dept. of Public Administration</div>
                  <div className="text-[#00D1FF] font-mono mt-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>nurulmomen78@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: SPORTS & GAMES */}
        {activeTab === 'sports' && (
          <div className="space-y-6">
            <div className="bg-[#06142E] p-6 rounded-3xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-white font-display">
                  Sports &amp; Athletic Accolades
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  University tournament records, team captaincies, and championship achievements displayed right above the Contact section.
                </p>
              </div>
              <div className="text-xs font-mono text-[#34D399] bg-[#34D399]/10 px-3 py-1.5 rounded-xl border border-[#34D399]/30 w-fit">
                3 Tournaments Active
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsAndGamesData.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#060F1E] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold text-[#34D399] uppercase tracking-wider font-mono">
                        {item.sport}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.season}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {item.tournamentName}
                    </h4>
                    <p className="text-xs text-[#00D1FF] font-semibold mb-3">
                      {item.achievement}
                    </p>
                    <p className="text-[11px] text-slate-400 mb-4">
                      {item.team}
                    </p>

                    <div className="space-y-2 mb-4">
                      {item.keyHighlights.map((hl, hIdx) => (
                        <div key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">Role:</span>
                    <span className="font-bold text-white">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* EDIT PROJECT INFO MODAL */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#06142E] border border-[#00D1FF]/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h3 className="text-lg font-black text-white font-display">
                Edit Project Information
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProjectEdits} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, title: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914] border border-white/15 text-white text-xs focus:outline-none focus:border-[#00D1FF]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={editingProject.category}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, category: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914] border border-white/15 text-white text-xs focus:outline-none focus:border-[#00D1FF]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Tag Pill
                </label>
                <input
                  type="text"
                  value={editingProject.tagPill}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, tagPill: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914] border border-white/15 text-white text-xs focus:outline-none focus:border-[#00D1FF]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={editingProject.description}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, description: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914] border border-white/15 text-white text-xs focus:outline-none focus:border-[#00D1FF]"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#00D1FF] text-[#030B14] font-bold text-xs uppercase tracking-wider hover:bg-[#00E5FF] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,209,255,0.4)]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
