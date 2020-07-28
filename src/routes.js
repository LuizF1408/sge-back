const express = require('express');
const SellerController = require('./controllers/SellerController')
const routes = express.Router();

routes.use('/seller',SellerController)

module.exports = routes;