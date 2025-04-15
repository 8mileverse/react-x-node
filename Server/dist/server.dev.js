"use strict";

var path = require("path");

var fs = require("fs");

require("dotenv").config();

var express = require("express");

var app = express();
app.use(express.json());

var blogPost = require("./models/BlogPost");

var port = process.env.PORT || 4100;
var frontendUrl = [process.env.FRONTEND_URL, process.env.VERCEL_URL, "http://localhost:5173"]; // Default to localhost if not set
// const reactAppUrl = process.env.REACT_APP_API_URL || 'http://localhost:5173'; // Default to localhost if not set

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
})); // Midddleware to utilize CORS

var cors = require("cors");

corsOptions = {
  origin: frontendUrl,
  // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"]
};
app.use(cors(corsOptions)); // Middleware to use Mongoose

var mongoose = require("mongoose");

var connectDB = require("./config/db.js");

connectDB();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (conn) {
  console.log("MongoDB connected: ".concat(mongoose.connection.readyState === 1 ? mongoose.connection.name : "Connection error")); // Log connection host
})["catch"](function (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit the server if DB connection fails
});
app.get("/", function _callee(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(blogPost.find());

        case 3:
          posts = _context.sent;
          // Fetch all blog posts
          console.log("Posts fetched:", posts); // Log to see what is fetched

          res.json(posts); // Return the posts

          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching posts:", _context.t0);
          res.status(500).json({
            message: "Error fetching posts from the database"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // For the Json File
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

var postRoutes = require("./routes/blogPosts");

app.use("/api", postRoutes); // Middleware

app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});