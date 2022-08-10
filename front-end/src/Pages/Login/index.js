import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axiosInstance from '../../utils/axios/axiosInstance';
import schemaLogin from '../../utils/schemas/schemaLogin';
import { deliveryStorage } from '../../utils/helpersFunctions/localStorage';

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
      console.log(data);
      const storageInfo = {
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      };
      deliveryStorage.add('users', data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorDB(error?.response?.data?.message);
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
          <span data-testid="common_login__element-invalid-email">{errorDB}</span>
        </section>)}
    </section>
  );
}

export default Login;
