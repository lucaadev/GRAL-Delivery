import React from 'react';
import PropTypes from 'prop-types';

function TableRowSeller(props) {
  const { index, id, title, quantity, price, subTotal } = props;

  return (
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
      </tr>
    </tbody>
  );
}

TableRowSeller.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  subTotal: PropTypes.string,
}.isRequired;

export default TableRowSeller;
