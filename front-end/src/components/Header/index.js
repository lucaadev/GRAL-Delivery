/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
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
              className="navbar-link group"
            >
              Produtos
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F2C12E]" />
            </Link>

          )}
          {user.role === 'customer' && (

            <Link
              to="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
              className="navbar-link group"
            >
              Meus Pedidos
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F2C12E]" />
            </Link>

          )}
          {user.role === 'seller' && (

            <Link
              to="/seller/orders"
              data-testid="customer_products__element-navbar-link-orders"
              className="navbar-link group"
            >
              Meus Pedidos
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F2C12E]" />
            </Link>

          )}
        </section>
        <section className="navbar-elements">
          <Span
            dataTestid="customer_products__element-navbar-user-full-name"
            spanClass="navbar-name"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {user.name}
          </Span>
          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ clearStorage }
            className="flex items-center gap-1 hover:text-[#F2C12E] ease-in-out duration-300"
          >
            Sair
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F2C12E]" />
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Header;
