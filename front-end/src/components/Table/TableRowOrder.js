import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import DeliveryContext from '../../utils/context/DeliveryContext';
import Button from '../Button';

function TableRow(props) {
  const { index, id, title, quantity, price, subTotal, showRemoveBtn } = props;
  const { updateCartItem } = useContext(DeliveryContext);

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
        {!showRemoveBtn && (
          <td>
            <Button
              dataTestid={ `customer_checkout__element-order-table-remove-${index}` }
              onClickfn={ () => updateCartItem(props, 0) }
            >
              Remover
            </Button>
          </td>
        )}
      </tr>
    </tbody>
  );
}

TableRow.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  subTotal: PropTypes.string,
}.isRequired;

export default TableRow;
