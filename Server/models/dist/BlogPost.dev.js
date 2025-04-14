"use strict";

var mongoose = require('mongoose');

var BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a text field']
  },
  content: {
    type: String,
    required: [true, 'Please add a tag field']
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('BlogPost', BlogPostSchema, "blogPost");