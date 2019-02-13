const express = require('express')
// const mongoose = require('mongoose')
const router = express.Router()

const Post = require('../db/UserModel')

router.get('/', (req, res) => {
  Post.find({})
    .sort([["likes", -1]])
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/:id', (req, res) => {
  Post.find({ _id: req.params.id })
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.send('hello world')
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/', (req,res) => {
  Post.create(req.body)
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: {likes: req.body.likes }})
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router