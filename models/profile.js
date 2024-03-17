const mongoose = require('mongoose');

// Define the profile schema
const profileSchema = new mongoose.Schema({
    _id: { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false },
    mbti: { type: String, required: false },
    enneagram: { type: String, required: false },
    variant: { type: String, required: false },
    tritype: { type: Number, required: false },
    socionics: { type: String, required: false },
    sloan: { type: String, required: false },
    psyche: { type: String, required: false },
    image: { type: String, required: false },
});

// Create a Profile model using the schema
const Profile = mongoose.model('Profile', profileSchema);

// Export the Profile model
module.exports = Profile;