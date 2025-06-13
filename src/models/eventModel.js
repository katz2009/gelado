const Joi = require('joi');

class EventModel {
  static get schema() {
    return Joi.object({
      title: Joi.string().max(255).required(),
      date: Joi.date().iso().required(),
      created_by: Joi.number().integer().required()
    });
  }
}

module.exports = EventModel;

