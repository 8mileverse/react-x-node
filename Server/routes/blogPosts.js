const path = require('path');
const express = require("express");

const router = express.Router();
const blogPost = require("../models/BlogPost");

const { getAllPosts, getPostById, createNewPost, updateExistingPost, deletePostById, deleteAllPosts } = require('../controllers/post.controller.js');

// Get all blog posts
router.get("/", getAllPosts);

// Get a specific blog post by ID
router.get('/posts/:id', getPostById);  // Corrected path

// Create New Post
router.post("/upload", createNewPost);

// Update Existing Post
router.put('/posts/:id', updateExistingPost);  // Corrected path

// Delete All Posts
router.delete('/', deleteAllPosts);

// Delete Posts by Id
router.delete('/posts/:id', deletePostById);  // Corrected path

module.exports = router;
