import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { setStoredImage, removeStoredImage, getStoredImage } from '../lib/imageStorage';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  storageKey: string;
  title: string;
  subtitle?: string;
  currentImage?: string;
  onImageUpdated?: (newUrl: string) => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  storageKey,
  title,
  subtitle,
  currentImage,
  onImageUpdated,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(() => getStoredImage(storageKey, currentImage || ''));
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Image file size should be under 10MB.');
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreviewUrl(result);
      setStoredImage(storageKey, result);
      setSuccess(true);
      if (onImageUpdated) onImageUpdated(result);
      setTimeout(() => setSuccess(false), 3000);
    };
    reader.onerror = () => {
      setError('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim()) return;

    setError(null);
    setPreviewUrl(imageUrlInput.trim());
    setStoredImage(storageKey, imageUrlInput.trim());
    setSuccess(true);
    if (onImageUpdated) onImageUpdated(imageUrlInput.trim());
    setImageUrlInput('');
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleRemove = () => {
    removeStoredImage(storageKey);
    setPreviewUrl('');
    if (onImageUpdated) onImageUpdated('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#071329] border border-[#00D1FF]/30 rounded-2xl p-6 shadow-2xl text-[#F8FAFC]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00D1FF] uppercase tracking-wider mb-1">
              <Upload className="w-3.5 h-3.5" />
              <span>Replace with Real Image</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
            {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Image Preview */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Image Preview
          </label>
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-[#030B14] flex items-center justify-center group">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt={title}
                className="w-full h-full object-contain bg-black/40"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-slate-500">
                <ImageIcon className="w-12 h-12 mb-2 stroke-1" />
                <span className="text-xs">No custom photo uploaded yet</span>
              </div>
            )}

            {previewUrl && (
              <button
                onClick={handleRemove}
                title="Remove uploaded image"
                className="absolute top-2 right-2 p-2 rounded-lg bg-rose-600/90 text-white hover:bg-rose-500 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Success / Error Alerts */}
        {success && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Real image updated and saved successfully!</span>
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Upload Options */}
        <div className="space-y-4">
          {/* File input button */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3 px-4 rounded-xl border border-dashed border-[#00D1FF]/40 bg-[#00D1FF]/5 hover:bg-[#00D1FF]/10 text-[#00D1FF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Choose Photo from Device</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] uppercase font-semibold text-slate-500">Or Paste Image URL</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* URL Input */}
          <form onSubmit={handleUrlSubmit} className="flex gap-2">
            <input
              type="url"
              placeholder="https://example.com/real-certificate.jpg"
              value={imageUrlInput}
              onChange={(e) => setImageUrlInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-[#030B14] border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D1FF]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#00D1FF] text-[#030B14] font-bold text-xs hover:bg-[#00E5FF] transition-colors"
            >
              Apply
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
