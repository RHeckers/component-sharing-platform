const express = require('express');
const multer = require('multer');
const router = express.Router();
const Component = require('../models/component');
const checkAuth = require('../middleware/check-auth');

router.post('/add', checkAuth, (req, res, next) => {
    console.log("Git REPO: =>  ",req.body.gitRepo);
    const component = new Component({
        title: req.body.title,
        description: req.body.description,
        names: req.body.names,
        favorite: req.body.favorite,
        gitRepo: req.body.gitRepo,
        code: req.body.code
    });
    console.log(component.gitRepo);
    component.save().then(createdComponent => {
        res.status(201).json({
            createdComponent,
            id: createdComponent._id
        });
        console.log(createdComponent.gitRepo)
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