const { Product } = require('../database/models');

const getAllProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
};

const getProductById = async (id) => {
    const product = await Product.findOne({ where: { id }});
    return product;
}

module.exports = { getAllProducts, getProductById };