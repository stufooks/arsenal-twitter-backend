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
    .then((posts) => {
      res.json(posts)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

