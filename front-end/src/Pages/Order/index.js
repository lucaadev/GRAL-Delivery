import React from 'react';
import Header from '../../components/NavBar';
import OrdersHeader from '../../components/OrdersHeader';

function Order() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header userName={ name } />
      <OrdersHeader
        orderNum="Pedido 101"
        seller="Xablau"
        orderDate="10/01/1999"
        orderStatus="Entregue"
      />
    </section>
  );
}

// - 37: customer_order_details__element-order-details-label-order-id
// - 38: customer_order_details__element-order-details-label-seller-name
// - 39: customer_order_details__element-order-details-label-order-date
// - 41: customer_order_details__element-order-table-item-number-<index>
// - 42: customer_order_details__element-order-table-name-<index>
// - 43: customer_order_details__element-order-table-quantity-<index>
// - 44: customer_order_details__element-order-table-unit-price-<index>
// - 45: customer_order_details__element-order-table-sub-total-<index>
// - 46: customer_order_details__element-order-total-price
// - 47: customer_order_details__button-delivery-check

export default Order;
