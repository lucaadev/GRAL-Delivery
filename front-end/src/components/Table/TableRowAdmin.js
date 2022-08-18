/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

function TableRowAdmin(props) {
  const { user, index, removeUserFn } = props;

  return (
    <tr className="table-row">
      {/* <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
        className="px-2 py-4"
      >
        { index }
      </td> */}
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
        className="px-2 py-4"
      >
        { user.name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
        className="px-2 py-4"
      >
        { user.email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
        className="px-2 py-4"
      >
        { user.role }
      </td>
      <td className="px-2 py-4">
        <Button
          dataTestid={ `admin_manage__element-user-table-remove-${user.id - 1}` }
          onClickfn={ () => removeUserFn(user.id) }
          classNameBtn="remove-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
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
