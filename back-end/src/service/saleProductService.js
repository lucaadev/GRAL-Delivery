const { Sale, SaleProduct, Product } = require('../database/models');

const getSaleProducts = async (id, key) => {
  const saleProducts = await SaleProduct.findOne({
    where: { [key]: id },
    include: [
      { model: Product, as: 'product', through: { attributes: [] } },
      { model: Sale, as: 'sale', through: { attributes: [] } },
    ],
  })
  return saleProducts;
}

module.exports = { getSaleProducts };
