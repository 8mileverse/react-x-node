"use strict";

var path = require('path');

var express = require("express");

var router = express.Router();

var blogPost = require("../models/BlogPost");

var _require = require('../controllers/post.controller.js'),
    getAllPosts = _require.getAllPosts,
    getPostById = _require.getPostById,
    createNewPost = _require.createNewPost,
    updateExistingPost = _require.updateExistingPost,
    deletePostById = _require.deletePostById,
    deleteAllPosts = _require.deleteAllPosts; // Get all blog posts


router.get("/", getAllPosts); // Get a specific blog post by ID

router.get('/posts/:id', getPostById); // Corrected path
// Create New Post

router.post("/posts", createNewPost); // Update Existing Post

router.put('/posts/:id', updateExistingPost); // Corrected path
// Delete All Posts

router["delete"]('/', deleteAllPosts); // Delete Posts by Id

router["delete"]('/posts/:id', deletePostById); // Corrected path

module.exports = router;