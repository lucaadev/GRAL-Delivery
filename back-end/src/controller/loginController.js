const loginService = require('../service/loginService');

const createLogin = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const loginData = await loginService.createLogin(email, password);
      return res.status(200).json(loginData);
  } catch (error) {
      next(error);
  }
};

module.exports = { createLogin };