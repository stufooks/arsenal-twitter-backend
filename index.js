const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const Post = require('./db/model')

const app = express()
app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.get('/api/posts', (req, res) => {
  Post.find({})
    .sort([["likes", -1]])
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/api/posts/:id', (req, res) => {
  Post.find({ _id: req.params.id })
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

app.delete('/api/posts/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.send('hello world')
  })
  .catch(err => {
    console.log(err)
  })
})

app.post('/api/posts', (req,res) => {
  Post.create(req.body)
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

app.put('/api/posts/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: {likes: req.body.likes }})
  .then(post => {
    res.json(post)
  })
  .catch(err => {
    console.log(err)
  })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

