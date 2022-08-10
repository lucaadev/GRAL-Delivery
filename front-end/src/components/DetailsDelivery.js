import React from 'react';
import PropTypes from 'prop-types';

function DetailsDelivery({ sellerName }) {
  return (
    <section className="delivery-details">
      <form>
        <label htmlFor="vendedor-responsavel">
          P.Vendedor Responsável:
          { sellerName }
          {' '}

          <select data-testid="customer_checkout__select-seller">
            <option value="vendedor">Vendedora 1</option>
            <option value="vendedor">Vendedora 2</option>
          </select>
        </label>

        <label htmlFor="endereco">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="endereco"
            name="endereco"
            required
            minLength="4"
            maxLength="100"
            size="10"
          />
        </label>

        <label htmlFor="numero">
          Número:
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            id="numero"
            name="numero"
            max="100"
          />
        </label>
      </form>
    </section>
  );
}

DetailsDelivery.propTypes = {
  sellerName: PropTypes.string.isRequired,
};

export default DetailsDelivery;
