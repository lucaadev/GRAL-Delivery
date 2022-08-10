const { User } = require('../database/models');

const getUserByEmail = async (email) => {
  const userByEmail = await User.findOne({ where: { email } });
  return userByEmail;
};

const getUsersByRole = async (role) => {
  const userByRole = await User.findAll({ where: { role } });
  return userByRole;
};

const getUserById = async (id) => {
  const userById = await User.findByPk({ where: { id } });
  return userById;
};

const createNewUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

module.exports = { getUserByEmail, createNewUser, getUserById, getUsersByRole };