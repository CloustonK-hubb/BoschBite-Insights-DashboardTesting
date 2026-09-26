import {createClient} from "@supabase/supabase-js"

console.log('ENV CHECK:', import.meta.env);
export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_ANON_KEY
);