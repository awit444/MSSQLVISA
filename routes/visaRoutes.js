const express = require('express');
const router = express.Router();
const visaController = require('../controllers/visaController');

// POST /api/visa
// Route to handle data insertion from the other system
router.post('/', visaController.insertData);

module.exports = router;
