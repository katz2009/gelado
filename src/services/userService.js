// services/UserService.js
const UserModel = require('../models/userModel');

class UserService {
  static async createUser(name, email) {
    return await UserModel.create(name, email);
  }

  static async getAllUsers() {
    return await UserModel.findAll();
  }

  static async getUserById(id) {
    return await UserModel.findById(id);
  }

  static async updateUser(id, name, email) {
    return await UserModel.update(id, name, email);
  }

  static async deleteUser(id) {
    return await UserModel.delete(id);
  }
}

module.exports = UserService;
