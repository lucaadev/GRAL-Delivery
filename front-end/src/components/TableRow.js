import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ title, quantity, price, totalPrice }) {
  <h1> Oi</h1>;
}

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default TableRow;
