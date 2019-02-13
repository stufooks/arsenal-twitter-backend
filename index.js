const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

// const Post = require('./db/model')
// const userController = require('./controllers/users')
const postsController = require('./controllers/posts')

const app = express()
app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())


app.use('/api/posts', postsController)
// app.use('/users', userController)

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

