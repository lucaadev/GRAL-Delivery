import React from 'react';
import Header from '../../components/NavBar';

function Order() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header userName={ name } />
    </section>
  );
}

export default Order;
