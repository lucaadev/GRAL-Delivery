import React from 'react';
import PropTypes from 'prop-types';

function Span({ dataTestid, children, spanClass }) {
  return (
    <span
      data-testid={ dataTestid }
      className={ spanClass }
    >
      { children }
    </span>
  );
}

Span.propTypes = {
  dataTestid: PropTypes.string,
  spanClass: PropTypes.string,
}.isRequired;

export default Span;
