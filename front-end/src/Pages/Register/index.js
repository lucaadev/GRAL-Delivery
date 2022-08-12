import { useState, useCallback, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios/axiosInstance';
import schemaRegister from '../../utils/schemas/schemaRegister';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Span from '../../components/Span';
import { saveStorage } from '../../utils/helpersFunctions/localStorage';
import DeliveryContext from '../../utils/context/DeliveryContext';

function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(DeliveryContext);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  const checkRegisterData = useCallback(async () => {
    try {
      await schemaRegister.validate(register);
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(true);
    }
  }, [register]);

  const saveDataAndRedirect = (data) => {
    setUser(data);
    saveStorage('user', data);
    navigate('/customer/products');
  };

  const handleChange = ({ target }) => {
    setRegister((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClickRegister = async () => {
    try {
      const { data } = await axiosInstance.post('/register', { ...register });
      saveDataAndRedirect(data);
    } catch (error) {
      setErrorDB(error.response.data.message);
    }
  };

  useEffect(() => checkRegisterData(), [checkRegisterData]);

  return (
    <section>
      <Input
        type="text"
        dataTestid="common_register__input-name"
        labelText="Name"
        name="name"
        value={ register.name }
        onChangefn={ handleChange }
      />
      <Input
        type="text"
        dataTestid="common_register__input-email"
        labelText="Email"
        name="email"
        value={ register.email }
        onChangefn={ handleChange }
      />
      <Input
        type="password"
        dataTestid="common_register__input-password"
        labelText="Password"
        name="password"
        value={ register.password }
        onChangefn={ handleChange }
      />
      <Button
        dataTestid="common_register__button-register"
        onClickfn={ handleClickRegister }
        disabled={ isDisabled }
      >
        Cadastrar
      </Button>
      { errorDB !== '' && (
        <section>
          <Span
            dataTestid="common_register__element-invalid_register"
          >
            {errorDB}
          </Span>
        </section>)}
    </section>
  );
}

export default Register;
