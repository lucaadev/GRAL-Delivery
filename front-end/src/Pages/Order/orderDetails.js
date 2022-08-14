import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/NavBar';
import OrdersHeader from '../../components/OrdersHeader';
import TableRow from '../../components/Table/TableRow';
import axiosInstance from '../../utils/axios/axiosInstance';
import formatDate from '../../utils/helpersFunctions/formatDate';

function Order() {
  const [order, setOrder] = useState([]);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

  const getOrder = useCallback(async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
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
    getOrder();
  }, [getOrder]);

  const { sale, products } = order;

  return (
    <section>
      <Header userName={ name } />
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
              />
            );
          })
        }
      </table>
      {sale && (
        <span data-testid="customer_order_details__element-order-total-price">
          Total R$:
          {' '}
          { (sale[0].totalPrice).toString().replace('.', ',') }
        </span>)}
    </section>
  );
}

export default Order;
