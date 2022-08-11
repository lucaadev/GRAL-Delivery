const express = require('express');
const usersController = require('../controller/usersController');

const users = express.Router();

users.get('/', usersController.getAllUsers);
users.get('/search', usersController.getUsersRole);
users.get('/:id', usersController.getUserById);




module.exports = users;