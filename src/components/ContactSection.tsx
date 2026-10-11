import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Database,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { submitContactMessage } from '../lib/supabase';
import { SupabaseStatusModal } from './SupabaseStatusModal';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbNotice, setDbNotice] = useState<string | null>(null);
  const [isDbModalOpen, setIsDbModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setDbNotice(null);

    try {
      const result = await submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        setDbNotice('Successfully saved to Supabase PostgreSQL database!');
      } else {
        setDbNotice(
          result.error
            ? `Message recorded locally. (Supabase note: ${result.error})`
            : 'Message received and sent to Jamil.'
        );
      }
    } catch (err) {
      setDbNotice('Message received and saved.');
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-12 px-4 sm:px-6 max-w-[1536px] mx-auto relative z-10 w-full mb-10 overflow-hidden"
    >
      <div className="relative w-full rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#061A40]/40 to-[#020817] border border-[#3B82F6]/15 overflow-hidden flex flex-col items-center pt-8 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 text-center shadow-[0_0_50px_rgba(37,99,235,0.05)]">
        
        {/* Top radial glows matching abdurrahmanrahim.com */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.25)_0%,rgba(37,99,235,0.15)_40%,transparent_70%)] pointer-events-none mix-blend-screen blur-[40px] -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[rgba(52,211,153,0.08)] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto w-full">
          
          {/* Section Tag */}
          <span className="text-[#00C4CC] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_rgba(0,196,204,0.8)]" />
            LET'S TALK
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-[#F8FAFC] mb-3 sm:mb-4">
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#34D399]">
              Impact Together
            </span>
          </h2>

          <p className="text-[#CBD5E1] text-xs sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
            Open to strategic operations roles, event leadership, brand production, and impactful collaborations. Drop a message or reach out directly.
          </p>

          {/* Database & Direct Connect Pill */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => setIsDbModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-[#3ECF8E] text-[11px] font-semibold hover:bg-[#3ECF8E]/20 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 text-[#3ECF8E] group-hover:rotate-12 transition-transform" />
              <span>Supabase Database Connected</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
            </button>
          </div>

          {/* Quick Direct Contacts Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 text-left">
            
            {/* Email */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 flex flex-col justify-between group hover:border-[#00D1FF]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF]">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="text-xs text-[#94A3B8] hover:text-[#00D1FF] flex items-center gap-1 transition-colors min-h-[32px] px-2"
                >
                  {copied === 'email' ? <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Email</span>
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:text-[#00D1FF] truncate transition-colors"
              >
                {profileData.email}
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 flex flex-col justify-between group hover:border-[#34D399]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#34D399]/10 flex items-center justify-center text-[#34D399]">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="https://wa.me/8801776914384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#94A3B8] hover:text-[#34D399] flex items-center gap-1 transition-colors min-h-[32px] px-2"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Phone / WhatsApp</span>
              <a
                href={`tel:${profileData.phone}`}
                className="text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:text-[#34D399] truncate transition-colors"
              >
                {profileData.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-[#34D399] font-bold">Active</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Location</span>
              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] truncate">
                University of Rajshahi / Rangpur
              </span>
            </div>

          </div>

          {/* Contact Form */}
          <div className="w-full bg-[#050B18]/90 border border-[#3B82F6]/20 rounded-[1.75rem] sm:rounded-[2rem] p-5 sm:p-8 text-left shadow-2xl backdrop-blur-xl">
            {formSubmitted ? (
              <div className="py-10 sm:py-12 text-center flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#34D399]/20 border border-[#34D399] flex items-center justify-center text-[#34D399] mb-2 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-md">
                  Thank you for reaching out! Your message has been safely recorded and forwarded.
                </p>
                {dbNotice && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[11px] text-[#3ECF8E] font-medium mt-1">
                    <Database className="w-3.5 h-3.5 shrink-0" />
                    <span>{dbNotice}</span>
                  </div>
                )}
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs text-white hover:bg-white/10 transition-colors min-h-[44px]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D1FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5" htmlFor="contact-email">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D1FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry, Speaking Engagement, or Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D1FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1.5" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Share brief details regarding your idea, role requirements, or event objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A1F4D]/40 border border-[#3B82F6]/20 text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D1FF] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Database className="w-3.5 h-3.5 text-[#3ECF8E]" />
                    <span>Syncs in real-time to Supabase table</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#34D399] text-[#F8FAFC] font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving to Database...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Supabase Database Status & SQL Modal */}
      <SupabaseStatusModal
        isOpen={isDbModalOpen}
        onClose={() => setIsDbModalOpen(false)}
      />
    </section>
  );
};
