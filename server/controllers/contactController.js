const Contact = require('../models/Contact');
const sendEmail = require('../utils/emailService');
const { validationResult } = require('express-validator');

// @desc    Create a new contact submission
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
    try {
        // Validate request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: 'Invalid input data',
                details: errors.array()
            });
        }

        const { name, email, message } = req.body;

        // Create contact submission
        const contact = await Contact.create({
            name,
            email,
            message
        });

        // Send email notification in background
        sendEmail(contact).catch(error => {
            console.error('Email notification failed:', error);
        });

        // Send success response
        res.status(201).json({
            success: true,
            data: contact
        });

    } catch (error) {
        console.error('Contact creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating contact submission'
        });
    }
};

module.exports = {
    createContact
};
