import React from 'react';
import PropTypes from 'prop-types';

function Input({
  dataTestid,
  labelText,
  name,
  onChangefn,
  type,
  value,
  inputClass,
}) {
  return (
    <section className="flex flex-col m-4">
      <label htmlFor={ name } className="label-text">
        { labelText }
      </label>
      <input
        className={ inputClass }
        id={ name }
        type={ type }
        data-testid={ dataTestid }
        name={ name }
        value={ value }
        onChange={ onChangefn }
      />
    </section>
  );
}

Input.propTypes = {
  dataTestid: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChangefn: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  inputClass: PropTypes.string,
}.isRequired;

export default Input;
