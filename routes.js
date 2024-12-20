const express = require('express');
const College = require('../models/College');

const router = express.Router();

// GET all colleges
router.get('/colleges', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(400).send(err);
  }
});

// POST a new college
router.post('/colleges', async (req, res) => {
  const { name, location, courses, rankings, fees, facilities } = req.body;
  const newCollege = new College({ name, location, courses, rankings, fees, facilities });

  try {
    await newCollege.save();
    res.status(201).json(newCollege);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
