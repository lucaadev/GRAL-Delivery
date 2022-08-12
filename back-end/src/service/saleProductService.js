const { SaleProduct } = require('../database/models');
const productService = require('./productsService');
const saleService = require('./salesService');

const getSaleProducts = async (id, key) => {
  const sale = await saleService.getSaleById(id, key);
  const saleProducts = await SaleProduct.findAll({
    where: { saleId: id },
  });
  const products = await Promise.all(saleProducts.map(async ({ productId, quantity }) => {
    const { dataValues } = await productService.getProductById(productId);
    return { ...dataValues, quantity };
  }));
  const obj = {
    sale,
    products,
  };
  return obj;
};

module.exports = { getSaleProducts };
