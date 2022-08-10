import React from 'react';
import PropTypes from 'prop-types';

function CartBtn({ price }) {
  const priceFormat = price.toString().replace('.', ',');
  return (
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
    >
      {priceFormat}
    </button>
  );
}

CartBtn.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CartBtn;
