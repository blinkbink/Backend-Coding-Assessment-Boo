const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');


module.exports = function() {
// Route to create a new comment
    router.post('/', async (req, res) => {
        try {
            const {user, content} = req.body;
            const comment = new Comment({user, content});
            await comment.save();
            res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

// Route to like a comment
    router.post('/:id/like', async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({error: 'Comment not found'});
            }
            comment.likes++;
            await comment.save();
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

// Route to unlike a comment
    router.post('/:id/unlike', async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({error: 'Comment not found'});
            }
            if (comment.likes > 0) {
                comment.likes--;
            }
            await comment.save();
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

// Route to get comments sorted by likes
    router.get('/', async (req, res) => {
        try {
            const filter = {};
            const comments = await Comment.find().sort({likes: -1});
            res.json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

    return router;
}