import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, orderStatus, orderDate, price }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <section className="order_card">
        <span>Pedido</span>
        <span data-testid={ `customer_orders__element-order-id-${id}` }>
          { id }
        </span>
        <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { orderStatus }
        </span>
        <div>
          <span data-testid={ `customer_orders__element-order-date-${id}` }>
            { orderDate }
          </span>
          <span data-testid={ `customer_orders__element-delivery-price-${id}` }>
            R$
            {' '}
            { price }
          </span>
        </div>
      </section>
    </Link>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderCard;
