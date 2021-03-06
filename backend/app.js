const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const passport = require('passport');

const componentCollectionRoutes = require('./routes/components');
const authRoutes = require('./routes/auth');

const app = express();

const db = require('../config/key_dev').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
 .then(() => {
     console.log('Connected to database!')
 })
 .catch(() => {
     console.log('Connection to database failed')
 });


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization",
        );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('../config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/components', componentCollectionRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;