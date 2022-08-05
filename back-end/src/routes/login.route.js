const express = require('express');
const loginController = require('../controller/loginController');

const login = express.Router();

login.post('/', loginController.createLogin);

module.exports = login;