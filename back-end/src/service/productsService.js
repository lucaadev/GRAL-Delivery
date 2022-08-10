const { Product } = require('../database/models');

const getAllProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
};

module.exports = { getAllProducts };