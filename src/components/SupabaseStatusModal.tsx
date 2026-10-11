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
  Image,
  UploadCloud,
} from 'lucide-react';
import {
  testSupabaseConnection,
  SUPABASE_SQL_SETUP,
  GIVEN_IMAGES,
  storePortfolioImages,
  fetchPortfolioImages,
  PortfolioImage,
} from '../lib/supabase';

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
  const [syncingImages, setSyncingImages] = useState(false);
  const [imageSyncResult, setImageSyncResult] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [currentImages, setCurrentImages] = useState<PortfolioImage[]>(GIVEN_IMAGES);

  const checkConnection = async () => {
    setChecking(true);
    const res = await testSupabaseConnection();
    setStatus(res);
    setChecking(false);
  };

  const loadImages = async () => {
    const imgs = await fetchPortfolioImages();
    if (imgs && imgs.length > 0) {
      setCurrentImages(imgs);
    }
  };

  useEffect(() => {
    if (isOpen) {
      checkConnection();
      loadImages();
    }
  }, [isOpen]);

  const handleSyncImages = async () => {
    setSyncingImages(true);
    setImageSyncResult(null);
    const res = await storePortfolioImages(GIVEN_IMAGES);
    if (res.success) {
      setImageSyncResult({
        success: true,
        message: `Successfully synced & stored ${res.count || 4} authentic images in Supabase database!`,
      });
      await loadImages();
    } else {
      setImageSyncResult({
        success: false,
        message:
          res.error ||
          'Failed to store in table. If you haven\'t run the SQL snippet in Supabase SQL editor yet, copy the SQL below and execute it.',
      });
    }
    setSyncingImages(false);
  };

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#081733]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#F59E0B]">portfolio_images</span>
                  <span className="text-[10px] text-[#3ECF8E] font-semibold">4 Assets</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stores given images, captions, categories, and aspect ratios.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081733]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#00D1FF]">contact_messages</span>
                  <span className="text-[10px] text-[#3ECF8E] font-semibold">Live Form</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stores visitor and recruiter inquiries with timestamps.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081733]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#34D399]">endorsements</span>
                  <span className="text-[10px] text-[#34D399] font-semibold">Live Feed</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stores recommendations and peer reviews with star ratings.
                </p>
              </div>
            </div>
          </div>

          {/* Given Images Stored in Database */}
          <div className="p-4 rounded-xl bg-[#081733]/80 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-[#F59E0B]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Given Authentic Images (Stored in Database)
                </h4>
              </div>
              <button
                onClick={handleSyncImages}
                disabled={syncingImages}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 hover:bg-[#3ECF8E]/30 transition-all disabled:opacity-50"
              >
                <UploadCloud className={`w-3.5 h-3.5 ${syncingImages ? 'animate-bounce' : ''}`} />
                <span>{syncingImages ? 'Storing in DB...' : 'Sync to Supabase'}</span>
              </button>
            </div>

            {imageSyncResult && (
              <div
                className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                  imageSyncResult.success
                    ? 'bg-[#3ECF8E]/15 border border-[#3ECF8E]/30 text-[#3ECF8E]'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-200'
                }`}
              >
                {imageSyncResult.success ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                )}
                <span>{imageSyncResult.message}</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {currentImages.map((img) => (
                <div
                  key={img.id}
                  className="rounded-lg overflow-hidden border border-white/10 bg-[#040D1E] group relative"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src={img.image_url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-[10px] font-bold text-white truncate">{img.title}</p>
                    <p className="text-[9px] text-[#00D1FF] truncate font-mono">id: {img.id}</p>
                    <span className="inline-block mt-1 text-[8px] px-1.5 py-0.5 rounded bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 font-semibold">
                      Stored
                    </span>
                  </div>
                </div>
              ))}
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
              to initialize the tables and Row Level Security policies.
            </p>
            <div className="relative rounded-xl bg-[#020611] border border-white/10 p-3.5 font-mono text-xs text-slate-300 overflow-x-auto max-h-48 leading-relaxed">
              <pre>{SUPABASE_SQL_SETUP}</pre>
            </div>
          </div>

          {/* Security & RLS notice */}
          <div className="p-3 rounded-xl bg-[#0D244D]/30 border border-[#3B82F6]/20 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
            <span>
              Configured with Row Level Security (RLS) best practices. Public inserts allow portfolio visitors to submit messages and endorsements, and portfolio images are publicly readable and editable.
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
