import { object, string } from 'yup';

const schemaCheckout = object().shape({
  sellerId: string().test(
    'is-0',
    'Selecione um vendedor',
    (value) => value !== '0' && value !== '',
  ).required(),
  deliveryAddress: string().required(),
  deliveryNumber: string().required(),
});

export default schemaCheckout;
