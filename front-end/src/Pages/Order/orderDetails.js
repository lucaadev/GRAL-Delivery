import React, { useContext } from 'react';
import Header from '../../components/NavBar';
import OrdersHeader from '../../components/OrdersHeader';
import Button from '../../components/Button';
import DeliveryContext from '../../utils/context/DeliveryContext';

function Order() {
  const { cartValue } = useContext(DeliveryContext);
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header userName={ name } />
      <OrdersHeader
        id="1"
        orderNum="Pedido 101"
        seller="Xablau"
        orderDate="10/01/1999"
        orderStatus="Entregue"
      />
      <Button dataTestid="customer_order_details__element-order-total-price">
        Total R$:
        {' '}
        { cartValue }
      </Button>
    </section>
  );
}

export default Order;
