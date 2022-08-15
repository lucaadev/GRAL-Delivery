import { object, string } from 'yup';

const pwMin = 6;

const schemaLogin = object().shape({
  email: string().email().required(),
  password: string().min(pwMin).required(),
});

export default schemaLogin;
