// controllers/RegistrationController.js
const RegistrationService = require('../services/regisService');

class RegistrationController {
  static async createRegistration(req, res) {
    try {
      const { user_id, event_id } = req.body;
      const registration = await RegistrationService.createRegistration(user_id, event_id);
      res.status(201).json(registration);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllRegistrations(req, res) {
    try {
      const registrations = await RegistrationService.getAllRegistrations();
      res.status(200).json(registrations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getRegistrationById(req, res) {
    try {
      const { id } = req.params;
      const registration = await RegistrationService.getRegistrationById(id);
      if (!registration) return res.status(404).json({ message: 'Registration not found' });
      res.status(200).json(registration);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateRegistration(req, res) {
    try {
      const { id } = req.params;
      const { user_id, event_id } = req.body;
      const registration = await RegistrationService.updateRegistration(id, user_id, event_id);
      if (!registration) return res.status(404).json({ message: 'Registration not found' });
      res.status(200).json(registration);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteRegistration(req, res) {
    try {
      const { id } = req.params;
      const registration = await RegistrationService.deleteRegistration(id);
      if (!registration) return res.status(404).json({ message: 'Registration not found' });
      res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = RegistrationController;
