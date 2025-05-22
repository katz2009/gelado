// services/RegistrationService.js
const RegistrationModel = require('../models/regisModel');

class RegistrationService {
  static async createRegistration(user_id, event_id) {
    return await RegistrationModel.create(user_id, event_id);
  }

  static async getAllRegistrations() {
    return await RegistrationModel.findAll();
  }

  static async getRegistrationById(id) {
    return await RegistrationModel.findById(id);
  }

  static async updateRegistration(id, user_id, event_id) {
    return await RegistrationModel.update(id, user_id, event_id);
  }

  static async deleteRegistration(id) {
    return await RegistrationModel.delete(id);
  }
}

module.exports = RegistrationService;
