import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
        auth: {
            storage: SecureStore,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false
        }
    }
)