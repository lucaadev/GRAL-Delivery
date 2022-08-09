import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from './context';

function Provider({ children }) {
  const [cartValue, setCartValue] = useState(0);
  const value = React.useMemo(() => ({
    cartValue, setCartValue,
  }), [cartValue]);

  return (
    <cartContext.Provider value={ value }>
      {children}
    </cartContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Provider;
