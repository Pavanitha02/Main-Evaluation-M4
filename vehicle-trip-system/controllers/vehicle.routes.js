const supabase=require('../config/supabase')

exports.createVehicle=async(req,res)=>{
    try{
        const {
            model,allowed_passengers,const_per_km,owner_id
        }=req.body;
        const {data,error}=await supabase.from('vehicles').insert([{
            model,allowed_passengers,
            const_per_km,owner_id
        }]);
        if(error) throw error;
        res.status(201).json(data);
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
    }

    exports.assignDriver=async(req,res)=>{
        const {vehicleId}=req.params;
        const {driver_id}=req.body;
        const {data,error}=await
        supabase.from('vehicles').update({driver_id})
        .eq('id',vehicleId);
        if(error) return res.status(400).json
        ({message:error.message});
    }
    exports.getVehicle=async(req,res)=>{
        const {data}=await supabase.from('vehicles')
        .select(*)
        .eq('id',req.params.vehicleId);
        req.json(data);
    }