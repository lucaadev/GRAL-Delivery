import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, title, price, image }) {
  return (
    <section className="product-card">
      <span data-testid={ `customer_products__element-card-title-${id}` }>{title}</span>
      <span data-testid={ `customer_products__element-card-price-${id}` }>{price}</span>
      <img
        src={ image }
        alt="product-card"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        // onClick={ }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        name="quantity"
        // value={ }
        // onChange={ }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        // onClick={ }
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
