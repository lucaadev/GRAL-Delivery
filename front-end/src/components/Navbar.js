import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const clearStorage = () => {
    localStorage.setItem('userData', null);
  };
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
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome de usuário
        </span>
        <Link
          to="/"
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
