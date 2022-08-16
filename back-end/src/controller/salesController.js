const salesService = require('../service/salesService');

const createNewSale = async (req, res, next) => {
  try {
    const { userInfoToken, ...bodySale } = req.body; 
    const saleCreated = await salesService.createNewSale(bodySale);
    return res.status(201).json(saleCreated);    
  } catch (error) {
      next(error);
  }
};

const getAllSales = async (_req, res, next) => {
  try {
    const allSales = await salesService.getAllSales();
    return res.status(200).json(allSales);
  } catch (error) {
      next(error);
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const { id, key } = req.params;
    const salesById = await salesService.getSaleById(id, key);
    return res.status(200).json(salesById);
  } catch (error) {
      next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { id, key, value } = req.query;
    const saleById = await salesService.updateStatus(id, key, value);
    return res.status(200).json(saleById);
  } catch (error) {
    next(error);
  }
}

module.exports = { createNewSale, getAllSales, getSaleById, updateStatus };