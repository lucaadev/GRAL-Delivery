import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

function TableRowAdmin(props) {
  const { user, index } = props;

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { index }
      </td>
      <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
        { user.name }
      </td>
      <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
        { user.email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        { user.role }
      </td>
      <td>
        <Button
          dataTestid={ `admin_manage__element-user-table-remove-${user.id - 1}` }
          onClickfn={ () => removeUserFn(user.id) }
        >
          Excluir
        </Button>
      </td>
    </tr>
  );
}

TableRowAdmin.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  role: PropTypes.number,
  email: PropTypes.string,
}.isRequired;

export default TableRowAdmin;
