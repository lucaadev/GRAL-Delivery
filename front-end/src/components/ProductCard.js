import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from '../utils/context';

function Card({ id, title, price, image }) {
  const { cartValue, setCartValue } = useContext(cartContext);
  const [itemValue, setItemValue] = useState(0);
  const addItem = (name, value, productId) => {
    setItemValue(itemValue + 1);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const checkProductCart = cart.find((item) => item.id === productId);
    const newItemCart = {
      id: productId,
      title: name,
      price: value,
      quantity: 1,
    };
    if (!checkProductCart) {
      cart.push(newItemCart);
    } else {
      checkProductCart.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(
      cart,
    ));
    const teste = cart
      .reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr.price)), cartValue);
    setCartValue(teste);
  };

  const delItem = (productId) => {
    if (itemValue === 0) setItemValue(0);
    if (itemValue !== 0) setItemValue(itemValue - 1);
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach((item) => {
      if (item.id === productId && item.quantity > 0) item.quantity -= 1;
    });
    const newCart = cart.filter((item) => item.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(newCart));
    const teste = cart
      .reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr.price)), cartValue);
    setCartValue(teste);
  };

  return (
    <section className="product-card" key={ id }>
      <span data-testid={ `customer_products__element-card-title-${id}` }>{title}</span>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
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
        onClick={ () => { delItem(id); } }
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
        onClick={ () => { addItem(title, price, id); } }
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
  image: PropTypes.string.isRequired,
};

export default Card;
