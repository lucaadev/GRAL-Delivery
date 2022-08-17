import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import OrdersHeader from '../../components/Order/header';
import Span from '../../components/Span';
import TableRow from '../../components/Table/TableRow';
import axiosInstance from '../../utils/axios/axiosInstance';
import formatDate from '../../utils/helpersFunctions/formatDate';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  const getOrder = useCallback(async (user) => {
    const config = {
      headers: { Authorization: user.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sp/${id}/search?key=id`, config);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getOrder(user);
  }, [getOrder]);

  const { sale, products } = order;

  return (
    <section>
      <Header />
      <table>
        {
          sale && sale.map((e) => (
            <OrdersHeader
              key={ e.id }
              id={ e.id }
              orderNum={ e.id }
              seller={ e.idSeller.name }
              orderDate={ formatDate(e.saleDate) }
              orderStatus={ e.status }
              receivedBtn
            />
          ))
        }
        {
          products && products.map((product, i) => {
            const priceFormat = `${product.price}`.replace('.', ',');
            return (
              <TableRow
                key={ i }
                index={ i }
                id={ product.id }
                title={ product.name }
                quantity={ product.quantity }
                price={ priceFormat }
                subTotal={
                  (product.quantity * product.price).toFixed(2).replace('.', ',')
                }
                showRemoveBtn
              />
            );
          })
        }
      </table>
      {sale && (
        <Span dataTestid="customer_order_details__element-order-total-price">
          Total R$:
          {' '}
          { (sale[0].totalPrice).toString().replace('.', ',') }
        </Span>)}
    </section>
  );
}

export default OrderDetails;
