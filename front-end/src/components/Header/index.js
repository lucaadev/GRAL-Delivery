import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeliveryContext from '../../utils/context/DeliveryContext';
import Span from '../Span';

function Header() {
  const { user, setUser, setCart, setOrders, setSale } = useContext(DeliveryContext);
  const clearStorage = () => {
    setUser({});
    setCart([]);
    setOrders([]);
    setSale({
      userId: '',
      sellerId: '0',
      deliveryAddress: '',
      deliveryNumber: '',
    });
    localStorage.clear();
    localStorage.setItem('user', '');
  };

  return (
    <section>
      <section className="navbar">
        <section className="navbar-elements">

          {user.role === 'customer' && (

            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
              className="navbar-link"
            >
              Produtos
            </Link>

          )}
          {user.role === 'customer' && (

            <Link
              to="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
              className="navbar-link"
            >
              Meus Pedidos
            </Link>

          )}
          {user.role === 'seller' && (

            <Link
              to="/seller/orders"
              data-testid="customer_products__element-navbar-link-orders"
              className="navbar-link"
            >
              Meus Pedidos
            </Link>

          )}
        </section>
        <section className="navbar-elements">
          <Span
            dataTestid="customer_products__element-navbar-user-full-name"
            spanClass="navbar-name"
          >
            {user.name}
          </Span>
          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ clearStorage }
            className="navbar-link"
          >
            Sair
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Header;
