const requests={}
module.exports=(req,res,next)=>{
    const ip=req.ip, now=Date.now();
    if(!requests[ip]) requests[ip]=[];
    requests[ip]=requests[ip]
.filter(t=>now-t<60000);
if(requests[ip].length>=3) return res.status(429).json({msg:"soo many requests"});
requests[ip].push(now);
next();
}