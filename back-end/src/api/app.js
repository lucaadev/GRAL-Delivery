const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/login.route');
const registerRoute = require('../routes/register.route');
const productsRoute = require('../routes/products.route');
const salesRoute = require('../routes/sales.route');
const usersRoute = require('../routes/users.route');
const saleProductsRoute = require('../routes/saleProduct.route');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(express.static(`${__dirname}/../..`));

app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productsRoute);
app.use('/sales', salesRoute);
app.use('/users', usersRoute);
app.use('/sale_products', saleProductsRoute);
app.use(errorHandler);

module.exports = app;
