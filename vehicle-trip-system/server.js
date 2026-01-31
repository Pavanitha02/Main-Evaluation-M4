require ('dotenv').config();
const express=require('express');
const logger=require('./middleware/logger');
const notFound=require('./middleware/notFound');

const app=express();
app.use(express.json());
app.use(logger);

app.use('/vehicles',require('../routes/vehicle.routes'));
app.use('/trips',require('../routes/trips.routes'));
app.use('/vehicles',require('../routes/vehicle.routes'));



app.use(notFound);
app.listen(process.env.PORT,()=>console.log("server running"));
