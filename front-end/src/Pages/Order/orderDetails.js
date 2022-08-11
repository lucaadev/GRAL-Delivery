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

export default Order;
