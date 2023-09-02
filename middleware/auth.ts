import { createClient } from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';
export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.fullPath.includes('/dashboard') && !to.fullPath.includes('/dashboard/login')) {

        const config = useRuntimeConfig();

        const supabaseUrl = config.public.supabase_url;
        const supabaseKey = config.public.supabase_key;

        const supabase = createClient(supabaseUrl, supabaseKey);

        const { data: session } = await supabase.auth.getSession()
        const isAuthenticated = session.session !== null;

        if (!isAuthenticated) {
            return navigateTo('/dashboard/login');
        } else if (isAuthenticated) {
            try {
            } catch (error) {
                console.error("Error fetching user data: ", error);
            }
        }
    }
});
