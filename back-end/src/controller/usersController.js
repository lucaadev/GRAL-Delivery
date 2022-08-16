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

const getAllUsers = async (_req, res, next) => {
  try {
    const allUsers = await usersService.getAllUsers();
    return res.status(201).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const createNewRegistration = async (req, res, next) => {
  try {
    const userToken = req.body.userInfoToken;
    const { userInforToken, ...newbody } = req.body;
      const userCreated = await usersService.createNewRegistration(userToken, newbody);
      return res.status(201).json(userCreated);
  } catch (error) {
      next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userToken = req.body.userInfoToken;
    const { id } = req.params;
    await usersService.deleteUser(userToken, id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createNewRegistration,
  deleteUser,
  getUserById,
  getUsersRole,
  getAllUsers,
};