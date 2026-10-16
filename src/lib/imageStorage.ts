// Storage utility for authentic images and editable portfolio content
// Allows administrator modifications to persist locally with live updates

const STORAGE_KEY_PREFIX = 'jamil_portfolio_real_image_';
const INFO_KEY_PREFIX = 'jamil_portfolio_info_';

export const getStoredImage = (key: string, defaultFallback: string = ''): string => {
  if (typeof window === 'undefined') return defaultFallback;
  try {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${key}`);
    if (saved) return saved;
  } catch (err) {
    console.warn('Failed to read image from localStorage', err);
  }
  return defaultFallback;
};

export const setStoredImage = (key: string, dataUrl: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${key}`, dataUrl);
    window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key, dataUrl } }));
  } catch (err) {
    console.warn('Failed to save image to localStorage', err);
  }
};

export const removeStoredImage = (key: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${key}`);
    window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key, dataUrl: null } }));
  } catch (err) {
    console.warn('Failed to remove image from localStorage', err);
  }
};

export const getStoredInfo = <T>(key: string, defaultFallback: T): T => {
  if (typeof window === 'undefined') return defaultFallback;
  try {
    const saved = localStorage.getItem(`${INFO_KEY_PREFIX}${key}`);
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.warn('Failed to read info from localStorage', err);
  }
  return defaultFallback;
};

export const setStoredInfo = <T>(key: string, data: T): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${INFO_KEY_PREFIX}${key}`, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('portfolio_info_updated', { detail: { key, data } }));
  } catch (err) {
    console.warn('Failed to save info to localStorage', err);
  }
};
