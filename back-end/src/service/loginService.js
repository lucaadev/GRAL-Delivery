const md5 = require('md5');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateToken');
const { User } = require('../database/models');

const createToken = async (data) => {
  const token = generateToken(data);
  return { token, ...data };
};

const createLogin = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    const data = user && user.dataValues;
    const cryptoPassword = md5(password);
    
    if (!user || data.password !== cryptoPassword) throw errorThrow(404, 'Invalid data');
    const { _password, ...userData } = data;
    createToken(userData);
};

module.exports = { createLogin };