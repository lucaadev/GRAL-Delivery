const loginService = require('../service/loginService');

const createLogin = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const userData = await loginService.createLogin(email, password);
      res.set('token', userData.token);
      return res.status(200).json(userData);
  } catch (error) {
      next(error);
  }
};

module.exports = { createLogin };