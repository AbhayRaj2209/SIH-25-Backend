
const axios = require('axios');

exports.analyzeComment = async (text) => {
  try {
    const response = await axios.post(process.env.AI_MODEL_API_URL, { text });
    return response.data;
  } catch (error) {
    console.error('Error calling AI model:', error);
    throw new Error('Failed to analyze comment with AI model.');
  }
};