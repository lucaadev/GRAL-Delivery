import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import DeliveryProvider from './utils/context/DeliveryProvider';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import OrderDetails from './pages/Order/orderDetails';
import Seller from './pages/Seller';
import SellerDetails from './pages/Seller/sellerDetails';
import Management from './pages/Management';

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
        <Route path="/seller/orders/:id" element={ <SellerDetails /> } />
        <Route path="/admin/manage" element={ <Management /> } />
      </Routes>
    </DeliveryProvider>
  );
}

export default App;
