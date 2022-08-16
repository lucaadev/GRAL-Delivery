const express = require('express');
const salesController = require('../controller/salesController');
const validateAuth = require('../middlewares/validateAuth');

const sales = express.Router();

// sales.get('/', validateAuth, salesController.getAllSales);
sales.post('/', validateAuth, salesController.createNewSale);
sales.get('/:id/:key', validateAuth, salesController.getSaleById);
sales.patch('/search', salesController.updateStatus);


module.exports = sales;