const jwt = require('jsonwebtoken');
const { configJWT } = require('../utils/generateToken');
const errorThrow = require('../utils/errorThrow');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET || 'secret_key';
const messageUnauthorized = errorThrow(401, 'Token Not Found');
const messageInvalidToken = errorThrow(401, 'Expired Or Invalid Token');

const validateAuth = (req, _res, next) => {
    const token = req.headers.authorization;
    
    if (!token) next(messageUnauthorized);

    jwt.verify(token, secretKey, configJWT.algorithm, (error, userInfo) => {
        if (error) next(messageInvalidToken);
        req.userInfo = userInfo;
    });    
    next();
};

module.exports = validateAuth;