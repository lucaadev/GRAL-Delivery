import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import axiosInstance from '../../utils/axios/axiosInstance';
import schemaLogin from '../../utils/schemas/schemaLogin';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  const checkLogin = useCallback(async () => {
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

  const handleClickLogin = async () => {
    try {
      const { data } = await axiosInstance.post('/login', { ...login });
      const storageInfo = {
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      };
      localStorage.setItem('user', JSON.stringify(storageInfo));
      navigate('/customer/products');
    } catch (error) {
      setErrorDB(error.response.data.message);
    }
  };

  useEffect(() => checkLogin(), [checkLogin]);

  return (
    <section>
      <Input
        type="text"
        dataTestid="common_login__input-email"
        labelText="Email"
        name="email"
        value={ login.email }
        onChangefn={ (event) => {
          handleChange(event);
          checkLogin();
        } }
      />
      {/* <input
        type="text"
        data-testid="common_login__input-email"
        name="email"
        value={ login.email }
        onChange={ (event) => {
          handleChange(event);
          checkLogin();
        } }
      /> */}
      <Input
        type="password"
        dataTestid="common_login__input-password"
        labelText="Password"
        name="password"
        value={ login.password }
        onChangefn={ (event) => {
          handleChange(event);
          checkLogin();
        } }
      />
      {/* <input
        type="password"
        data-testid="common_login__input-password"
        name="password"
        value={ login.password }
        onChange={ (event) => {
          handleChange(event);
          checkLogin();
        } }
      /> */}
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
        onClick={ handleClickLogin }
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
      { errorDB !== '' && (
        <section>
          <span data-testid="common_login__element-invalid-email">{errorDB}</span>
        </section>)}
    </section>
  );
}

export default Login;
