const express = require('express');
const loginRoute = require('../routes/login.route');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use(errorHandler);

// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
