const express = require('express');
const multer = require('multer');
const router = express.Router();
const Component = require('../models/component');
// const checkAuth = require('../middleware/check-auth');

router.post('/add',(req, res, next) => {
    const component = new Component({
        title: req.body.title,
        description: req.body.description,
        names: req.body.names,
        favorite: req.body.favorite,
        code: req.body.code
    });
    // console.log(component);
    component.save().then(createdComponent => {
        console.log("Created component = ", createdComponent)
        res.status(201).json({
            createdComponent,
            id: createdComponent._id
        });
    })
    .catch(err => console.log(err));


});

router.get('/',(req, res, next) => {
    Component.find().sort({index: 1})
      .then(components => {
          res.status(200).json(components);
      });
});

module.exports = router;