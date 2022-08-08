const productsService = require('../service/productsService');

const getAllProducts = async (req, res, next) => {
  try {
      const allProducts = await productsService.getAllProducts();
      return res.status(200).json(allProducts);
  } catch (error) {
      next(error);
  }
};

module.exports = { getAllProducts };