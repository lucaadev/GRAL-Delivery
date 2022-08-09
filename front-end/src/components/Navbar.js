import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ userName }) {
  const clearStorage = () => {
    localStorage.setItem('user', '');
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
          {userName}
        </span>
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

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
