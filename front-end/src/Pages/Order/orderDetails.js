import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/NavBar';
import OrdersHeader from '../../components/OrdersHeader';
import Button from '../../components/Button';
import DeliveryContext from '../../utils/context/DeliveryContext';
import axiosInstance from '../../utils/axios/axiosInstance';

function Order() {
  const { cartValue } = useContext(DeliveryContext);
  const [order, setOrder] = useState([]);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const getOrder = useCallback(async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
      params: { id, key: 'id' },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${id}/id`, config);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => getOrder(), [getOrder]);
  const { totalPrice } = order[0];

  return (
    <section>
      <Header userName={ name } />
      {
        order.map((e) => (
          <OrdersHeader
            key={ e.id }
            id={ e.id }
            orderNum={ e.id }
            seller={ e.IdSeller.name }
            orderDate={ e.saleDate }
            orderStatus={ e.status }
          />
        ))
      }
      <Button dataTestid="customer_order_details__element-order-total-price">
        Total R$:
        {' '}
        { totalPrice }
      </Button>
    </section>
  );
}

export default Order;
