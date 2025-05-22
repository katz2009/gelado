// controllers/EventController.js
const EventService = require('../services/eventService');

class EventController {
  static async createEvent(req, res) {
    try {
      const { title, date, created_by } = req.body;
      const event = await EventService.createEvent(title, date, created_by);
      res.status(201).json(event);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllEvents(req, res) {
    try {
      const events = await EventService.getAllEvents();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.getEventById(id);
      if (!event) return res.status(404).json({ message: 'Event not found' });
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const { title, date, created_by } = req.body;
      const event = await EventService.updateEvent(id, title, date, created_by);
      if (!event) return res.status(404).json({ message: 'Event not found' });
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.deleteEvent(id);
      if (!event) return res.status(404).json({ message: 'Event not found' });
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = EventController;
