import React, { useContext, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import DetailsDelivery from '../../components/DetailsDelivery';
import Header from '../../components/Header';
import Span from '../../components/Span';
import TableHead from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableRow';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import schemaCheckout from '../../utils/schemas/schemaCheckout';

function Checkout() {
  const {
    user,
    setCartValue,
    cartValue,
    sale,
    setSale,
    cart } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const alert = useAlert();
  const navigate = useNavigate();
  const cartValueFormat = cartValue.toFixed(2).replace('.', ',');

  const postSale = async () => {
    const config = {
      headers: { Authorization: user.token },
    };
    try {
      const value = { ...sale, userId: user.id, totalPrice: cartValue, cart };
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

  const checkDeliveryForm = async () => {
    try {
      await schemaCheckout.validate(sale);
      postSale();
    } catch (error) {
      alert.show(error.message);
    }
  };

  useEffect(() => {
    if (Object.keys(user).length === 0) navigate('/login');
    const cartValueStorage = JSON.parse(localStorage.getItem('cartValue'));
    setCartValue(cartValueStorage);
    getSellers();
  }, [user, navigate, setCartValue]);

  return (
    <section className="main-checkout">
      <Header />
      <span>Finalizar pedido</span>
      <section>
        <table>
          <TableHead removeCol />
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
                  subTotal={ (item.quantity * item.floatPrice)
                    .toFixed(2).replace('.', ',') }
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
          onClickfn={ checkDeliveryForm }
        >
          Finalizar pedido
        </Button>
      </section>
    </section>
  );
}

export default Checkout;
