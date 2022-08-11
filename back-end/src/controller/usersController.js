const usersService = require('../service/usersService');

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
      const userById = await usersService.getUserById(id);
      return res.status(201).json(userById);
  } catch (error) {
      next(error);
  }
};

const getUsersRole = async (req, res, next) => {
  try {
    const { role } = req.query;
      const userById = await usersService.getUsersByRole(role);
      return res.status(201).json(userById);
  } catch (error) {
      next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await usersService.getAllUsers();
    return res.status(201).json(allUsers)
  } catch (error) {
    next(error)
  }
}

module.exports = { getUserById, getUsersRole, getAllUsers };