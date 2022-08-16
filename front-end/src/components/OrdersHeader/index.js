import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios/axiosInstance';
import Button from '../Button';

function OrdersHeader({ orderNum, seller, orderDate, orderStatus }) {
  const { id } = useParams();
  const updateStatus = async (status) => {
    try {
      await axiosInstance
        .patch(`/sales/search?id=${id}&key=id&value=${status}`);
    } catch (error) {
      console.log(error);
    }
  };
  const testid = 'customer_order_details__element-order-details-label-delivery-status';
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
        <th
          data-testid={ testid }
        >
          { orderStatus }
        </th>

        <th>
          <Button
            dataTestid="customer_order_details__button-delivery-check"
            disabled={ orderStatus !== 'Em Trânsito' }
            onClickfn={ () => updateStatus('Entregue') }
          >
            Marcar como entregue
          </Button>
        </th>
      </tr>
    </thead>
  );
}

OrdersHeader.propTypes = {
  orderNum: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrdersHeader;
