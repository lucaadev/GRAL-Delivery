const errorThrow = require('../utils/errorThrow');
const { Product } = require('../database/models');

const getAllProducts = async () => {
    const products = await Product.findAll();
    if (!products) throw errorThrow(404, 'Products not Found');
    return products;
};

module.exports = { getAllProducts };