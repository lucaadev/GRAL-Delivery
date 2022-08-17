import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

function DeliveryForm({
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
        <Input
          dataTestid="customer_checkout__input-address"
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          labelText="Endereço: "
          required
          minLength="4"
          maxLength="100"
          size="10"
          value={ deliveryAddress }
          onChangefn={ onChangefn }
        />
        <Input
          dataTestid="customer_checkout__input-addressNumber"
          type="text"
          id="deliveryNumber"
          name="deliveryNumber"
          max="100"
          labelText="Número: "
          value={ deliveryNumber }
          onChangefn={ onChangefn }
        />
      </form>
    </section>
  );
}

DeliveryForm.propTypes = {
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

export default DeliveryForm;
