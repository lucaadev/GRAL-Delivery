import { object, string } from 'yup';

const pwMin = 6;

const schemaLogin = object().shape({
  email: string().email(),
  password: string().min(pwMin),
});

export default schemaLogin;
