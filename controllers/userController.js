// controllers/UserController.js
const UserService = require('../services/userService');

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const user = await UserService.createUser(name, email);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await UserService.updateUser(id, name, email);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.deleteUser(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;
