const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const cors = require('cors')

const Post = require('./db/model')

const app = express()
app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())



app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

