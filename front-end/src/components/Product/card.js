import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../../utils/context/DeliveryContext';
import Button from '../Button';
import Input from '../Input';
import Span from '../Span';

function Card(props) {
  const { id, title, price, image } = props;
  const priceFormat = `${price}`.replace('.', ',');
  const { updateCartItem, cart } = useContext(DeliveryContext);
  const [itemValue, setItemValue] = useState(0);

  useEffect(() => {
    const itemOnCart = cart.find((item) => item.id === id);
    if (itemOnCart) {
      setItemValue(itemOnCart.quantity);
    }
  }, [cart, id]);

  const updateItemValue = (value) => {
    const finalValue = (value > 0) ? value : 0;
    setItemValue(finalValue);
    updateCartItem(props, finalValue);
  };

  return (
    <section className="product-card" key={ id }>
      <img
        src={ image }
        alt="product-card"
        className="card-image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <section className="product-card-bottom">
        <Span dataTestid={ `customer_products__element-card-title-${id}` }>{title}</Span>
        <Span dataTestid={ `customer_products__element-card-price-${id}` }>
          R$:
          { ' ' }
          {priceFormat}
        </Span>
        <section className="product-card-bottom-buttons">
          <Button
            dataTestid={ `customer_products__button-card-rm-item-${id}` }
            onClickfn={ () => updateItemValue(itemValue - 1) }
            classNameBtn="product-card-button"
          >
            -
          </Button>
          <Input
            inputClass="product-card-input"
            type="number"
            dataTestid={ `customer_products__input-card-quantity-${id}` }
            name="quantity"
            value={ itemValue }
            onChangefn={ ({ target: { value } }) => { updateItemValue(value); } }
            labelText=""
          />
          <Button
            dataTestid={ `customer_products__button-card-add-item-${id}` }
            onClickfn={ () => updateItemValue(itemValue + 1) }
            classNameBtn="product-card-button"
          >
            +
          </Button>
        </section>
      </section>
    </section>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Card;
