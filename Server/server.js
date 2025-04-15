const path = require("path");
const fs = require("fs");
require("dotenv").config();



const express = require("express");
const app = express();
app.use(express.json());
const blogPost = require("./models/BlogPost");

const port = process.env.PORT || 4100;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173"; // Default to localhost if not set
// const reactAppUrl = process.env.REACT_APP_API_URL || 'http://localhost:5173'; // Default to localhost if not set

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



// Midddleware to utilize CORS
const cors = require("cors");
corsOptions = {
  origin: frontendUrl, // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));


// Middleware to use Mongoose
const mongoose = require("mongoose");
const connectDB = require('./config/db.js');
connectDB();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => {
    console.log(`MongoDB connected: ${mongoose.connection.readyState === 1 ? mongoose.connection.name : 'Connection error'}`);  // Log connection host
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);  // Exit the server if DB connection fails
  });
  app.get("/", async (req, res) => {
    try {
      const posts = await blogPost.find(); // Fetch all blog posts
      console.log("Posts fetched:", posts); // Log to see what is fetched
      res.json(posts); // Return the posts
    } catch (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ message: "Error fetching posts from the database" });
    }
  });
  



// For the Json File
// app.get("/", (req, res, next) => {
//   const dataPath = path.join(__dirname, "blogPost.json");
//   fs.readFile(dataPath, "utf-8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading data file" });
//     }
//     res.json(JSON.parse(data));
//   });
// });


// app.get("/", async (req, res) => {
//   try {
//     const posts = await blogPost.find(); // Fetch all blog posts from MongoDB
//     res.json(posts); // Return the data as JSON
//   } catch (err) {
//     console.error("Error fetching posts:", err);
//     res.status(500).json({ message: "Error fetching posts from the database" });
//   }
// });

// Importing Routes
const postRoutes = require('./routes/blogPosts');
app.use('/api', postRoutes);

// Middleware
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
