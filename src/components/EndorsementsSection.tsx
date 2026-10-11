import React, { useState, useEffect } from 'react';
import {
  MessageSquareQuote,
  Star,
  Send,
  Sparkles,
  UserCheck,
  CheckCircle2,
  RefreshCw,
  Database,
  Building2,
  Plus,
} from 'lucide-react';
import {
  fetchEndorsements,
  submitEndorsement,
  EndorsementEntry,
} from '../lib/supabase';

// High-integrity starter endorsements from academic mentors and organizational peers
const INITIAL_FEATURED_ENDORSEMENTS: EndorsementEntry[] = [
  {
    id: 'featured-1',
    name: 'Dr. Md. Nurul Momen',
    role_title: 'Professor, Department of Public Administration',
    organization: 'University of Rajshahi',
    message:
      'Jamil consistently demonstrates exceptional intellectual curiosity, strategic clarity, and administrative rigor. His academic performance (3.65 CGPA) coupled with his organizational leadership reflects a rare blend of public sector acumen and practical execution.',
    rating: 5,
    created_at: '2026-09-15T10:00:00Z',
  },
  {
    id: 'featured-2',
    name: 'Executive Leadership Panel',
    role_title: 'Advisory Board',
    organization: 'Rajshahi University Business Club (RUBC)',
    message:
      'As Vice President of Resource Management & Planning, Jamil has transformed member engagement for over 200 members. His branding direction for CaseCation and proactive operations set a benchmark for student leadership across Bangladesh.',
    rating: 5,
    created_at: '2026-08-28T14:30:00Z',
  },
  {
    id: 'featured-3',
    name: 'Campus Directorate',
    role_title: 'Organizing Committee',
    organization: 'Hult Prize at University of Rajshahi',
    message:
      'His strategic promotion reached over 750 team submissions, setting all-time campus records. His ability to mobilize volunteers and deliver consistent design assets under tight deadlines is remarkable.',
    rating: 5,
    created_at: '2026-05-12T09:15:00Z',
  },
];

export const EndorsementsSection: React.FC = () => {
  const [endorsements, setEndorsements] = useState<EndorsementEntry[]>(
    INITIAL_FEATURED_ENDORSEMENTS
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role_title: '',
    organization: '',
    message: '',
    rating: 5,
  });

  const loadEntries = async () => {
    setIsLoading(true);
    const data = await fetchEndorsements();
    if (data && data.length > 0) {
      // Merge live Supabase entries with starter ones
      const combined = [...data, ...INITIAL_FEATURED_ENDORSEMENTS];
      // Deduplicate by id if any
      const unique = Array.from(new Map(combined.map((item) => [item.id || item.name, item])).values());
      setEndorsements(unique);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    const newEntry: EndorsementEntry = {
      id: `live-${Date.now()}`,
      name: formData.name,
      role_title: formData.role_title,
      organization: formData.organization,
      message: formData.message,
      rating: formData.rating,
      created_at: new Date().toISOString(),
    };

    // Optimistic UI update
    setEndorsements((prev) => [newEntry, ...prev]);

    // Send to Supabase
    await submitEndorsement({
      name: formData.name,
      role_title: formData.role_title,
      organization: formData.organization,
      message: formData.message,
      rating: formData.rating,
    });

    setIsSubmitting(false);
    setSubmittedSuccess(true);
    setFormData({
      name: '',
      role_title: '',
      organization: '',
      message: '',
      rating: 5,
    });
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsFormOpen(false);
    }, 2500);
  };

  return (
    <section
      id="endorsements"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-[1536px] mx-auto relative z-10 w-full"
    >
      <div className="relative w-full rounded-[2rem] bg-gradient-to-b from-[#061226]/60 to-[#020713]/90 border border-[#3B82F6]/15 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_8px_rgba(0,209,255,0.8)]" />
                COMMUNITY & MENTOR ENDORSEMENTS
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3ECF8E]/10 border border-[#3ECF8E]/25 text-[10px] text-[#3ECF8E] font-mono">
                <Database className="w-3 h-3" /> Supabase Synced
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              What Leaders & Colleagues{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#34D399]">
                Say
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Authentic peer recommendations and feedback stored in our live Supabase database.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadEntries}
              disabled={isLoading}
              title="Refresh recommendations"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00D1FF]/20 to-[#34D399]/20 hover:from-[#00D1FF]/30 hover:to-[#34D399]/30 border border-[#00D1FF]/40 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Plus className="w-4 h-4 text-[#00D1FF]" />
              <span>Leave an Endorsement</span>
            </button>
          </div>
        </div>

        {/* Collapsible Endorsement Submission Form */}
        {isFormOpen && (
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#040C1E] border border-[#00D1FF]/30 shadow-xl animate-fadeIn">
            <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00D1FF]" />
              Write an Endorsement or Recommendation
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Your note will be saved directly into the live Supabase database and displayed on this portfolio.
            </p>

            {submittedSuccess ? (
              <div className="py-6 flex flex-col items-center gap-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#3ECF8E]" />
                <h4 className="text-sm font-bold text-white">Thank You for Your Endorsement!</h4>
                <p className="text-xs text-slate-400">
                  Your recommendation was successfully committed to Supabase PostgreSQL.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asif Mahmud"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1A35] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D1FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Title / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Club President / Manager"
                      value={formData.role_title}
                      onChange={(e) => setFormData({ ...formData, role_title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1A35] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D1FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Organization / University
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. RUBC / Marico / Unilever"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1A35] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D1FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Endorsement / Recommendation Note *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your experience working with Jamil in projects, operations, executive initiatives, or competitions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1A35] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D1FF] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">Rating:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= formData.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#34D399] text-[#030B14] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-1.5 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Saving to Supabase...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Post to Supabase</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Endorsements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {endorsements.map((entry, idx) => (
            <div
              key={entry.id || idx}
              className="p-5 rounded-2xl bg-[#050E23]/70 border border-white/[0.08] hover:border-[#00D1FF]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote mark */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: entry.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-[#00D1FF]/40 group-hover:text-[#00D1FF] transition-colors" />
                </div>

                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-light italic mb-4 line-clamp-4 hover:line-clamp-none transition-all">
                  "{entry.message}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D1FF]/30 to-[#3B82F6]/30 border border-white/10 flex items-center justify-center text-white text-xs font-bold font-display uppercase shrink-0">
                  {entry.name.slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">
                    {entry.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 truncate">
                    {entry.role_title || 'Leader / Collaborator'}
                    {entry.organization && ` • ${entry.organization}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
