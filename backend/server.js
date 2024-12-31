require('dotenv').config();

// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');

// Load environment variables
dotenv.config();

// Initialize App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin1:Password@123@cluster0.zbuvx.mongodb.net/"; // MongoDB URI from environment variable
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Mongoose Schema and Models
const translationSchema = new mongoose.Schema({
  language: { type: String, required: true }, // 'en', 'si', or 'ta'
  data: { type: Object, required: true }, // JSON object for translations
});

const Translation = mongoose.model('Translation', translationSchema);

const carouselSchema = new mongoose.Schema({
  language: { type: String, required: true }, // 'en', 'si', or 'ta'
  carouselLandingPage: [
    {
      src: { type: String, required: true }, // URL or path to the image
      title: { type: String, required: false },
      intro: { type: String, required: false },
      description: { type: String, required: false },
    },
  ],
});

const Carousel = mongoose.model('Carousel', carouselSchema);

// Utility Function for Error Handling
const handleError = (res, err, message = "Internal Server Error") => {
  console.error(err);
  res.status(500).json({ error: message });
};

// Routes

// 0. Home Route (Optional)
app.get('/', (req, res) => {
  res.send('Server is running and connected!');
});

// 1. Get All Translation Data
app.get('/api/translations', async (req, res) => {
  try {
    const data = await Translation.find();
    res.status(200).json(data);
  } catch (err) {
    handleError(res, err, "Failed to fetch translation data");
  }
});

// 2. Get Translation Data by Language
app.get('/api/translations/:language', async (req, res) => {
  const { language } = req.params;
  try {
    const data = await Translation.findOne({ language });
    if (!data) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(data);
  } catch (err) {
    handleError(res, err, "Failed to fetch translation data");
  }
});

// 3. Add/Update Translation Data
app.post('/api/translations', 
  // Validation for incoming data
  body('language').isIn(['en', 'si', 'ta']).withMessage('Language must be one of en, si, or ta'),
  body('data').isObject().withMessage('Data must be a JSON object'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { language, data } = req.body;
    try {
      let translation = await Translation.findOne({ language });
      if (translation) {
        // Update existing data
        translation.data = data;
        await translation.save();
      } else {
        // Create new data
        translation = new Translation({ language, data });
        await translation.save();
      }
      res.status(200).json({ message: "Translation data saved successfully", translation });
    } catch (err) {
      handleError(res, err, "Failed to save translation data");
    }
  }
);

// 4. Delete Translation Data by Language
app.delete('/api/translations/:language', async (req, res) => {
  const { language } = req.params;
  try {
    const result = await Translation.findOneAndDelete({ language });
    if (!result) return res.status(404).json({ error: "Data not found" });
    res.status(200).json({ message: "Translation data deleted successfully" });
  } catch (err) {
    handleError(res, err, "Failed to delete translation data");
  }
});

// 5. Get All Carousel Data
app.get('/api/carousel', async (req, res) => {
  try {
    const data = await Carousel.find();
    res.status(200).json(data);
  } catch (err) {
    handleError(res, err, "Failed to fetch carousel data");
  }
});

// 6. Get Carousel Data by Language
app.get('/api/carousel/:language', async (req, res) => {
  const { language } = req.params;
  try {
    const data = await Carousel.findOne({ language });
    if (!data) return res.status(404).json({ error: "Carousel data not found" });
    res.status(200).json(data);
  } catch (err) {
    handleError(res, err, "Failed to fetch carousel data");
  }
});

// 7. Add/Update Carousel Data
app.post('/api/carousel', 
  // Validation for incoming data
  body('language').isIn(['en', 'si', 'ta']).withMessage('Language must be one of en, si, or ta'),
  body('carouselLandingPage').isArray().withMessage('carouselLandingPage must be an array'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { language, carouselLandingPage } = req.body;
    try {
      let carousel = await Carousel.findOne({ language });
      if (carousel) {
        // Update existing data
        carousel.carouselLandingPage = carouselLandingPage;
        await carousel.save();
      } else {
        // Create new carousel data
        carousel = new Carousel({ language, carouselLandingPage });
        await carousel.save();
      }
      res.status(200).json({ message: "Carousel data saved successfully", carousel });
    } catch (err) {
      handleError(res, err, "Failed to save carousel data");
    }
  }
);

// 8. Delete Carousel Data by Language
app.delete('/api/carousel/:language', async (req, res) => {
  const { language } = req.params;
  try {
    const result = await Carousel.findOneAndDelete({ language });
    if (!result) return res.status(404).json({ error: "Carousel data not found" });
    res.status(200).json({ message: "Carousel data deleted successfully" });
  } catch (err) {
    handleError(res, err, "Failed to delete carousel data");
  }
});

// Error Handling Middleware (for unhandled errors)
app.use((err, req, res, next) => {
  handleError(res, err);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
