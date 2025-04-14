"use strict";

var blogPost = require("../models/BlogPost"); // @desc    Get all posts
// @route   GET /api/posts


exports.getAllPosts = function _callee(req, res) {
  var blogPosts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(blogPost.find());

        case 3:
          blogPosts = _context.sent;
          res.status(200).json(blogPosts);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // @desc    GET all posts by id
// @route   GET /api/:id posts by id


exports.getPostById = function _callee2(req, res) {
  var blogPosts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(blogPost.findById(req.params.id));

        case 3:
          blogPosts = _context2.sent;

          if (blogPosts) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            success: false,
            message: "Blog Post does not exist"
          }));

        case 6:
          res.json({
            success: true,
            data: post
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            success: false,
            message: "Something went wrong"
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; // @desc    Get a specific post by ID
// @route   GET /api/posts/:id


exports.createNewPost = function _callee3(req, res) {
  var _req$body, title, content, newPost;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, content = _req$body.content;
          _context3.prev = 1;
          newPost = new blogPost({
            title: title,
            content: content
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(newPost.save());

        case 5:
          res.status(201).json(newPost);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(400).json({
            message: _context3.t0.message
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // @desc    POST a new post
// @route   POST /api/posts


exports.updateExistingPost = function _callee4(req, res) {
  var updatedPost;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(blogPost.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedPost = _context4.sent;
          res.json(updatedPost);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            message: _context4.t0.message
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // @desc    PUT a new post
// @route   PUT /api/posts/Id:


exports.deleteAllPosts = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(blogPost.deleteMany({}));

        case 3:
          res.status(200).json({
            success: true,
            data: {},
            message: "All Posts deleted successfully"
          });
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            success: false,
            message: "Something Went Wrong"
          });
          console.log(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // @desc    Delete all post
// @route   DELETE /api/posts/:id:


exports.deletePostById = function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(blogPost.findByIdAndDelete(req.params.id));

        case 3:
          res.json({
            message: "Post deleted"
          });
          _context6.next = 9;
          break;

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          res.status(400).json({
            message: _context6.t0.message
          });

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // @desc    Delete a post
// @route   DELETE /api/posts/:id