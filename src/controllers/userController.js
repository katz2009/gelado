// src/controllers/UserController.js
const UserService = require('../services/userService');

class UserController {
  // ───────── CREATE ─────────
  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const user = await UserService.createUser(name, email);

      // guarda o usuário na sessão
      req.session.userId = user.id;

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ───────── READ ALL ────────
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ───────── READ ONE ────────
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ───────── UPDATE ──────────
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await UserService.updateUser(id, name, email);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ───────── DELETE ──────────
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await UserService.deleteUser(id);
      if (!deleted) return res.status(404).json({ message: 'User not found' });

      // encerra a sessão se o usuário deletado era o logado
      if (+id === req.session.userId) {
        req.session.destroy(() => {});
      }

      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;