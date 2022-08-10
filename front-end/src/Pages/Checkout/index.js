import React, { useContext } from 'react';
import Header from '../../components/Navbar';
import TableRow from '../../components/TableRow';
import cartContext from '../../utils/context';

function Checkout() {
  const { cartValue } = useContext(cartContext);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('cart'));
  return (
    <section className="main-checkout">
      <Header userName={ name } />
      <span>Finalizar pedido</span>
      <section>
        {
          cart.map((item, i) => (
            <TableRow
              key={ i }
              index={ i }
              id={ item.id }
              title={ item.title }
              quantity={ item.quantity }
              price={ item.price }
              subTotal={ Number((item.quantity * item.price).toFixed(2)) }
            />
          ))
        }
        <section>
          Total: R$
          <span data-testid="customer_checkout__element-order-total-price">
            {cartValue ? Number(cartValue.toFixed(2)) : 0.00}
          </span>
        </section>
      </section>
      <section className="details-checkout" />
    </section>

  );
}

export default Checkout;
