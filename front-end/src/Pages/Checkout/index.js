import React from 'react';
import Header from '../../components/Navbar';

function Checkout() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header userName={ name } />
    </section>

  );
}

export default Checkout;
