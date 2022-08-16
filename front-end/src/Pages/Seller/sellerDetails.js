import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/NavBar';
import DeliveryContext from '../../utils/context/DeliveryContext';
import SallesHeader from '../../components/SellerOrdersHeader';
import Span from '../../components/Span';
import TableRow from '../../components/Table/TableRowSeller';
import TableHead from '../../components/Table/TableHead';
import axiosInstance from '../../utils/axios/axiosInstance';
import formatDate from '../../utils/helpersFunctions/formatDate';

function SellerDetails() {
  const { user } = useContext(DeliveryContext);
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  const getOrder = useCallback(async (userData) => {
    const config = {
      headers: { Authorization: userData.token },
    };
    try {
      const { data } = await axiosInstance
        .get(`/sp/${id}/search?key=id`, config);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(order);

  useEffect(() => {
    if (Object.keys(user).length !== 0) getOrder(user);
  }, [user, getOrder]);

  const { sale, products } = order;

  return (
    <section>
      <Header />
      <table>
        {
          sale && sale.map((e) => (
            <SallesHeader
              key={ e.id }
              id={ e.id }
              orderNum={ e.id }
              orderDate={ formatDate(e.saleDate) }
              orderStatus={ e.status }
            />
          ))
        }
      </table>
      <table>
        <TableHead />
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
        <Span dataTestid="seller_order_details__element-order-total-price">
          Total R$:
          {' '}
          { (sale[0].totalPrice).toString().replace('.', ',') }
        </Span>)}
    </section>
  );
}

export default SellerDetails;
