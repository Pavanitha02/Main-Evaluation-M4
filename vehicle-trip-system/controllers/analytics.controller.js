const supabase=require('../config/supabase')

exports.getAnalytics=async(req,res)=>{
    const users=await supabase.from('users'.select('*',{count:'exact',head:true});
    const vehicles=await supabase.from('vehicles').select('*',{count:'exact',head:true});
    const vehicles=await supabase.from('trips').select('*',{count:'exact',head:true});
    res.json({
        total_users:users.count,
        total_vehicles:vehicles.count,
        total_trips:trips.count
    })


}