const registerService = require('../service/registerService');

const createRegister = async (req, res, next) => {
  try {
      const newRegister = await registerService.createRegister(req.body);
      res.set('token', newRegister.token);
      return res.status(201).json(newRegister);
  } catch (error) {
      next(error);
  }
};

module.exports = { createRegister };