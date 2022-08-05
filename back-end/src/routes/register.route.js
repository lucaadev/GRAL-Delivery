const express = require('express');
const registerController = require('../controller/registerController');

const register = express.Router();

register.post('/', registerController.createRegister);

module.exports = register;