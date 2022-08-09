const { Sale, User } = require('../database/models');

const createNewSale = async (body) => {
  const saleCreated = await Sale.create(body);
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

module.exports = { createNewSale, getAllSales };
