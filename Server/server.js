const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();


const port = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';  // Default to localhost if not set
const reactAppUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'; // Default to localhost if not set
app.use(bodyParser.json());

corsOptions = {
  origin: reactAppUrl,
  methods: ['GET', 'POST'], 
};

app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  res.status(200).json({
    blogPost: [
      {
        title: "The Magic of Morning Routines",
        content:
          "Start your day with purpose and energy. A simple morning routine can change your life.",
      },
      {
        title: "Top 5 Coding Habits",
        content:
          "Good coding habits make you faster and more efficient. Let’s explore the top five you need today.",
      },
      {
        title: "Why Nature Walks Boost Creativity",
        content:
          "Stepping outside can refresh your mind. Nature is the ultimate creativity booster.",
      },
      {
        title: "The Art of Saying No",
        content:
          "Protecting your time is powerful. Learn why saying no is a skill, not a weakness.",
      },
      {
        title: "Minimalism: Less Is More",
        content:
          "Owning less leads to living more. Minimalism brings clarity to your space and mind.",
      },
      {
        title: "Mastering Remote Work",
        content:
          "Working remotely is more than just staying home. Learn the hacks to stay productive and connected.",
      },
      {
        title: "Secrets of Fast Learners",
        content:
          "Fast learners use strategies, not just effort. Discover the methods that top students use.",
      },
      {
        title: "Building Self-Discipline",
        content:
          "Self-discipline is a muscle you can grow. Start small, stay consistent, and see massive change.",
      },
      {
        title: "The Power of Micro-Goals",
        content:
          "Tiny goals create big victories. Focus on the next step, not the entire staircase.",
      },
      {
        title: "Cooking for Beginners",
        content:
          "Everyone can cook a great meal. Start with simple recipes and build your kitchen confidence.",
      },
      {
        title: "How Journaling Clears Your Mind",
        content:
          "Writing helps you process thoughts and emotions. Try journaling five minutes a day.",
      },
      {
        title: "Investing for Absolute Beginners",
        content:
          "Investing isn't just for the rich. Learn the basics and start building wealth today.",
      },
      {
        title: "Top 3 Morning Exercises",
        content:
          "Boost your energy with simple morning moves. You don’t need a gym to feel amazing.",
      },
      {
        title: "Why Failure Is Good",
        content:
          "Failure is a hidden teacher. It shows you what doesn't work and pushes you closer to success.",
      },
      {
        title: "Photography Basics You Must Know",
        content:
          "Great photos aren’t just luck. Learn the basics of light, angles, and storytelling.",
      },
      {
        title: "How to Read More Books",
        content:
          "Busy schedule? No problem. Here’s how to squeeze reading into your daily life.",
      },
      {
        title: "Simple Meditation for Stress Relief",
        content:
          "Meditation isn’t complicated. A few deep breaths can completely change your day.",
      },
      {
        title: "Traveling on a Budget",
        content:
          "See the world without breaking your bank. Smart tips to travel more for less.",
      },
      {
        title: "Building a Personal Brand Online",
        content:
          "Your online presence matters. Learn how to craft a brand that opens new doors.",
      },
      {
        title: "Daily Habits of Happy People",
        content:
          "Happiness isn’t random. Discover the small daily habits that joyful people swear by.",
      },
    ],
  });
});

// Middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
