const registerService = require('../service/registerService');

const createRegister = async (req, res, next) => {
  try {
      const newRegister = await registerService.createRegister(req.body);
      return res.status(201).json(newRegister);
  } catch (error) {
      next(error);
  }
};

module.exports = { createRegister };