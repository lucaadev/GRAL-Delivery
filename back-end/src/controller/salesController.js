const salesService = require('../service/salesService');

const createNewSale = async (req, res, next) => {
  try {
    const { userInfoToken,...bodySale } = req.body; 
    const saleCreated = await salesService.createNewSale(bodySale);
    return res.status(201).json(saleCreated);    
  } catch (error) {
      next(error);
  }
};

const getAllSales = async (req, res, next) => {
  try {
      const allSales = await salesService.getAllSales();
      return res.status(200).json(allSales);
  } catch (error) {
      next(error);
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { key } = req.body;
      const salesById = await salesService.getSaleById(id, key);
      return res.status(200).json(salesById);
  } catch (error) {
      next(error);
  }
};

module.exports = { createNewSale, getAllSales, getSaleById };