 const { Sale, User, SaleProduct } = require('../database/models');

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

const updateStatus = async (id, key, value) => {
  const updatedSale = await Sale.update({ status: value }, {
    where: {
      [key]: id
    }
  });
  return updatedSale;
}

module.exports = { createNewSale, getAllSales, getSaleById, updateStatus };