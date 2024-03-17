'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port =  process.env.PORT || 3000;

const { MongoMemoryServer } = require('mongodb-memory-server');

// set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB using MongoDB Memory Server
const mongoServer = new MongoMemoryServer();

mongoServer.start().then(async () => {
    const mongoUri = await mongoServer.getUri();
    mongoose.connect(mongoUri, )
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Error connecting to MongoDB:', err));
});

// routes
app.use('/comments', require('./routes/comment')());
app.use('/', require('./routes/profile')());

// start server
if (process.env.NODE_ENV !== 'test') {
app.listen(port);
    }
console.log('Express started. Listening on %s', port);

//export for automated test
module.exports = app;