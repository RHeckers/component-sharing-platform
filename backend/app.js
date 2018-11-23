const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

const componentCollectionRoutes = require('./routes/components');

const app = express();

const db = require('../configs/keys_dev').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
 .then(() => {
     console.log('Connected to database!')
 })
 .catch(() => {
     console.log('Connection to database failed')
 });

// app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization",
        );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());

app.use('/api/components', componentCollectionRoutes);

module.exports = app;