const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const secretKey = readFileSync('jwt.evaluation.key', 'utf8');

const configJWT = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign({ payload }, secretKey, configJWT);

const createToken = (payload) => { 
    const token = generateToken(payload);
    return { token, ...payload };
};

module.exports = { createToken, configJWT };