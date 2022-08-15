import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import DeliveryProvider from './utils/context/DeliveryProvider';
import Checkout from './Pages/Checkout';
import Order from './Pages/Order';
import OrderDetails from './Pages/Order/orderDetails';
import Seller from './Pages/Seller';

function App() {
  return (
    <DeliveryProvider>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <Order /> } />
        <Route path="/seller/orders" element={ <Seller /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      </Routes>
    </DeliveryProvider>
  );
}

export default App;
