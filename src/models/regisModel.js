const Joi = require('joi');

class RegistrationModel {
  static get schema() {
    return Joi.object({
      user_id: Joi.number().integer().required(),
      event_id: Joi.number().integer().required(),
      status: Joi.string().valid('pendente', 'confirmado', 'cancelado').required(),
      registered_at: Joi.date().iso().required()
    });
  }
}

module.exports = RegistrationModel;

