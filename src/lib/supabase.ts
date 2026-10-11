import { createClient } from '@supabase/supabase-js';

// Configuration: uses Vite environment variables or falls back to provided project credentials
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://gmxytkbkljwgbjreczcz.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_1dNRJNsvSW9mAm9G7GckJg__AqYKBvq';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at?: string;
}

export interface EndorsementEntry {
  id?: string;
  name: string;
  role_title?: string;
  organization?: string;
  message: string;
  rating?: number;
  created_at?: string;
}

/**
 * Submit contact message to Supabase database.
 * Table expected: 'contact_messages'
 */
export async function submitContactMessage(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('contact_messages').insert([
      {
        name: data.name.trim(),
        email: data.email.trim(),
        subject: data.subject?.trim() || 'General Inquiry',
        message: data.message.trim(),
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.warn('Supabase insert note:', error.message);
      // Return error detail so UI can display friendly fallback or message
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown database error';
    console.error('Supabase submission exception:', err);
    return { success: false, error: errorMsg };
  }
}

/**
 * Fetch visitor endorsements / recommendations from Supabase
 */
export async function fetchEndorsements(): Promise<EndorsementEntry[]> {
  try {
    const { data, error } = await supabase
      .from('endorsements')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.warn('Endorsements fetch note:', error.message);
      return [];
    }

    return data || [];
  } catch (err) {
    console.warn('Error fetching endorsements:', err);
    return [];
  }
}

/**
 * Submit a quick endorsement / visitor recommendation
 */
export async function submitEndorsement(entry: {
  name: string;
  role_title?: string;
  organization?: string;
  message: string;
  rating?: number;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('endorsements').insert([
      {
        name: entry.name.trim(),
        role_title: entry.role_title?.trim() || 'Colleague / Visitor',
        organization: entry.organization?.trim() || '',
        message: entry.message.trim(),
        rating: entry.rating || 5,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to submit endorsement';
    return { success: false, error: errorMsg };
  }
}

/**
 * Check if the Supabase instance is accessible
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean;
  message: string;
}> {
  try {
    // Ping with a lightweight query to check API reachability
    const { error } = await supabase.from('contact_messages').select('id').limit(1);
    
    if (error) {
      // If table doesn't exist yet, it's still connected to Supabase project!
      if (error.code === 'PGRST205' || error.message.includes('relation') || error.message.includes('not find')) {
        return {
          connected: true,
          message: 'Connected to Supabase project (ready to create tables).',
        };
      }
      return { connected: true, message: `Connected to Supabase: ${error.message}` };
    }
    return { connected: true, message: 'Supabase connected and database tables ready!' };
  } catch (err) {
    return { connected: false, message: 'Could not connect to Supabase.' };
  }
}

/**
 * Supabase SQL setup script for user reference
 */
export const SUPABASE_SQL_SETUP = `-- Supabase SQL Schema for Portfolio
-- 1. Contact Messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for visitors
CREATE POLICY "Allow public inserts to contact_messages"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- 2. Endorsements / Recommendations table
CREATE TABLE IF NOT EXISTS public.endorsements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role_title TEXT,
  organization TEXT,
  message TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.endorsements ENABLE ROW LEVEL SECURITY;

-- Allow public read & insert
CREATE POLICY "Allow public read on endorsements"
  ON public.endorsements FOR SELECT USING (true);

CREATE POLICY "Allow public insert on endorsements"
  ON public.endorsements FOR INSERT WITH CHECK (true);
`;
