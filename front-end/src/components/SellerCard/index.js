import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Span from '../Span';

function SellerOrderCard({ id, orderStatus, orderDate, price, orderAddress }) {
  return (
    <Link to={ `/seller/orders/${id}` }>
      <section className="seller_order_card">
        <Span dataTestid={ `seller_orders__element-order-id-${id}` }>
          Pedido
          { id }
        </Span>
        <Span dataTestid={ `seller_orders__element-delivery-status-${id}` }>
          { orderStatus }
        </Span>
        <div>
          <Span dataTestid={ `seller_orders__element-order-date-${id}` }>
            { orderDate }
          </Span>
          <Span>
            R$:
            {' '}
            <Span dataTestid={ `seller_orders__element-card-price-${id}` }>
              { price }
            </Span>
          </Span>
        </div>
        <Span dataTestid={ `seller_orders__element-card-address-${id}` }>
          { orderAddress}
        </Span>
      </section>
    </Link>
  );
}

SellerOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  orderAddress: PropTypes.string.isRequired,
};

export default SellerOrderCard;
