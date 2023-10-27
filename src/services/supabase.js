import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ezigozyahsylihhpewhy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6aWdvenlhaHN5bGloaHBld2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMDg4NzcsImV4cCI6MjAxMzc4NDg3N30.gmAOtgb1jBji4V-8HQzQBKwf-tvLnOp3knHnD1M4r1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
