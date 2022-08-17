import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import sumCart from '../helpers/sumCart';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [cartValue, setCartValue] = useState(0);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const [sale, setSale] = useState({
    userId: '',
    sellerId: '0',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const updateCartItem = useCallback((product, quantity) => {
    const shouldDeleteItem = quantity < 1;
    let newCart = [...cart];
    const checkProductCart = newCart.find((item) => item.id === product.id);
    if (!checkProductCart) {
      if (shouldDeleteItem) return;
      const newItemCart = {
        ...product,
        quantity,
      };
      newCart.push(newItemCart);
    } else if (shouldDeleteItem) {
      newCart = cart.filter((item) => item.id !== product.id);
    } else {
      checkProductCart.quantity = quantity;
    }
    setCart([...newCart]);
    localStorage.setItem('cart', JSON.stringify(newCart));

    const totalCartValue = sumCart(newCart);
    setCartValue(totalCartValue);
    localStorage.setItem('cartValue', totalCartValue);
  }, [cart]);

  useEffect(() => {
    const cartDataStorage = JSON.parse(localStorage.getItem('cart'));
    const userDataStorage = localStorage.getItem('user');
    if (cartDataStorage) {
      setCart([...cartDataStorage]);
    }
    if (userDataStorage && userDataStorage !== '') {
      setUser(JSON.parse(userDataStorage));
    }
  }, []);

  const value = useMemo(() => ({
    cart,
    cartValue,
    orders,
    sale,
    user,
    setCart,
    setCartValue,
    setOrders,
    setSale,
    setUser,
    updateCartItem,
  }), [cart, cartValue, orders, sale, updateCartItem, user]);

  return (
    <DeliveryContext.Provider value={ value }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default DeliveryProvider;
