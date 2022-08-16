const express = require('express');
const usersController = require('../controller/usersController');
const validateAuth = require('../middlewares/validateAuth');

const users = express.Router();

users.get('/', usersController.getAllUsers);
users.get('/search', usersController.getUsersRole);
users.get('/:id', usersController.getUserById);
users.post('/registration', validateAuth, usersController.createNewRegistration);
users.delete('/:id', validateAuth, usersController.deleteUser);

module.exports = users;
