import { createClient } from '@supabase/supabase-js';

const supabaseUrlRaw = import.meta.env.VITE_SUPABASE_URL;
const supabaseUrl = supabaseUrlRaw && supabaseUrlRaw.startsWith('/')
    ? `${window.location.origin}${supabaseUrlRaw}`
    : supabaseUrlRaw;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'tn-innovations-auth',
    }
});
