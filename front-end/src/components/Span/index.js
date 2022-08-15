import React from 'react';
import PropTypes from 'prop-types';

function Span({ dataTestid, children }) {
  return (
    <span
      data-testid={ dataTestid }
    >
      { children }
    </span>
  );
}

Span.propTypes = {
  dataTestid: PropTypes.string,
}.isRequired;

export default Span;
