const express = require('express');
const router = express.Router();
const visaController = require('../controllers/visaController');
const requireApiKey = require('../middleware/authMiddleware');

// Apply the API Key protection to ALL routes in this file
router.use(requireApiKey);

// POST /api/visa
// Route to handle data insertion from the other system
router.post('/', visaController.insertData);

// GET /api/visa
// Route to fetch all orders
router.get('/', visaController.getAllVisaData);

// GET /api/visa/:id
// Route to fetch a specific transaction by TransID
router.get('/:id', visaController.getVisaData);

module.exports = router;
