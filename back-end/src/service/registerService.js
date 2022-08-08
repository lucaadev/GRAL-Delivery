const md5 = require('md5');
const errorThrow = require('../utils/errorThrow');
const { generateToken } = require('../utils/generateToken');
const { User } = require('../database/models');

const createToken = async (data) => {
  const token = generateToken(data);
  return { token, ...data };
};

const createRegister = async (body) => {
  const { email, name, password } = body;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw errorThrow(409, 'User already exists');

  const cryptoPassword = md5(password);
  const newUser = { name, email, password: cryptoPassword, role: 'customer' };

  const userCreated = await User.create(newUser);
  const { password: omitPassword, ...userData } = userCreated.dataValues;
  return createToken(userData);
  };

module.exports = { createRegister };