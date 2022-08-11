import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [cartValue, setCartValue] = useState(0);
  const [cart, setCart] = useState({
    products: [],
    totalValue: 0,
  });
  // criar o useEffect do cart recebendo um array de produtos e o valor total
  // e fazer um get do localStorage;
  const [sale, setSale] = useState({
    userId: '',
    sellerId: '0',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  const value = useMemo(() => ({
    cart,
    cartValue,
    sale,
    setCart,
    setCartValue,
    setSale,
  }), [sale, cartValue, cart]);

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
