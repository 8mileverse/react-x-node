const blogPost = require("../models/BlogPost");

// @desc    Get all posts
// @route   GET /api/posts
exports.getAllPosts = async (req, res) => {
  try {
    const blogPosts = await blogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    GET all posts by id
// @route   GET /api/:id posts by id

exports.getPostById = async (req, res) => {
  try {
    const blogPosts = await blogPost.findById(req.params.id);
    if (!blogPosts) {
      return res.status(404).json({
        success: false,
        message: "Blog Post does not exist",
      });
    }
    res.json({
      success: true,
      data: blogPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
// @desc    Get a specific post by ID
// @route   GET /api/posts/:id

exports.createNewPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new blogPost({ title, content });
    await newPost.save();

    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    POST a new post
// @route   POST /api/posts

exports.updateExistingPost = async (req, res) => {
  try {
    const updatedPost = await blogPost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    PUT a new post
// @route   PUT /api/posts/Id:

exports.deleteAllPosts = async (req, res) => {
  try {
    await blogPost.deleteMany({});
    res.status(200).json({
      success: true,
      data: {},
      message: "All Posts deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
    console.log(error);
  }
};

// @desc    Delete all post
// @route   DELETE /api/posts/:id:

exports.deletePostById = async (req, res) => {
  try {
    await blogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// @desc    Delete a post
// @route   DELETE /api/posts/:id
