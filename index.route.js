const express = require('express');
const petRoutes = require('./server/pet/pet.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount pet routes at /pet
router.use('/pets', petRoutes);

module.exports = router;
