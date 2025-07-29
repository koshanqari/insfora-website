import { supabase } from './supabaseClient';

export const testSupabaseConnection = async () => {
  console.log('Testing Supabase connection...');
  
  try {
    // Test 1: Check if we can connect
    const { data, error } = await supabase
      .from('volunteer')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Connection test failed:', error);
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (err) {
    console.error('❌ Supabase connection failed:', err);
    return false;
  }
}; 