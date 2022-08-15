import React, { useCallback, useContext, useEffect } from 'react';
import Header from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import formatDate from '../../utils/helpersFunctions/formatDate';

function Order() {
  const { orders, setOrders } = useContext(DeliveryContext);

  const getAllOrders = useCallback(async (user) => {
    const config = {
      headers: { Authorization: user.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${user.id}/user_id`, config);
      console.log({ data });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }, [setOrders]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getAllOrders(user);
  }, [getAllOrders]);

  return (
    <section>
      <Header />
      {
        orders.length !== 0 && orders.map(({ id, status, saleDate, totalPrice }) => (
          <OrderCard
            key={ id }
            id={ id }
            orderStatus={ status }
            orderDate={ formatDate(saleDate) }
            price={ totalPrice.toString().replace('.', ',') }
          />
        ))
      }
    </section>
  );
}

export default Order;
