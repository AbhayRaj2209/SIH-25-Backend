// This is the brain of your backend. It handles the business logic, including the crucial step of integrating  AI/ML model.



const Comment = require('../models/Comment');
const axios = require('axios'); // For making API calls to the AI model

// Function to handle the submission of a new comment
exports.submitComment = async (req, res) => {
  const { text, legislationId } = req.body;

  try {
    // 1. Send the comment text to the AI/ML model API
    // Replace this URL with the actual endpoint your friend provides
    const aiResponse = await axios.post('your_ai_model_api_url/analyze', { text });

    const { sentiment, summary, keywords } = aiResponse.data;

    // 2. Create a new comment document with the AI's results
    const newComment = new Comment({
      text,
      legislationId,
      sentiment,
      summary,
      keywords, // The AI model should return an array of keywords
    });

    // 3. Save the comment to the database
    await newComment.save();

    // 4. Send a success response back to the frontend
    res.status(201).json({ 
      message: 'Comment submitted and analyzed successfully', 
      comment: newComment 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      message: 'Server error',
      error: err.message
    });
  }
};

// Function to get a summary report for a specific legislation
exports.getReport = async (req, res) => {
  try {
    const { legislationId } = req.params;

    const comments = await Comment.find({ legislationId });

    if (!comments || comments.length === 0) {
      return res.status(404).json({ message: 'No comments found for this legislation.' });
    }

    // You can perform aggregation here
    const totalComments = comments.length;
    const sentimentCounts = comments.reduce((acc, comment) => {
      acc[comment.sentiment] = (acc[comment.sentiment] || 0) + 1;
      return acc;
    }, {});

    // Collect all keywords for the word cloud
    const allKeywords = comments.flatMap(comment => comment.keywords);

    res.json({
      totalComments,
      sentimentDistribution: sentimentCounts,
      overallSummary: 'This is an overall summary based on all comments...', // You could generate a summary here
      allKeywords, // This data can be used to generate the word cloud on the frontend
      comments // You might also want to return the individual comments
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get a single comment by its ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found.' });
    }
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};