import React from 'react';
import Header from '../NavBar';

function OrderCard() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header userName={ name } />
    </section>
  );
}

export default OrderCard;
