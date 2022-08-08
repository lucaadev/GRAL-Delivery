import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section>
      <section className="navbar">
        <Link to="/customer/products">Produtos</Link>
        <Link to="/customer/orders">Meus</Link>
        <span> Nome de usuário</span>
        <Link to="/">Sair</Link>
      </section>
    </section>
  );
}

export default Header;
