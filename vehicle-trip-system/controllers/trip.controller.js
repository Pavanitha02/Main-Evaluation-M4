const supabase=require('../config/supabase')

exports.createTrip=async(req,res)=>{
    try{
        const {customer_id,vehicle_id,passengers,distance_km}=req.body;
        const {data:vehicle}=await supabase.from('vehicles').select('*')
        .eq('id',vehicle_id).single();
        if(!vehicle.isAvailable) return res.status(400)json({message:"vehicle not available"});
        if(passengers>vehicle.allowed_passengers)
            return res.status(400).json({message:"passenger limiter exceeded" });

        await supabase.from('vehicles').update({isAvailable:false}).eq('id',vehicle_id);

        const {data,error}=await supabase.from('trips').insert([{customer_id,
            vehicle_id,passengers,distance_km
        }]);
        if(error) throw error;
        req.status(201).json(data);
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    }
    exports.endTrip=async(req,res)=>{
        const {tripId}=req.params;
        const {data:trip}=await supabase.from('trips').select('*')
        .eq('id',trip.vehicle_id).single();
        const cost=trip.distance_km*vehicle.cost_per_km;
        await supabase.from('trips').update({isCompleted:true.tripCost:cost}).eq('id',tripId);
        await supabase.from('vehicles').update({isAvailable:true}).eq('id',trip.vehicle_id);

        res.json({msg:"trip ended",cost});

    }