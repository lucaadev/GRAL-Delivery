import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function OrdersHeader({ id, orderNum, seller, orderDate, orderStatus }) {
  return (
    <thead>
      <tr>

        <th
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { orderNum }
        </th>

        <th
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { seller }
        </th>

        <th
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { orderDate }
        </th>
        <th data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { orderStatus }
        </th>

        <th>
          <Button
            dataTestid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </Button>
        </th>

      </tr>
    </thead>
  );
}

OrdersHeader.propTypes = {
  id: PropTypes.number.isRequired,
  orderNum: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrdersHeader;
