const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173"; // Default to localhost if not set
// const reactAppUrl = process.env.REACT_APP_API_URL || 'http://localhost:5173'; // Default to localhost if not set
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));

app.get("/data", (req, res, next) => {
  const dataPath = path.join(__dirname, "blogPost.json");
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading data file" });
    }
    res.json(JSON.parse(data));
  });
});

// Middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
