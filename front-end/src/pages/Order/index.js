import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import OrderCard from '../../components/Order/card';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import formatDate from '../../utils/helpers/formatDate';

function Order() {
  const { user, orders, setOrders } = useContext(DeliveryContext);
  const navigate = useNavigate();
  const getAllOrders = useCallback(async (userData) => {
    const config = {
      headers: { Authorization: userData.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sales/${userData.id}/user_id`, config);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }, [setOrders]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) getAllOrders(user);
  }, [user, navigate, getAllOrders]);

  return (
    <section
      style={ { backgroundColor: 'rgba(242,210,46, 0.95)' } }
      className="w-full h-screen"
    >
      <Header />
      <section className="main-order">
        <section className="main-order-cards">
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
      </section>
    </section>
  );
}

export default Order;
