import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import schemaRegister from '../../utils/schemaRegister';

function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorDB, setErrorDB] = useState('');

  const checkRegister = async () => {
    try {
      await schemaRegister.validate(register);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setRegister((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClickRegister = async () => {
    try {
      checkRegister();
      const { data } = await axiosInstance.post('/register', { ...register });
      console.log(data);
      // setToken(data);
      navigate('/customer/products');
    } catch (error) {
      setErrorDB(error.response.data.message);
    }
  };

  return (
    <section>
      <input
        type="text"
        data-testid="common_register__input-name"
        name="name"
        value={ register.name }
        onChange={ handleChange }
      />
      <input
        type="text"
        data-testid="common_register__input-email"
        name="email"
        value={ register.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        name="password"
        value={ register.password }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ handleClickRegister }
      >
        Cadastrar
      </button>
      { errorDB !== '' && (
        <section>
          <span data-testid="common_register__element-invalid_register ">{errorDB}</span>
        </section>)}
    </section>
  );
}

export default Register;
