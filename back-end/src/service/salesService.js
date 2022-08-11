const { Sale, User, SaleProduct } = require('../database/models');

const createNewSale = async (body) => {
  const { cart } = body;
  console.log(cart);
  const saleCreated = await Sale.create({ ...body, saleDate: Date(), status: 'Pendente' });
  console.log(saleCreated);
  const saleProducts = cart.map((item) => {
    console.log(item);
    SaleProduct.create({ sale_id: saleCreated.id, product_id: item.id, quantity: item.quantity});
  })
  await Promise.all(saleProducts);
  return saleCreated;
  };

const getAllSales = async (payload) => {
  const sales = await Sale.findAll({
    ...payload,
    include: [      
      { model: User, as: 'IdUser', attributes: { exclude: ['password'] } },
      { model: User, as: 'IdSeller', attributes: { exclude: ['password'] } },
    ],
  });
  return sales;
};

const getSaleById = async (id, key) => {
  const saleById = await getAllSales({ where: { [key]: id } });
  return saleById;
};

module.exports = { createNewSale, getAllSales, getSaleById };