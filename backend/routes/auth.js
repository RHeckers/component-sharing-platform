const express = require("express");
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");

const User = require("../models/user");

const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const hashedPassword = passwordHash.generate(req.body.password);
  const user = new User({
    username: "",
    profileImg: "",
    favorites: [],
    email: req.body.email,
    password: hashedPassword
  });
  user
    .save()
    .then(result => {
      res.status(201).json({
        msg: "User created",
        result: result
      });
    })
    .catch(err => res.status(500).json(err));
});

router.post("/signin", (req, res, next) => {
  let fetchedUser;
  User.find({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ msg: "Auth Failed, no user found" });
      }
      fetchedUser = user[0];
      return passwordHash.verify(req.body.password, fetchedUser.password);
    })
    .then(result => {
      if (!result) {
        return res
          .status(401)
          .json({ msg: "Auth Failed, passwords do not match" });
      }

      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "this is just some long string to hash the token",
        { expiresIn: "24h" }
      );

      res.status(200).json({ token: token, user: fetchedUser });
    })
    .catch(err =>
      res.status(500).json({ msg: "Something went wrong!", err: err })
    );
});

router.get("/", (req, res, next) => {
  User.find().then(collections => {
    res.status(200).json(collections);
  });
});

router.get("/tokenstatus", checkAuth, (req, res, next) => {
  res.status(200).json(true);
});

router.get("/current", checkAuth, (req, res, next) => {
  const userId = res.userId;
  User.findById(userId)
    .then(user => {
      if (user) {
        res.user = user;
        res.status(200).json({ auth: true, user: res.user });

      }else{
        res.status(401).json({ msg: 'You are not authorized, or no valid user has bin found' });
      }
    })
    .catch(err => {
        res.status(500).json({ msg: 'Sorry... an internal error occured!' });
        console.log(err)
    });
});

module.exports = router;
