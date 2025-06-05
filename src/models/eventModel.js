// models/EventModel.js
const pool = require('../config/db');

class EventModel {
  static async create(title, date, created_by) {
    const query = 'INSERT INTO events (title, date, created_by) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [title, date, created_by]);
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query('SELECT * FROM events');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, title, date, created_by) {
    const query = 'UPDATE events SET title = $1, date = $2, created_by = $3 WHERE id = $4 RETURNING *';
    const result = await pool.query(query, [title, date, created_by, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = EventModel;
