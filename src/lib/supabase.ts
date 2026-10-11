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

export interface PortfolioImage {
  id: string;
  title: string;
  category: string;
  caption: string;
  image_url: string;
  aspect_ratio?: string;
  section: string;
  sort_order: number;
  created_at?: string;
}

/**
 * The 4 canonical given authentic images of Md. Jamil Hosen Khandakar
 */
export const GIVEN_IMAGES: PortfolioImage[] = [
  {
    id: 'jamil-portrait',
    title: 'Md. Jamil Hosen Khandakar',
    category: 'Executive Leadership & HR Governance',
    caption:
      'Official Executive Committee Portrait — Vice President, Resource Management & Planning at Rajshahi University Business Club',
    image_url: '/images/jamil_profile_official.jpg',
    aspect_ratio: '3/4',
    section: 'hero-profile',
    sort_order: 1,
  },
  {
    id: 'casecation-award',
    title: 'CaseCation Season 2 Grand Finale',
    category: 'National Business Case Competition & Production',
    caption:
      'Recognition at CaseCation Season 2 Grand Finale Stage Ceremony — Led 15-member Branding & Production team producing 450+ assets',
    image_url: '/images/casecation_award.jpg',
    aspect_ratio: '16/10',
    section: 'portfolio-casecation',
    sort_order: 2,
  },
  {
    id: 'hult-team-ru',
    title: 'Hult Prize at University of Rajshahi',
    category: 'Global Social Entrepreneurship Challenge',
    caption:
      'Hult Prize Organizing Committee on Campus Grounds — Deputy Campus Director coordinating 50+ members and 750+ participating student teams',
    image_url: '/images/hult_team_ru.jpg',
    aspect_ratio: '16/10',
    section: 'portfolio-hult',
    sort_order: 3,
  },
  {
    id: 'pathchinhno-social',
    title: 'Project Pathochinhno (পথ চিহ্ন)',
    category: 'Environmental & Community Impact',
    caption:
      'Youth environmental volunteers along the Padma River in Rajshahi — The Green FootPrint (170+ trees planted) & Mission BluePulse',
    image_url: '/images/pathchinhno_social.jpg',
    aspect_ratio: '16/10',
    section: 'portfolio-pathchinhno',
    sort_order: 4,
  },
];

/**
 * Fetch portfolio images from Supabase database.
 * If Supabase table exists and has rows, returns them.
 * If empty or table pending, falls back to GIVEN_IMAGES.
 */
export async function fetchPortfolioImages(): Promise<PortfolioImage[]> {
  try {
    const { data, error } = await supabase
      .from('portfolio_images')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      // Table might not exist yet in Postgres schema cache
      console.info('Supabase portfolio_images notice:', error.message);
      return GIVEN_IMAGES;
    }

    if (data && data.length > 0) {
      return data as PortfolioImage[];
    }

    // Table exists but is empty -> automatically seed given images
    await storePortfolioImages(GIVEN_IMAGES);
    return GIVEN_IMAGES;
  } catch (err) {
    console.warn('Error fetching portfolio images from Supabase:', err);
    return GIVEN_IMAGES;
  }
}

/**
 * Store or upsert given images into the Supabase database
 */
export async function storePortfolioImages(
  images: PortfolioImage[] = GIVEN_IMAGES
): Promise<{ success: boolean; count?: number; error?: string }> {
  try {
    const records = images.map((img, idx) => ({
      id: img.id,
      title: img.title,
      category: img.category,
      caption: img.caption,
      image_url: img.image_url,
      aspect_ratio: img.aspect_ratio || '16/10',
      section: img.section || 'portfolio',
      sort_order: img.sort_order ?? idx + 1,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase
      .from('portfolio_images')
      .upsert(records, { onConflict: 'id' });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, count: records.length };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error storing images';
    return { success: false, error: msg };
  }
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

-- 3. Given Portfolio Images Storage Table
CREATE TABLE IF NOT EXISTS public.portfolio_images (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  caption TEXT,
  image_url TEXT NOT NULL,
  aspect_ratio TEXT DEFAULT '16/10',
  section TEXT DEFAULT 'portfolio',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;

-- Allow public read, insert, and update
CREATE POLICY "Allow public read on portfolio_images"
  ON public.portfolio_images FOR SELECT USING (true);

CREATE POLICY "Allow public insert on portfolio_images"
  ON public.portfolio_images FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on portfolio_images"
  ON public.portfolio_images FOR UPDATE USING (true);

-- Pre-seed the 4 Given Authentic Images into Database
INSERT INTO public.portfolio_images (id, title, category, caption, image_url, aspect_ratio, section, sort_order)
VALUES
  ('jamil-portrait', 'Md. Jamil Hosen Khandakar', 'Executive Leadership & HR Governance', 'Official Executive Committee Portrait — Vice President, Resource Management & Planning at Rajshahi University Business Club', '/images/jamil_profile_official.jpg', '3/4', 'hero-profile', 1),
  ('casecation-award', 'CaseCation Season 2 Grand Finale', 'National Business Case Competition & Production', 'Recognition at CaseCation Season 2 Grand Finale Stage Ceremony — Led 15-member Branding & Production team producing 450+ assets', '/images/casecation_award.jpg', '16/10', 'portfolio-casecation', 2),
  ('hult-team-ru', 'Hult Prize at University of Rajshahi', 'Global Social Entrepreneurship Challenge', 'Hult Prize Organizing Committee on Campus Grounds — Deputy Campus Director coordinating 50+ members and 750+ participating student teams', '/images/hult_team_ru.jpg', '16/10', 'portfolio-hult', 3),
  ('pathchinhno-social', 'Project Pathochinhno (পথ চিহ্ন)', 'Environmental & Community Impact', 'Youth environmental volunteers along the Padma River in Rajshahi — The Green FootPrint (170+ trees planted) & Mission BluePulse', '/images/pathchinhno_social.jpg', '16/10', 'portfolio-pathchinhno', 4)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  caption = EXCLUDED.caption,
  image_url = EXCLUDED.image_url,
  aspect_ratio = EXCLUDED.aspect_ratio,
  section = EXCLUDED.section,
  sort_order = EXCLUDED.sort_order;
`;
