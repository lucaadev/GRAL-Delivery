const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secret_key';

const configJWT = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign({ payload }, secretKey, configJWT);

module.exports = { generateToken, configJWT };