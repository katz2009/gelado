const pool = require('../config/db');
const Joi = require('joi');

// Schema de validação com Joi
const registrationSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  event_id: Joi.number().integer().required()
});

class RegistrationModel {
  static validate(data) {
    return registrationSchema.validate(data, { abortEarly: false });
  }

  static async create(user_id, event_id) {
    // Validação com Joi
    const { error } = this.validate({ user_id, event_id });
    if (error) {
      throw new Error(`Erro de validação: ${error.details.map(e => e.message).join(', ')}`);
    }

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
    // Validação com Joi
    const { error } = this.validate({ user_id, event_id });
    if (error) {
      throw new Error(`Erro de validação: ${error.details.map(e => e.message).join(', ')}`);
    }

    const query = 'UPDATE registrations SET user_id = $1, event_id = $2 WHERE id = $3 RETURNING *';
    const result = await pool.query(query, [user_id, event_id, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM registrations WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }

  static async deleteByUser(userId) {
    await pool.query('DELETE FROM registrations WHERE user_id = $1', [userId]);
  }

  static async deleteByEventsOfCreator(creatorId) {
    await pool.query(
      `DELETE FROM registrations
       WHERE event_id IN (SELECT id FROM events WHERE created_by = $1)`,
      [creatorId]
    );
  }
}

module.exports = RegistrationModel;



