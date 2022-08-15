import React, { useCallback, useContext, useEffect } from 'react';
import Header from '../../components/NavBar';
import SellerOrderCard from '../../components/SellerCard';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import formatDate from '../../utils/helpersFunctions/formatDate';

function SellerOrder() {
  const { orders, setOrders } = useContext(DeliveryContext);

  const getAllOrders = useCallback(async (user) => {
    const config = {
      headers: { Authorization: user.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${user.id}/seller_id`, config);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }, [setOrders]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getAllOrders(user);
  }, [getAllOrders]);

  console.log(orders);

  return (
    <section>
      <Header />
      {
        orders.length !== 0 && orders.map((
          {
            id, status, saleDate, totalPrice, deliveryAddress,
          },
        ) => (
          <SellerOrderCard
            key={ id }
            id={ id }
            orderStatus={ status }
            orderDate={ formatDate(saleDate) }
            orderAddress={ deliveryAddress }
            price={ totalPrice.toString().replace('.', ',') }
          />
        ))
      }
    </section>
  );
}

export default SellerOrder;
