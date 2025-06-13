const Joi = require('joi');

class UserModel {
  static get schema() {
    return Joi.object({
      name: Joi.string().max(100).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(), // ajuste conforme sua regra
      role: Joi.string().valid('admin', 'user').required()
    });
  }
}

module.exports = UserModel;

