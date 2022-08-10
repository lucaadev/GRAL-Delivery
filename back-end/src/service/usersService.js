const { User } = require('../database/models');

const getUserByEmail = async (email) => {
  const userByEmail = await User.findOne({ where: { email } });
  return userByEmail;
};

const createNewUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
}

module.exports = { getUserByEmail, createNewUser };