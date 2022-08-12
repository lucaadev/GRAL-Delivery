import React, { useEffect, useState } from 'react';
import Header from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import axiosInstance from '../../utils/axios/axiosInstance';

function Order() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const userId = JSON.parse(localStorage.getItem('userId'));
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    try {
      const { data } = await axiosInstance
        .get('/sales', config, { params: { userId, key: 'user_id' } });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getAllOrders(), []);
  console.log(orders);

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
