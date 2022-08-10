import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ index, id, title, quantity, price, subTotal }) {
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
  price: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default TableRow;
