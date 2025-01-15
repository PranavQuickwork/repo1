const mongoose = require('mongoose'); // Import Mongoose

// Define the schema for a task
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // The title is a required field
  completed: { type: Boolean, default: false }, // The completed field defaults to `false`
});

// Export the model to use it in other parts of the app
module.exports = mongoose.model('Task', taskSchema);
