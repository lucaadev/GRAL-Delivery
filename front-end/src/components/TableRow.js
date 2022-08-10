import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cartContext from '../utils/context';
import sumCart from '../utils/sumCart';

function TableRow({ index, id, title, quantity, price, subTotal }) {
  const { setCartValue } = useContext(cartContext);
  const cart = JSON.parse(localStorage.getItem('cart'));
  const removeItem = () => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    const newTotal = sumCart(newCart);
    setCartValue(newTotal);
  };
  return (
    <table className="products-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        <tr key={ id }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            { index + 1 }
          </td>
          <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
            {title }
          </td>
          <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
            { quantity }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            { price }
          </td>
          <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
            { subTotal}
          </td>
          <td>
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              onClick={ () => removeItem() }
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
};

export default TableRow;
