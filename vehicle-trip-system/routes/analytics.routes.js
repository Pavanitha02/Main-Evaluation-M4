const {createClient} =require(@supabase/supabase-js)
require('dotenv').config();

const supabase=createClient(process.env.SUPABASE_URL,Process.env.SUPABASE_KEY);
module.exports=supabase;