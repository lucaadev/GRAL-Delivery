import React from 'react';
import PropTypes from 'prop-types';

function TableHead({ removeCol }) {
  return (
    <thead>
      <tr>
        <th className="table-headers">Item</th>
        <th className="table-headers">Descrição</th>
        <th className="table-headers">Quantidade</th>
        <th className="table-headers">Valor unitário</th>
        <th className="table-headers">Sub-total</th>
        {removeCol && (<th className="table-headers">Remover item</th>)}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  removeCol: PropTypes.bool,
}.isRequired;

export default TableHead;
