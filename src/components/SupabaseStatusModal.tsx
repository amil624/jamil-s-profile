import React, { useState, useEffect } from 'react';
import {
  Database,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  X,
  Code2,
  Table,
  ShieldCheck,
} from 'lucide-react';
import { testSupabaseConnection, SUPABASE_SQL_SETUP } from '../lib/supabase';

interface SupabaseStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseStatusModal: React.FC<SupabaseStatusModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [checking, setChecking] = useState(false);
  const [status, setStatus] = useState<{
    connected: boolean;
    message: string;
  } | null>(null);
  const [copiedSql, setCopiedSql] = useState(false);

  const checkConnection = async () => {
    setChecking(true);
    const res = await testSupabaseConnection();
    setStatus(res);
    setChecking(false);
  };

  useEffect(() => {
    if (isOpen) {
      checkConnection();
    }
  }, [isOpen]);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SETUP);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#061226] border border-[#3B82F6]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0A1A3A]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 flex items-center justify-center text-[#3ECF8E]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                Supabase Database
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30">
                  Active
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                https://gmxytkbkljwgbjreczcz.supabase.co
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto custom-scrollbar">
          {/* Connection Status Card */}
          <div className="p-4 rounded-xl bg-[#0B1E40]/50 border border-[#3B82F6]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {checking ? (
                <RefreshCw className="w-5 h-5 text-[#00D1FF] animate-spin" />
              ) : status?.connected ? (
                <CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
              <div>
                <p className="text-sm font-semibold text-white">
                  {checking
                    ? 'Probing Supabase Endpoint...'
                    : status?.connected
                    ? 'Connected to Supabase'
                    : 'Connection Pending'}
                </p>
                <p className="text-xs text-slate-400">
                  {status ? status.message : 'Ready to communicate with PostgreSQL.'}
                </p>
              </div>
            </div>
            <button
              onClick={checkConnection}
              disabled={checking}
              className="px-3 py-1.5 rounded-lg border border-white/20 text-xs text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${checking ? 'animate-spin' : ''}`} />
              <span>Test Ping</span>
            </button>
          </div>

          {/* Database Tables Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-[#00D1FF]" />
              Database Tables Integrated
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#081733]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#00D1FF]">contact_messages</span>
                  <span className="text-[10px] text-[#3ECF8E] font-semibold">Live in Contact Form</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stores visitor and recruiter inquiries (name, email, subject, message, created_at).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081733]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#34D399]">endorsements</span>
                  <span className="text-[10px] text-[#34D399] font-semibold">Interactive Feed</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stores live recommendations and peer endorsements with star ratings.
                </p>
              </div>
            </div>
          </div>

          {/* SQL Setup Helper */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#3ECF8E]" />
                Supabase SQL Editor Script (Tables & RLS)
              </span>
              <button
                onClick={handleCopySql}
                className="text-xs text-[#00D1FF] hover:text-white flex items-center gap-1 transition-colors px-2.5 py-1 rounded-md bg-[#00D1FF]/10 border border-[#00D1FF]/20"
              >
                {copiedSql ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                    <span className="text-[#3ECF8E]">Copied SQL!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy SQL</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Run this in your{' '}
              <a
                href="https://supabase.com/dashboard/project/gmxytkbkljwgbjreczcz/sql"
                target="_blank"
                rel="noreferrer"
                className="text-[#3ECF8E] hover:underline inline-flex items-center gap-0.5"
              >
                Supabase SQL Editor <ExternalLink className="w-2.5 h-2.5" />
              </a>{' '}
              if you haven't created the tables yet. Public insert policies are already included.
            </p>
            <div className="relative rounded-xl bg-[#020611] border border-white/10 p-3.5 font-mono text-xs text-slate-300 overflow-x-auto max-h-48 leading-relaxed">
              <pre>{SUPABASE_SQL_SETUP}</pre>
            </div>
          </div>

          {/* Security & RLS notice */}
          <div className="p-3 rounded-xl bg-[#0D244D]/30 border border-[#3B82F6]/20 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
            <span>
              Configured with Row Level Security (RLS) best practices. Public inserts allow portfolio visitors to submit messages and endorsements without requiring authentication.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0A1A3A]/40 flex items-center justify-between">
          <a
            href="https://supabase.com/dashboard/project/gmxytkbkljwgbjreczcz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#3ECF8E] hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <span>Open Supabase Dashboard</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
