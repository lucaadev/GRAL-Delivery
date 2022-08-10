const errorThrow = require('../utils/errorThrow');
const joiLogin = require('../schemas/loginSchema');

const loginValidation = (req, _res, next) => {
  const { error } = joiLogin.validate(req.body);

  if (error) throw errorThrow(400, error.message);

  next();
};

module.exports = loginValidation;