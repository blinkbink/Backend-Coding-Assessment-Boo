const request = require('supertest');
const app = require('../app');
const Profile = require('../models/profile');



describe('Part 1: Storing Profile Data in MongoDB', () => {
    beforeEach(async () => {
        // Clear the database before each test
        await Profile.deleteMany();
    });

    it('should create a new profile', async () => {
        const res = await request(app)
            .post('/profile')
            .send({
                _id:1,
                name: 'Iqbal'
            });
        console.log(res.body);
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Iqbal');
        // Add more assertions as needed
    });

    it('should retrieve a profile by ID', async () => {
        // Create a test profile
        const testProfile = await Profile.create({
            _id:1,
            name: 'Iqbal'
        });

        const res = await request(app).get(`/profile/${testProfile._id}`);
        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Iqbal');
    });
});