import React from 'react';
import PropTypes from 'prop-types';

function Input({
  dataTestid,
  labelText,
  name,
  onChangefn,
  type,
  value,
}) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <input
        id={ name }
        type={ type }
        data-testid={ dataTestid }
        name={ name }
        value={ value }
        onChange={ onChangefn }
      />
    </label>
  );
}

Input.propTypes = {
  dataTestid: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChangefn: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
