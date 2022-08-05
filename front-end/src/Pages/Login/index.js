import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import schemaLogin from '../../utils/schemaLogin';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  const checkLogin = async () => {
    try {
      await schemaLogin.validate(login);
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(true);
    }
  };

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
      // setToken(data);
      // navigate('/tasks');
    } catch (error) {
      setErrorDB(error.response.data.message);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkLogin(), [login]);

  return (
    <section>
      <input
        type="text"
        data-testid="common_login__input-email"
        name="email"
        value={ login.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        data-testid="common_login__input-password"
        name="password"
        value={ login.password }
        onChange={ handleChange }
      />
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
        // disabled={ validEmailAndPassword }
        // onClick={ handleClickLogin }
      >
        Ainda não tenho conta
      </button>
      { errorDB !== '' && (
        <section>
          <span>{errorDB}</span>
        </section>)}
    </section>
  );
}

export default Login;
