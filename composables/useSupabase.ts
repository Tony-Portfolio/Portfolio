import { createClient } from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';
export default function useSupabase() {
    const config = useRuntimeConfig();

    const supabaseUrl = config.public.supabase_url;
    const supabaseKey = config.public.supabase_key;

    const supabase = createClient(supabaseUrl, supabaseKey);
    const supabaseClient = SupabaseClient;
    return {
        supabase,
        supabaseClient,
    }
}