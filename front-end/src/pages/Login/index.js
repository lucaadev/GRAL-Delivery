/* eslint-disable max-len */
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
// import Span from '../../components/Span';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import schemaLogin from '../../utils/schemas/schemaLogin';
import backgroundLogo from '../../images_/backgroundUp.png';
import logo from '../../images_/logoGral.png';

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
    <section
      className="main-login"
      style={ { backgroundImage: `url(${backgroundLogo})` } }
    >
      <section className="flex w-full h-full justify-start">
        <img
          style={ { objectFit: 'fill' } }
          src={ logo }
          alt="logo"
        />
      </section>
      <section className="main-login-form">
        <section>
          <h2 className="welcome-h2">Seja Bem-Vindo!</h2>
          <p className="new-around-here">
            Novo por aqui?
            <button
              className="to-register-button"
              type="button"
              data-testid="common_login__button-register"
              onClick={ () => navigate('/register') }
            >
              Criar nova conta
            </button>
          </p>
        </section>
        <Input
          type="text"
          dataTestid="common_login__input-email"
          labelText="Email"
          name="email"
          value={ login.email }
          onChangefn={ handleChange }
          inputClass="input-login"
        />
        <Input
          type="password"
          dataTestid="common_login__input-password"
          labelText="Password"
          name="password"
          value={ login.password }
          onChangefn={ handleChange }
          inputClass="input-login"
        />
        <Button
          dataTestid="common_login__button-login"
          disabled={ isDisabled }
          onClickfn={ handleClickLogin }
          classNameBtn="btn-login"
        >
          Login
        </Button>
        {(errorDB !== '') && (
          <section role="alert">
            <section
              style={ { backgroundColor: '#F27C38' } }
              className="text-slate-100 font-semibold rounded-t mt-4 px-4 py-2"
            >
              Dados inválidos
            </section>
            <section
              style={ {
                border: '#F27C38',
                backgroundColor: 'rgba(242, 124, 56, 0.6)',
              } }
              className="border border-t-0 rounded-b px-4 py-3 text-red-700"
            >
              <p className="text-slate-100 font-semibold">
                Usuário e/ou senha incorretos
              </p>
            </section>
          </section>
        )}
      </section>
    </section>
  );
}

export default Login;
