const express = require('express');
const SellerController = require('./controllers/SellerController')
const CustumerController = require('./controllers/CustomerController')
const routes = express.Router();

routes.use('/seller',SellerController);
routes.use('/costumer',CustumerController);

module.exports = routes;