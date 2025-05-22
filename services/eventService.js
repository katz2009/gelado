// services/EventService.js
const EventModel = require('../models/eventModel');

class EventService {
  static async createEvent(title, date, created_by) {
    return await EventModel.create(title, date, created_by);
  }

  static async getAllEvents() {
    return await EventModel.findAll();
  }

  static async getEventById(id) {
    return await EventModel.findById(id);
  }

  static async updateEvent(id, title, date, created_by) {
    return await EventModel.update(id, title, date, created_by);
  }

  static async deleteEvent(id) {
    return await EventModel.delete(id);
  }
}

module.exports = EventService;
