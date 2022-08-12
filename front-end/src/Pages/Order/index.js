import React, { useCallback, useContext, useEffect } from 'react';
import Header from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';

function Order() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { orders, setOrders } = useContext(DeliveryContext);

  const getAllOrders = useCallback(async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${userId}/user_id`, config);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }, [userId, setOrders]);

  useEffect(() => getAllOrders(), [getAllOrders]);

  return (
    <section>
      <Header userName={ name } />
      {
        orders && orders.map(({ id, status, saleDate, totalPrice }) => (
          <OrderCard
            key={ id }
            id={ id }
            orderStatus={ status }
            orderDate={ saleDate }
            price={ totalPrice }
          />
        ))
      }
      {/* <OrderCard id={ 1 } orderStatus="Entregue" orderDate="10/10/2020" price={ 100 } /> */}
    </section>
  );
}

export default Order;
