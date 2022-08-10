import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CartBtn({ price }) {
  const navigate = useNavigate();
  const priceFormat = price.toFixed(2).replace('.', ',');
  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      disabled={ price === 0 }
      onClick={ () => navigate('/customer/checkout') }
    >
      Ver Carrinho: R$
      { ' ' }
      <span data-testid="customer_products__checkout-bottom-value">{priceFormat}</span>
    </button>
  );
}

CartBtn.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CartBtn;
