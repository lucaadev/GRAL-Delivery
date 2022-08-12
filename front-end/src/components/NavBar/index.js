import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeliveryContext from '../../utils/context/DeliveryContext';
import Span from '../Span';

function Header() {
  const { setUser } = useContext(DeliveryContext);
  const clearStorage = () => {
    localStorage.clear();
    localStorage.setItem('user', '');
  };

  const getStorageDataAndSave = useCallback(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, [setUser]);

  useEffect(() => {
    getStorageDataAndSave();
  }, [getStorageDataAndSave]);

  return (
    <section>
      <section className="navbar">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        <Span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user && user.name}
        </Span>
        <Link
          to="/login"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ clearStorage }
        >
          Sair
        </Link>
      </section>
    </section>
  );
}

export default Header;
