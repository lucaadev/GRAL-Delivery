const express = require('express');
const loginController = require('../controller/loginController');
const loginValidation = require('../middlewares/loginValidation');

const login = express.Router();

login.post('/', loginValidation, loginController.createLogin);

module.exports = login;