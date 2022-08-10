import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../../utils/context/DeliveryContext';
import sumCart from '../../utils/helpers/sumCart';
import Input from '../Input';

function Card({ id, title, price, floatPrice, image }) {
  const { setCartValue } = useContext(DeliveryContext);
  const [itemValue, setItemValue] = useState(0);

  const updateLocalStorage = useCallback(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const checkProductCart = cart.find((item) => item.id === id);
    const newItemCart = {
      id,
      title,
      price: floatPrice,
      quantity: itemValue,
    };
    if (!checkProductCart) {
      cart.push(newItemCart);
    } else {
      checkProductCart.quantity = itemValue;
    }
    const newCart = cart.filter((item) => item.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(newCart));
    const totalCartValue = sumCart(newCart);
    setCartValue(totalCartValue);
    localStorage.setItem('cartValue', totalCartValue);
  }, [itemValue, id, floatPrice, title, setCartValue]);

  useEffect(() => updateLocalStorage(), [updateLocalStorage]);

  return (
    <section className="product-card" key={ id }>
      <span data-testid={ `customer_products__element-card-title-${id}` }>{title}</span>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
      </span>
      <img
        src={ image }
        alt="product-card"
        style={ { width: '50px' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => (itemValue > 0 ? setItemValue((prevState) => prevState - 1)
          : setItemValue(0)) }
      >
        -
      </button>
      <Input
        type="number"
        dataTestid={ `customer_products__input-card-quantity-${id}` }
        name="quantity"
        value={ itemValue }
        onChangefn={ ({ target: { value } }) => { setItemValue(Number(value)); } }
        labelText=""
      />
      {/* <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        name="quantity"
        value={ itemValue }
        onChange={ ({ target: { value } }) => { setItemValue(Number(value)); } }
      /> */}
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => setItemValue((prevState) => prevState + 1) }
      >
        +
      </button>
    </section>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  floatPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
