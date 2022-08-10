import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Provider from './utils/provider';
import Checkout from './Pages/Checkout';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <Order /> } />
      </Routes>
    </Provider>
  );
}

export default App;
