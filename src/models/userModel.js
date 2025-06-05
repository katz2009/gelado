// models/UserModel.js
const pool = require('../config/db');

class UserModel {
  static async create(name, email) {
    const query = 'INSERT INTO users (name, email, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *';
    const result = await pool.query(query, [name, email]);
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, name, email) {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const result = await pool.query(query, [name, email, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = UserModel;
