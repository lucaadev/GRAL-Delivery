/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
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
  role: 'customer',
};

function Management() {
  const { user } = useContext(DeliveryContext);
  const [registration, setRegistration] = useState(INITIAL_VALUE_REGISTRATION);
  const [userCreated, setUserCreated] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorDB, setErrorDB] = useState('');

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
    <section style={ { backgroundColor: 'rgba(242,210,46, 0.95)' } } className="w-full h-screen">
      <Header doNotDisplayLinkProducts="" />
      <section className="main-admin">
        <section className="admin-form">
          <Input
            type="name"
            dataTestid="admin_manage__input-name"
            name="name"
            value={ registration.name }
            onChangefn={ handleChange }
            labelText="Nome"
            inputClass="input-login"
          />
          <Input
            type="email"
            dataTestid="admin_manage__input-email"
            name="email"
            value={ registration.email }
            onChangefn={ handleChange }
            labelText="Email"
            inputClass="input-login"
          />
          <Input
            type="password"
            dataTestid="admin_manage__input-password"
            name="password"
            value={ registration.password }
            onChangefn={ handleChange }
            labelText="Password"
            inputClass="input-login"
          />
          <label htmlFor="role" className="font-medium ml-4 mb-1">
            Tipo:
            {' '}
            <select
              data-testid="admin_manage__select-role"
              name="role"
              id="role"
              value={ registration.role }
              onChange={ handleChange }
              className="input-admin"
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
            classNameBtn="btn-login"
          >
            Cadastrar
          </Button>
        </section>
        <section>
          <table className="table-auto text-center">
            <thead>
              <tr>
                {/* <th data-testid="admin_manage__element-user-table-item-number-" className="table-headers-admin">(index)</th> */}
                <th data-testid="admin_manage__element-user-table-name-" className="table-headers-admin">Nome</th>
                <th data-testid="admin_manage__element-user-table-email-" className="table-headers-admin">Email</th>
                <th data-testid="admin_manage__element-user-table-role-" className="table-headers-admin">Atribuição</th>
                <th data-testid="admin_manage__element-user-table-remove-" className="table-headers-admin">Excluir</th>
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
          </table>
        </section>
      </section>
      { errorDB && (
        <Span dataTestid="admin_manage__element-invalid-register">{errorDB}</Span>
      )}
    </section>
  );
}

export default Management;
