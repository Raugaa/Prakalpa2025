import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL) {
  throw new Error('Missing environment variable SUPABASE_URL');
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);