import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awwasvietvndwqnlbbwi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3d2FzdmlldHZuZHdxbmxiYndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NDQ3NTgsImV4cCI6MjAwMjMyMDc1OH0.Fi9nBMCjVyZ1B2lh19VjUqvpaSsEBBmDi0EBDkbWojg"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase