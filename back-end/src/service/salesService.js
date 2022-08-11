const { Sale, User } = require('../database/models');

const createNewSale = async (body) => {
  const saleCreated = await Sale.create({ ...body, sale_date: Date(), status: 'pendente' });
  return saleCreated;
  };

const getAllSales = async (payload) => {
  const sales = await Sale.findAll({
    ...payload,
    include: [      
      { model: User, as: 'userId', attributes: { exclude: ['password'] } },
      { model: User, as: 'sellerId', attributes: { exclude: ['password'] } },
    ],
  });
  return sales;
};

const getSaleById = async (id, key) => {
  const saleById = await getAllSales({ where: { [key]: id } });
  return saleById;
};

module.exports = { createNewSale, getAllSales, getSaleById };