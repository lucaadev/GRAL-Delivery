const loginService = require('../service/loginService');

const createLogin = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const userData = await loginService.createLoginAndToken(email, password);
      return res.status(200).json(userData);
  } catch (error) {
      next(error);
  }
};

module.exports = { createLogin };