const router=require('express').Router();
const {getAnalytics}=require('../constrollers/analytics.controller');
router.get('/',getAnalytics);
module.exports=router;