import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, orderStatus, orderDate, price }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <section className="order_card">
        <span data-testid={ `customer_orders__element-order-id-${id}` }>
          Pedido
          { id }
        </span>
        <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { orderStatus }
        </span>
        <div>
          <span data-testid={ `customer_orders__element-order-date-${id}` }>
            { orderDate }
          </span>
          <span>
            R$:
            {' '}
            <span data-testid={ `customer_orders__element-card-price-${id}` }>
              { price }
            </span>
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
