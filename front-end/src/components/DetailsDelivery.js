import React from 'react';
import PropTypes from 'prop-types';
// import saleContext from '../utils/context/DeliveryContext';

function DetailsDelivery({
  sellers,
  onChangefn,
  sellerId,
  deliveryAddress,
  deliveryNumber,
}) {
  return (
    <section className="delivery-details">
      <form>
        <label htmlFor="sellerId">
          P.Vendedor Responsável:
          {' '}
          <select
            data-testid="customer_checkout__select-seller"
            name="sellerId"
            id="sellerId"
            value={ sellerId }
            onChange={ onChangefn }
          >
            <option value="0">Selecione o vendedor</option>
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="deliveryAddress">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            required
            minLength="4"
            maxLength="100"
            size="10"
            value={ deliveryAddress }
            onChange={ onChangefn }
          />
        </label>

        <label htmlFor="deliveryNumber">
          Número:
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            id="deliveryNumber"
            name="deliveryNumber"
            max="100"
            value={ deliveryNumber }
            onChange={ onChangefn }
          />
        </label>
      </form>
    </section>
  );
}

DetailsDelivery.propTypes = {
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
  sellerId: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  onChangefn: PropTypes.func.isRequired,
};

export default DetailsDelivery;
