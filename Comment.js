// server/models/Comment.js

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    enum: ['Positive', 'Negative', 'Neutral'],
  },
  summary: {
    type: String,
  },
  keywords: {
    type: [String],
  },
  legislationId: { // To link comments to a specific draft legislation
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);