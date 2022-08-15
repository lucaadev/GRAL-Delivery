import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Span from '../Span';

function Header() {
  const [user, setUser] = useState('');
  const clearStorage = () => {
    localStorage.clear();
    localStorage.setItem('user', '');
  };

  const getUserStorageDataAndSave = useCallback(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  useEffect(() => {
    getUserStorageDataAndSave();
  }, [getUserStorageDataAndSave]);

  return (
    <section>
      <section className="navbar">
        {user.role === 'customer' && (
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
        )}
        {user.role === 'customer' && (
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </Link>
        )}
        {user.role === 'seller' && (
          <Link
            to="/seller/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </Link>
        )}
        <Span
          dataTestid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
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
