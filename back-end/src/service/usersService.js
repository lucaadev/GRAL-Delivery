const md5 = require('md5');
const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');

const getUserByEmail = async (email) => {
  const userByEmail = await User.findOne({ where: { email } });
  return userByEmail;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;  
};

const getUsersByRole = async (role) => {
  const userByRole = await User.findAll({ where: { role }, attributes: { exclude: ['password'] } });
  return userByRole;
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id);
  return userById;
};

const createNewUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

const createNewRegistration = async (userToken, data) => {
  const { name, email, password, role } = data;
  if (!userToken || userToken.payload.role !== 'administrator') {
    throw errorThrow(401, 'User does not have permission');
  }
  const userByEmail = await getUserByEmail(email);
  if (userByEmail) throw errorThrow(409, 'User already exists');

  const cryptoPassword = md5(password);
  const newUser = { name, email, password: cryptoPassword, role };
  const userCreated = await createNewUser(newUser);
  return userCreated;
};

const deleteUser = async (userToken, id) => {
  if (!userToken || userToken.payload.role !== 'administrator') {
    throw errorThrow(401, 'User does not have permission for this operation');
  }
  const userById = await getUserById(id);
  if (!userById) throw errorThrow(404, 'User not found');

  await User.destroy({ where: { id } });
};

module.exports = {
  getUserByEmail,
  createNewUser,
  deleteUser,
  getUserById,
  getUsersByRole,
  getAllUsers,
  createNewRegistration,
};