const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Connect to MongoDB (adjust the URL if using MongoDB Atlas or another setup)
mongoose.connect('mongodb://localhost/feedbackDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for feedback
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    college: String,
    feedback: String,
    timestamp: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Parse incoming requests with URL-encoded and JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Handle feedback form submission
app.post('/submit-feedback', (req, res) => {
    const { name, email, college, feedback } = req.body;

    // Create a new feedback document
    const newFeedback = new Feedback({
        name,
        email,
        college,
        feedback
    });

    // Save the feedback to MongoDB
    newFeedback.save()
        .then(() => {
            // Send a success response
            res.send({ status: 'success', message: 'Feedback submitted successfully!' });
        })
        .catch(err => {
            console.error('Error saving feedback:', err);
            res.status(500).send({ status: 'error', message: 'Failed to save feedback' });
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
