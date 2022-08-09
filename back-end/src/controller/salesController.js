const salesService = require('../service/salesService');

const createNewSale = async (req, res, next) => {
  try {
      const saleCreated = await salesService.createNewSale(req.body);
      return res.status(201).json(saleCreated);
  } catch (error) {
      next(error);
  }
};

const getAllSales = async (req, res, next) => {
  try {
      const allSales = await salesService.getAllSales();
      console.log(allSales);
      return res.status(200).json(allSales);
  } catch (error) {
    console.log(error);
      next(error);
  }
};

module.exports = { createNewSale, getAllSales };