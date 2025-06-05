// models/RegistrationModel.js
const pool = require('../config/db');

class RegistrationModel {
  static async create(user_id, event_id) {
    const query = 'INSERT INTO registrations (user_id, event_id, registered_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *';
    const result = await pool.query(query, [user_id, event_id]);
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query('SELECT * FROM registrations');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM registrations WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, user_id, event_id) {
    const query = 'UPDATE registrations SET user_id = $1, event_id = $2 WHERE id = $3 RETURNING *';
    const result = await pool.query(query, [user_id, event_id, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM registrations WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = RegistrationModel;
