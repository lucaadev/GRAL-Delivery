import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function SellerOrdersHeader({ orderNum, orderDate, orderStatus }) {
  return (
    <thead>
      <tr>
        <th
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { orderNum }
        </th>

        <th
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { orderDate }
        </th>
        <th
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { orderStatus }
        </th>

        <th>
          <Button dataTestid="seller_order_details__button-preparing-check">
            Preparar pedido
          </Button>
        </th>

        <th>
          <Button
            dataTestid="seller_order_details__button-dispatch-check"
            disabled={ orderStatus === 'Pendente' }
          >
            Saiu pra entrega
          </Button>
        </th>
      </tr>
    </thead>
  );
}

SellerOrdersHeader.propTypes = {
  orderNum: PropTypes.number.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default SellerOrdersHeader;
