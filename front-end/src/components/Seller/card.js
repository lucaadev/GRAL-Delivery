/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Span from '../Span';

function SellerOrderCard({ id, orderStatus, orderDate, price, orderAddress }) {
  let statusStyle = '';
  if (orderStatus === 'Pendente') statusStyle = 'bg-[#F2D22E] p-5 rounded-md';
  if (orderStatus === 'Preparando') statusStyle = 'bg-[#d5f22e] p-5 rounded-md';
  if (orderStatus === 'Em Trânsito') statusStyle = 'bg-[#2edbf2] p-5 rounded-md';
  if (orderStatus === 'Entregue') statusStyle = 'bg-[#9aeb4e] p-5 rounded-md';
  return (
    <Link to={ `/seller/orders/${id}` }>
      <section className="seller-card">
        <section className="flex flex-row justify-around items-center w-full">
          <Span dataTestid={ `seller_orders__element-order-id-${id}` } spanClass="bg-[#F2C12E] p-5 rounded-md">
            Pedido
            {' '}
            { id }
          </Span>
          <Span dataTestid={ `seller_orders__element-delivery-status-${id}` } spanClass={ statusStyle }>
            { orderStatus }
          </Span>
          <section className="card-date-price">
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
          </section>
        </section>

        <Span dataTestid={ `seller_orders__element-card-address-${id}` } spanClass="bg-slate-50 p-1 rounded-md text-center w-full">
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
