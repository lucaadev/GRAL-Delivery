const express = require('express');
const usersController = require('../controller/usersController');

const users = express.Router();

users.get('/', usersController.getUsersRole);
// users.get('search', usersController.getUserById);
users.get('/:id', usersController.getUserById);

module.exports = users;