import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Span from '../Span';

function OrderCard({ id, orderStatus, orderDate, price }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <section className="order_card">
        <Span dataTestid={ `customer_orders__element-order-id-${id}` }>
          Pedido
          { id }
        </Span>
        <Span dataTestid={ `customer_orders__element-delivery-status-${id}` }>
          { orderStatus }
        </Span>
        <div>
          <Span dataTestid={ `customer_orders__element-order-date-${id}` }>
            { orderDate }
          </Span>
          <Span>
            R$:
            {' '}
            <Span dataTestid={ `customer_orders__element-card-price-${id}` }>
              { price }
            </Span>
          </Span>
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
