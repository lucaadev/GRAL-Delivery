const saleProductService = require('../service/saleProductService');

const getSaleProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { key } = req.query;
    const salesProducts = await saleProductService.getSaleProducts(id, key);
    return res.status(200).json(salesProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getSaleProducts };
