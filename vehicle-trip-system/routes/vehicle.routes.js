const router=require('express').Router();
const {createVehicle.assignDriver.getVehicle}=require('../controllers/vehicle.controller');
const rateLimiter=require('..middleware/rateLimiter');
router.post('/add'.rateLimiter.createVehicle);
router.patch('/vehicleId',assignDriver);
roouter.get('/:vehicleId',getVehicle);;
module.exports=router;