const request = require('supertest');
const app = require('../app');
const Comment = require('../models/comment');


describe('Part 2: Backend API for Commenting and Voting', () => {
    beforeEach(async () => {
        // Clear the database before each test
        await Comment.deleteMany();

    });

    const comment = new Comment();
    comment._id=null;

    it('should create a new comment', async () => {
        const res = await request(app)
            .post('/comments')
            .send({
                user: 'Iqbal',
                content: 'Comment',
            });

        console.log(res.body);
        comment._id=res._id;
        expect(res.status).toBe(201);
        expect(res.body.user).toBe('Iqbal');
        // Add more assertions as needed
    });

    // Test case for liking a comment
    it('should like a comment', async () => {

        const comment = new Comment({ user: 'Iqbal', content: 'Comment lagi' });
        await comment.save();

        const res = await request(app)
            .post(`/comments/${comment._id}/like`);

        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body.likes).toBe(1);
    });

    // Test case for unliking a comment
    it('should unlike a comment', async () => {

        const comment = new Comment({ user: 'Iqbal', content: 'Comment lagi' });
        await comment.save();

        const like = await request(app)
            .post(`/comments/${comment._id}/like`);

        const unlike = await request(app)
            .post(`/comments/${comment._id}/unlike`);

        console.log(like.body);
        console.log(unlike.body);
        expect(like.status).toBe(200);
        expect(like.body.likes).toBe(1);
        expect(unlike.status).toBe(200);
        expect(unlike.body.likes).toBe(0);
    });
});