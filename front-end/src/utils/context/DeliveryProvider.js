import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [cartValue, setCartValue] = useState(0);
  const [sale, setSale] = useState({
    userId: '',
    sellerId: '0',
    totalPrice: '',
    deliveryAddress: '',
    deliveryNumber: '',
    saleDate: Date(),
  });
  const value = React.useMemo(() => ({
    cartValue, setCartValue, sale, setSale,
  }), [sale, cartValue]);

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
