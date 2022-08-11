import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function OrdersHeader({ id, orderNum, seller, orderDate, orderStatus }) {
  return (
    <section>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { orderNum }
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { seller }
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { orderDate }
      </span>
      <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { orderStatus }
      </span>

      <Button
        dataTestid="customer_order_details__button-delivery-check"
        // onClickfn={ }
      >
        Marcar como entregue
      </Button>
    </section>
  );
}

OrdersHeader.propTypes = {
  id: PropTypes.string.isRequired,
  orderNum: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrdersHeader;
