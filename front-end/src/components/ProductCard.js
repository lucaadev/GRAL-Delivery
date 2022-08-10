import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from '../utils/context';

function Card({ id, title, price, floatPrice, image }) {
  const { setCartValue } = useContext(cartContext);
  const [itemValue, setItemValue] = useState(0);

  const addItem = (name, value, quantity, productId) => {
    setItemValue(itemValue + quantity);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const checkProductCart = cart.find((item) => item.id === productId);
    const newItemCart = {
      id: productId,
      title: name,
      price: value,
      quantity,
    };
    if (!checkProductCart) {
      cart.push(newItemCart);
    } else {
      checkProductCart.quantity += quantity;
    }
    localStorage.setItem('cart', JSON.stringify(
      cart,
    ));
    const total = cart
      .reduce((acc, curr) => acc
      + (curr.quantity * parseFloat(curr.price)), 0);
    setCartValue(total);
    localStorage.setItem('cartValue', total);
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
    const total = cart
      .reduce((acc, curr) => acc
      + (curr.quantity * parseFloat(curr.price)), 0);
    setCartValue(total);
    localStorage.setItem('cartValue', total);
  };

  // const changeItem = (name, value, quantity, productId) => {
  //   const checkProductCart = cart.find((item) => item.id === productId);
  //   if (!checkProductCart) {
  //     addItem(name, value, quantity, productId);
  //   } else {
  //     checkProductCart.quantity += quantity;
  //   }
  // };
  // const changeItem = (name, value, quantity, productId) => {
  //   setItemValue(quantity);
  //   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  //   const checkProductCart = cart.find((item) => item.id === productId);
  //   const newItemCart = {
  //     id: productId,
  //     title: name,
  //     price: value,
  //     quantity,
  //   };
  //   if (!checkProductCart) {
  //     cart.push(newItemCart);
  //   } else {
  //     checkProductCart.quantity += quantity;
  //   }
  //   localStorage.setItem('cart', JSON.stringify(
  //     cart,
  //   ));
  //   const total = cart
  //     .reduce((acc, curr) => acc
  //     + (curr.quantity * parseFloat(curr.price)), 0);
  //   setCartValue(total);
  //   localStorage.setItem('cartValue', total);
  // };

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
        onClick={ () => { delItem(id); } }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        name="quantity"
        value={ itemValue }
        onChange={ (e) => {
          console.log(e.target.value);
          changeItem(title, floatPrice, Number(e.target.value), id);
        } }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => { addItem(title, floatPrice, 1, id); } }
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
