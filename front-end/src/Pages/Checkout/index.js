import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailsDelivery from '../../components/DetailsDelivery';
import Header from '../../components/NavBar';
import TableRow from '../../components/TableRow';
import cartContext from '../../utils/context/DeliveryContext';

function Checkout() {
  const { cartValue } = useContext(cartContext);
  const cartValueFormat = cartValue.toFixed(2).replace('.', ',');
  const { name } = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('cart'));
  const navigate = useNavigate();

  const postSale = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    try {
      const { data } = await axiosInstance
        .post('/sales', { ...saleBody }, config);
      navigate(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main-checkout">
      <Header userName={ name } />
      <span>Finalizar pedido</span>
      <section>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
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

        <section>
          Total: R$
          <span data-testid="customer_checkout__element-order-total-price">
            {cartValue ? cartValueFormat : 0.00}
          </span>
        </section>
      </section>
      <section className="details-checkout">
        <DetailsDelivery sellerName="Aqui recebe um array com vendedores" />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ postSale }
        >
          Finalizar pedido
        </button>
      </section>
    </section>

  );
}

export default Checkout;
