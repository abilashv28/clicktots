const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validate');
const { validationResult } = require('express-validator');

// Validate request and process contact form submission
router.post('/submit', validateContact, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, createContact);

module.exports = router;
