const express = require('express');
const sellerRouter = express.Router()
sellerRouter.get('/',(req,res)=>{
    res.json({message:'Logou'})
})
module.exports = sellerRouter;