const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
