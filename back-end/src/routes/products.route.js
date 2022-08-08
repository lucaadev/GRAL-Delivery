const express = require('express');
const productsController = require('../controller/productsController');

const products = express.Router();

products.get('/', productsController.getAllProducts);

module.exports = products;