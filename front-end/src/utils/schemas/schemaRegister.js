import { object, string } from 'yup';

const nameMin = 12;
const pwMin = 6;

const schemaRegister = object().shape({
  name: string().min(nameMin).required(),
  email: string().email().required(),
  password: string().min(pwMin).required(),
});

export default schemaRegister;
