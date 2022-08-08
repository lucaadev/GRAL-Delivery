import React from 'react';
import Header from '../../components/Navbar';
import Card from '../../components/ProductCard';
import CartBtn from '../../components/CartBtn';

function Products() {
  return (
    <section className="main-products">
      <Header />
      <section className="main-products-cards">
        <Card id="1" title="teste" price={ 10 } image="teste" />
      </section>
      <CartBtn price={ 10 } />
    </section>
  );
}

export default Products;
