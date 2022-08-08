import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ id, title, price, image }) {
  // console.log(image);

  const [itemValue, setItemValue] = useState(0);

  const addItem = () => {
    setItemValue(itemValue + 1);
  };

  const delItem = () => {
    if (itemValue === 0) setItemValue(0);
    if (itemValue !== 0) setItemValue(itemValue - 1);
  };

  return (
    <section className="product-card" key={ id }>
      <span data-testid={ `customer_products__element-card-title-${id}` }>{title}</span>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        {' '}
        {price}
      </span>
      <img
        src={ image }
        alt="product-card"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ delItem }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        name="quantity"
        value={ itemValue }
        onChange={ (e) => { setItemValue(Number(e.target.value)); } }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ addItem }
      >
        +
      </button>
    </section>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
