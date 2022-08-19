/* eslint-disable react/jsx-max-depth */
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';
// import Input from '../../components/Input';
// import Span from '../../components/Span';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import schemaLogin from '../../utils/schemas/schemaLogin';
import logoMobile from '../../images_/logoMobile.png';
import logo from '../../images_/logoGral.png';
import backgroundLogo from '../../images_/backgroundUp.png';

// teste

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
    <div
      style={ { backgroundImage: `url(${backgroundLogo})` } }
      className="login-main-div"
    >
      <div className="img-login-screen">
        <div className="sub-img-login-screen">
          <img
            style={ { objectFit: 'cover' } }
            src={ logo }
            alt="logo"
          />
        </div>
      </div>
      <div className="inputs-login">
        <div className="sub-inputs-login">
          <div className="grid justify-items-center">
            <img src={ logoMobile } alt="logo" className="mobile-img-logo" />
          </div>
          <div className="flex-col">
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
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="label-text"
              >
                Email
                <input
                  className="input-login"
                  type="text"
                  data-testid="common_login__input-email"
                  name="email"
                  value={ Login.email }
                  onChange={ handleChange }
                />
              </label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="Password"
                className="label-text"
              >
                Password
                <input
                  className="input-login"
                  type="password"
                  data-testid="common_login__input-password"
                  name="password"
                  value={ Login.password }
                  onChange={ handleChange }
                />
              </label>
            </div>

            <div className="mb-4">
              <button
                style={ { backgroundColor: '#1a1940' } }
                className={ isDisabled ? 'btn-login-disabled' : 'btn-login' }
                type="button"
                data-testid="common_login__button-login"
                disabled={ isDisabled }
                onClick={ handleClickLogin }
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
        {(errorDB !== '') && (
          <div role="alert">
            <div
              style={ { backgroundColor: '#F27C38' } }
              className="text-white font-bold rounded-t px-4 py-2"
            >
              Dados inválidos
            </div>
            <div
              style={ {
                border: '#F27C38',
                backgroundColor: 'rgba(242, 124, 56, 0.6)',
              } }
              className="border border-t-0 rounded-b px-4 py-3 text-red-700"
            >
              <p className="text-white font-semibold"> Usuário e/ou senha incorretos</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
