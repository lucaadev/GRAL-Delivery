const { Sale, User } = require('../database/models');

const createNewSale = async (body) => {
  const saleCreated = await Sale.create(body);
  console.log({ saleCreated });
  return saleCreated;
  };

const getAllSales = async () => {
  const sales = await Sale.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: User,
// as: 'seller',
// through: {
//         attributes: { exclude: ['password'] } } },
    ],
  });
  return sales;
};

module.exports = { createNewSale, getAllSales };
