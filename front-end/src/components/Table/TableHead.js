import React from 'react';
import PropTypes from 'prop-types';

function TableHead({ removeCol }) {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor unitário</th>
        <th>Sub-total</th>
        {removeCol && (<th>Remover item</th>)}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  removeCol: PropTypes.bool,
}.isRequired;

export default TableHead;
