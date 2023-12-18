const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
var URI = process.env.URI;

// mongoose.connect('mongodb://localhost:27017/yogaClasses');
mongoose.connect(URI);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    selectedBatch: String,
    fees: Boolean
  });
  
  // Create a model based on the schema
  const User = mongoose.model('User', userSchema);

// API endpoint to handle form submissions
app.post('/getData', async (req, res) => {
  const { name, age, selectedBatch, fees } = req.body;
  if(age < 18 || age > 65 || !fees) {
    return res.status(400).json({ error: 'Invalid age. Age must be between 18 and 65.' });
  }

  // Save user data to the database
  const user = new User({ name, age, selectedBatch, fees });
  await user.save();

  // For simplicity, just return a success response
  res.json({ success: true, message: 'Enrollment successful!' });
});


app.listen(3000, () => {
    console.log("Listening to port 3000...");
})
