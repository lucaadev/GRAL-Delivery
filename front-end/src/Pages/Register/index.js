import React, { useState, useCallback, useEffect } from 'react';
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
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  const checkRegister = useCallback(async () => {
    try {
      await schemaRegister.validate(register);
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(true);
    }
  }, [register]);

  const handleChange = ({ target }) => {
    setRegister((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClickRegister = async () => {
    try {
      const { data } = await axiosInstance.post('/register', { ...register });
      console.log(data);
      // setToken(data);
      navigate('/customer/products');
    } catch (error) {
      setErrorDB(error.response.data.message);
    }
  };

  useEffect(() => checkRegister(), [checkRegister]);

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
        disabled={ isDisabled }
      >
        Cadastrar
      </button>
      { errorDB !== '' && (
        <section>
          <span data-testid="common_register__element-invalid_register">{errorDB}</span>
        </section>)}
    </section>
  );
}

export default Register;
