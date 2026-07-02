const express = require('express');
const { createEvent } = require('../controllers/eventController');

const router = express.Router();

// POST /api/v1/events
router.post('/events', createEvent);

module.exports = router;
