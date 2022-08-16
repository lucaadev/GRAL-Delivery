import React, { useCallback, useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/NavBar';
import Span from '../../components/Span';
import TableRowAdmin from '../../components/Table/TableRowAdmin';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
import { schemaRegistration } from '../../utils/schemas/schemaRegister';

const selectRole = ['admin', 'customer', 'seller'];
const INITIAL_VALUE_REGISTRATION = {
  name: '',
  email: '',
  password: '',
  role: 'Selecione',
};

function Management() {
  const { user } = useContext(DeliveryContext);
  const [registration, setRegistration] = useState(INITIAL_VALUE_REGISTRATION);
  const [userCreated, setUserCreated] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

  // --adm2@21!!--

  const handleChange = ({ target }) => {
    setRegistration((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const checkRegistrationData = useCallback(async () => {
    try {
      await schemaRegistration.validate(registration);
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(true);
    }
  }, [registration]);

  const handleRegister = async () => {
    const config = { headers: { Authorization: user.token } };
    try {
      const { data } = await axiosInstance
        .post('/users/registration', { ...registration }, config);
      setUserCreated((prevState) => [...prevState, data]);
      setRegistration(INITIAL_VALUE_REGISTRATION);
    } catch (error) {
      setErrorDB(error?.response?.data?.message);
    }
  };

  const removeUser = async (id) => {
    const config = { headers: { Authorization: user.token } };
    try {
      await axiosInstance.delete(`/users/${id}`, config);
      const newData = userCreated.filter((element) => element.id !== id);
      setUserCreated(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => checkRegistrationData(), [checkRegistrationData]);

  return (
    <section className="management-screen">
      <section>
        <Header doNotDisplayLinkProducts="" />
        <Input
          type="name"
          dataTestid="admin_manage__input-name"
          name="name"
          value={ registration.name }
          onChangefn={ handleChange }
          labelText="Nome"
        />
        <Input
          type="email"
          dataTestid="admin_manage__input-email"
          name="email"
          value={ registration.email }
          onChangefn={ handleChange }
          labelText="Email"
        />
        <Input
          type="password"
          dataTestid="admin_manage__input-password"
          name="password"
          value={ registration.password }
          onChangefn={ handleChange }
          labelText="Password"
        />
        <label htmlFor="role">
          Tipo:
          {' '}
          <select
            data-testid="admin_manage__select-role"
            name="role"
            id="role"
            value={ registration.role }
            onChange={ handleChange }
          >
            {selectRole.map((role, i) => (
              <option
                key={ i }
                value={ role }
              >
                {role}
              </option>
            ))}
          </select>
        </label>
        <Button
          dataTestid="admin_manage__button-register"
          onClickfn={ () => handleRegister() }
          disabled={ isDisabled }
        >
          Cadastrar
        </Button>
      </section>
      <section>
        <thead>
          <tr>
            <th data-testid="admin_manage__element-user-table-item-number-">(index)</th>
            <th data-testid="admin_manage__element-user-table-name-">name</th>
            <th data-testid="admin_manage__element-user-table-email-">email</th>
            <th data-testid="admin_manage__element-user-table-role-">role</th>
            <th data-testid="admin_manage__element-user-table-remove-">excluir</th>
          </tr>
        </thead>
        <tbody>
          {userCreated && userCreated.map((person, index) => (
            <TableRowAdmin
              key={ person.id }
              user={ person }
              index={ index }
              removeUserFn={ removeUser }
            />))}
        </tbody>
      </section>
      { errorDB && (
        <Span dataTestid="admin_manage__element-invalid-register">{errorDB}</Span>
      )}
    </section>
  );
}

export default Management;
