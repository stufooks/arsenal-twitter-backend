const express = require('express')
const router = express.Router

const User = require('../db/UserModel')

router.post('/signup', (req, res) => {
  let newUser = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        User.create(newUser)
          .then(user => {
            if(user) {
              var payload = {
                id: newUser.id
              }
              var token = jwt.encode(payload, config.jwtSecret)
              res.json(token)
            } else {
              res.sendStatus(401)
            }
          })
      } else {
        res.sendStatus(401)
      }
    })
})