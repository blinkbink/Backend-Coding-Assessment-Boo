'use strict';

const express = require('express');
const router = express.Router();

// const profiles = [
//   {
//     "id": 1,
//     "name": "A Martinez",
//     "description": "Adolph Larrue Martinez III.",
//     "mbti": "ISFJ",
//     "enneagram": "9w3",
//     "variant": "sp/so",
//     "tritype": 725,
//     "socionics": "SEE",
//     "sloan": "RCOEN",
//     "psyche": "FEVL",
//     "image": "https://soulverse.boo.world/images/1.png",
//   }
// ];

const Profile = require("../models/profile");

module.exports = function() {

// POST route for creating new profile
  router.post('/profile', async (req, res) => {
    try {
      const { _id, name, description, mbti, enneagram, variant, tritype, socionics, sloan, psyche, image } = req.body;
      const profile = new Profile({ _id, name, description, mbti, enneagram, variant, tritype, socionics, sloan, psyche, image });
      await profile.save();
      res.status(201).json({ name:profile.name });
    } catch (err) {
      console.error('Error creating profile:', err);
      res.status(500).json({ error: 'An error occurred while creating the profile' });
    }
  });


  // Route to render profile page by ID
  router.get('/:id', async (req, res, next) => {
    try {
      const profileId = req.params.id;

      const profile = await Profile.findById(profileId);
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
      res.render('profile_template', {
        profile: profile,
      });

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // For automated testing
  router.get('/profile/:id', async (req, res, next) => {
    try {
      const profileId = req.params.id;

      const profile = await Profile.findById(profileId);
      if (!profile) {
        return res.status(404).json({message:'Profile not found'});
      }
      else
      {
        res.status(200).json({ name:profile.name});
      }

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
}

