const express = require('express');
const productsController = require('../controller/productsController');
const validateAuth = require('../middlewares/validateAuth');

const products = express.Router();

products.get('/', validateAuth, productsController.getAllProducts);

module.exports = products;