const pool = require('../config/db');
const Joi = require('joi');

// Schema de validação com Joi
const eventSchema = Joi.object({
  title: Joi.string().max(255).required(),
  date: Joi.date().iso().required(),
  created_by: Joi.number().integer().required()
});

class EventModel {
  static validate(data) {
    return eventSchema.validate(data, { abortEarly: false });
  }

  static async create(title, date, created_by) {
    // Validação com Joi
    const { error } = this.validate({ title, date, created_by });
    if (error) {
      throw new Error(`Erro de validação: ${error.details.map(e => e.message).join(', ')}`);
    }

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
    // Validação com Joi
    const { error } = this.validate({ title, date, created_by });
    if (error) {
      throw new Error(`Erro de validação: ${error.details.map(e => e.message).join(', ')}`);
    }

    const query = 'UPDATE events SET title = $1, date = $2, created_by = $3 WHERE id = $4 RETURNING *';
    const result = await pool.query(query, [title, date, created_by, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }

  static async deleteByCreator(creatorId) {
    await pool.query('DELETE FROM events WHERE created_by = $1', [creatorId]);
  }
}

module.exports = EventModel;


