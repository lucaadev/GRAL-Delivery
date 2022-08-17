import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Span from '../../components/Span';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import schemaLogin from '../../utils/schemas/schemaLogin';

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(DeliveryContext);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  const checkUser = () => {
    const userStorage = localStorage.getItem('user');
    if (userStorage && userStorage !== '') {
      const userData = JSON.parse(userStorage);
      setUser(userData);
      if (userData.role === 'customer') navigate('/customer/products');
      if (userData.role === 'seller') navigate('/seller/orders');
      if (userData.role === 'administrator') navigate('/admin/manage');
    }
  };

  const checkLoginData = useCallback(async () => {
    try {
      await schemaLogin.validate(login);
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(true);
    }
  }, [login]);

  const handleChange = ({ target }) => {
    setLogin((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const performTheRedirect = useCallback((data) => {
    if (data.role === 'seller') navigate('/seller/orders');
    if (data.role === 'customer') navigate('/customer/products');
    if (data.role === 'administrator') navigate('/admin/manage');
  }, [navigate]);

  const handleClickLogin = async () => {
    try {
      const { data } = await axiosInstance.post('/login', { ...login });
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      setErrorDB(error?.response?.data?.message);
    }
  };

  useEffect(() => checkUser());
  useEffect(() => checkLoginData(), [checkLoginData]);
  useEffect(() => performTheRedirect(user), [user, performTheRedirect]);

  return (
    <section>
      <Input
        type="text"
        dataTestid="common_login__input-email"
        labelText="Email"
        name="email"
        value={ login.email }
        onChangefn={ handleChange }
      />
      <Input
        type="password"
        dataTestid="common_login__input-password"
        labelText="Password"
        name="password"
        value={ login.password }
        onChangefn={ handleChange }
      />
      <Button
        dataTestid="common_login__button-login"
        disabled={ isDisabled }
        onClickfn={ handleClickLogin }
      >
        Login
      </Button>
      <Button
        dataTestid="common_login__button-register"
        onClickfn={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
      { errorDB !== '' && (
        <section>
          <Span dataTestid="common_login__element-invalid-email">{errorDB}</Span>
        </section>)}
    </section>
  );
}

export default Login;
