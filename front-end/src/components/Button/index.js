import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children,
  dataTestid,
  onClickfn,
  disabled,
  classNameBtn,
}) {
  return (
    <button
      className={ disabled ? 'button-disabled' : classNameBtn }
      type="button"
      data-testid={ dataTestid }
      disabled={ disabled || '' }
      onClick={ onClickfn }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  classNameBtn: PropTypes.string,
  dataTestid: PropTypes.string,
  disabled: PropTypes.bool,
  onClickfn: PropTypes.func,
}.isRequired;

export default Button;
