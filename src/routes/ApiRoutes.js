
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const EventController = require('../controllers/EventController');
const RegistrationController = require('../controllers/RegistrationController');

// Users
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

// Events
router.post('/events', EventController.createEvent);
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);

// Registrations
router.post('/registrations', RegistrationController.createRegistration);
router.get('/registrations', RegistrationController.getAllRegistrations);
router.get('/registrations/:id', RegistrationController.getRegistrationById);
router.put('/registrations/:id', RegistrationController.updateRegistration);
router.delete('/registrations/:id', RegistrationController.deleteRegistration);

module.exports = router;