const User = require('../models/user.model');

const createUser = async (userData) => {
  return await User.create(userData);
};

const getUsersByTenant = async (tenantId) => {
  return await User.find({ tenantId });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {createUser, getUsersByTenant, getUserById, updateUser, deleteUser};
