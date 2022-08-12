import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [cartValue, setCartValue] = useState(0);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
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
    user,
    setCart,
    setCartValue,
    setSale,
    setUser,
  }), [cart, cartValue, sale, user]);

  console.log('context', user);

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
