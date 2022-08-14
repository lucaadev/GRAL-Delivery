import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import DetailsDelivery from '../../components/DetailsDelivery';
import Header from '../../components/NavBar';
import Span from '../../components/Span';
import TableHead from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableRow';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import { readStorage } from '../../utils/helpersFunctions/localStorage';

function Checkout() {
  const { cartValue, sale, setSale } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();
  const cartValueFormat = cartValue.toFixed(2).replace('.', ',');
  const { name, id: userId, token } = readStorage('user', {});
  const cart = readStorage('cart', []);

  const postSale = async () => {
    const config = {
      headers: { Authorization: token },
    };
    try {
      const value = { ...sale, userId, totalPrice: cartValue, cart };
      console.log(value);
      const { data } = await axiosInstance
        .post('/sales', value, config);
      navigate(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getSellers = async () => {
    try {
      const { data } = await axiosInstance
        .get('/users/search?role=seller');
      setSellers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setSale((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => getSellers(), []);
  return (
    <section className="main-checkout">
      <Header userName={ name } />
      <span>Finalizar pedido</span>
      <section>
        <table>
          <TableHead />
          {
            cart.map((item, i) => {
              const priceFormat = `${item.price}`.replace('.', ',');
              return (
                <TableRow
                  key={ i }
                  index={ i }
                  id={ item.id }
                  title={ item.title }
                  quantity={ item.quantity }
                  price={ priceFormat }
                  subTotal={ (item.quantity * item.price).toFixed(2).replace('.', ',') }
                />
              );
            })
          }
        </table>
        <section>
          Total: R$
          <Span dataTestid="customer_checkout__element-order-total-price">
            {cartValue ? cartValueFormat : 0.00}
          </Span>
        </section>
      </section>
      <section className="details-checkout">
        <DetailsDelivery
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }
          onChangefn={ handleChange }
          sellers={ sellers }
          sellerId={ sale.sellerId }
        />

        <Button
          dataTestid="customer_checkout__button-submit-order"
          onClick={ postSale }
        >
          Finalizar pedido
        </Button>
      </section>
    </section>
  );
}

export default Checkout;
