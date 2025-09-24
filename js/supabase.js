// js/supabase.js

const { createClient } = supabase;

const SUPABASE_URL = "https://sursennpdzqvdxfajzdt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cnNlbm5wZHpxdmR4ZmFqemR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MzI0ODYsImV4cCI6MjA3NDMwODQ4Nn0.85XSNF48z2oIf8POVpfcGNbNtFzzSF5qGjR5iMA-Hn0";

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
