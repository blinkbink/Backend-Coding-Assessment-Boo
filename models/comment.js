const mongoose = require('mongoose');

// Define the comment schema
const commentSchema = new mongoose.Schema({
    user: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
});

// Create a Comment model using the schema
const Comment = mongoose.model('Comment', commentSchema);

// Export the Comment model
module.exports = Comment;
