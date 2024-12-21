const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  courses: [String],
  rankings: Number,
  fees: Number,
  facilities: [String]
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;
