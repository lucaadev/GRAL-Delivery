/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import DeliveryContext from '../../utils/context/DeliveryContext';
import Button from '../Button';

function TableRow(props) {
  const { index, id, title, quantity, price, subTotal, showRemoveBtn } = props;
  const { updateCartItem } = useContext(DeliveryContext);

  return (
    <tbody>
      <tr key={ id } className="table-row">
        <td
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          className="px-2 py-4"
        >
          { index + 1 }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
          className="px-2 py-4"
        >
          {title }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          className="px-2 py-4"
        >
          { quantity }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          className="px-2 py-4"
        >
          R$
          { ' ' }
          { price }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          className="px-2 py-4"
        >
          R$
          { ' ' }
          { subTotal}
        </td>
        {!showRemoveBtn && (
          <td className="px-2 py-4">
            <Button
              dataTestid={ `customer_checkout__element-order-table-remove-${index}` }
              onClickfn={ () => updateCartItem(props, 0) }
              classNameBtn="remove-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
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
