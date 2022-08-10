import React, { useContext } from 'react';
import Header from '../../components/Navbar';
import TableRow from '../../components/TableRow';
import cartContext from '../../utils/context';

function Checkout() {
  const teste = {
    name: 'heineken',
    q: 6,
    v: 4,
    t: 24,
  };
  const { cartValue } = useContext(cartContext);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const arr = [teste];
  return (
    <section className="main-checkout">
      <Header userName={ name } />
      <span>Finalizar pedido</span>
      <section>
        {
          arr.map((item, i) => (
            <TableRow
              key={ i }
              index={ i }
              title={ item.name }
              quantity={ item.q }
              price={ item.v }
              subTotal={ item.t }
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
