import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Span from '../Span';

function CartBtn({ price }) {
  const navigate = useNavigate();
  const priceFormat = price.toFixed(2).replace('.', ',');

  return (
    <Button
      dataTestid="customer_products__button-cart"
      disabled={ price === 0 }
      onClickfn={ () => {
        navigate('/customer/checkout');
      } }
    >
      Ver Carrinho: R$
      { ' ' }
      <Span dataTestid="customer_products__checkout-bottom-value">{priceFormat}</Span>
    </Button>
  );
}

CartBtn.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CartBtn;
