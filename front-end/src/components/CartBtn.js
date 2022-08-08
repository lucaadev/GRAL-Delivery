import React from 'react';
import PropTypes from 'prop-types';

function CartBtn({ price }) {
  return (
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
    >
      Ver carrinho: R$
      {' '}
      {price}
    </button>
  );
}

CartBtn.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CartBtn;
