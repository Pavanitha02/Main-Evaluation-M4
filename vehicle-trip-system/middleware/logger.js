const fs=require('fs');
module.exports=(req,res,next)=>{
    fs.appendFileSync('logs.txt',`${newDate().toISOString()} | ${req.method} |${req.url}\n`);
     next();
}