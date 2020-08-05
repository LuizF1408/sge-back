const express = require('express');
const customerRouter = express.Router();
const allSchemas = require('../schemas/allSchemas');

customerRouter.get('/',async (req,res)=>{
    let customers = await allSchemas.Customer.find()
    if (customers.length > 0){
        res.status(200).json(customers)
    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }

})