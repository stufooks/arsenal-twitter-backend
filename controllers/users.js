const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");

const passport = require("../config/passport");
const config = require("../config/config");
const User = require("../db/UserModel");

router.post("/signup", (req, res) => {
  console.log('backend post signup called')
  let newUser = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  console.log(newUser)
  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      console.log('layer 1')
      User.create(newUser).then(user => {
        if (user) {
          console.log('layer 2')
          var payload = {
            id: newUser.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json(token);
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      if (user.password === req.body.password) {
        var payload = {
          username: user.username
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token: token
        });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  });
});

module.exports = router