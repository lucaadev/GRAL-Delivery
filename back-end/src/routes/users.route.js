const express = require('express');
const usersController = require('../controller/usersController');

const users = express.Router();

users.get('/all', usersController.getAllUsers);
users.get('/:id', usersController.getUserById);
users.get('/', usersController.getUsersRole);
// users.get('search', usersController.getUserById);



module.exports = users;