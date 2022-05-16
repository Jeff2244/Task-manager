const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must need a name'],
    trim: true,
    maxlength: [20, 'name should not be more than 20 charaters']
  },
  completed: {
      type: Boolean,
      default: false
  }
});

module.exports = mongoose.model('Task', taskSchema)
