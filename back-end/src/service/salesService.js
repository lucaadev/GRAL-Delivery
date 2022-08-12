 const { Sale, User, SaleProduct, Product } = require('../database/models');

const createNewSale = async (body) => {
  const { cart } = body;
  const saleCreated = await Sale.create({ ...body, saleDate: Date(), status: 'Pendente' });
  const saleProducts = cart.map((item) => SaleProduct
    .create({ saleId: saleCreated.id, productId: item.id, quantity: item.quantity }));
  await Promise.all(saleProducts);
  return saleCreated;
  };

const getAllSales = async (payload) => {
  const sales = await Sale.findAll({
    ...payload,
    include: [      
      { model: User, as: 'idUser', attributes: { exclude: ['password'] } },
      { model: User, as: 'idSeller', attributes: { exclude: ['password'] } },
    ],
  });
  return sales;
};

const getSaleById = async (id, key) => {
  const saleById = await getAllSales({ where: { [key]: id } });
  return saleById;
};

const getSaleProducts = async (id, key) => {
  const sp = await SaleProduct.findOne({
    where: { [key]: id },
    include: [
      { model: Product, as: 'product', through: { attributes: [] } },
      { model: Sale, as: 'sale', through: { attributes: [] } },
    ],
  })
}

module.exports = { createNewSale, getAllSales, getSaleById, getSaleProducts };