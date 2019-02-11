const Post = require('./model')

Post.create({
  author: "stufooks",
  content: "Ramsey to Juventus is confirmed."
}).then(
  console.log('done')
)