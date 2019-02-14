const Post = require('./PostModel')

Post.create(
  {
  author: "stufooks",
  content: "Ramsey to Juventus is confirmed."
}, {
  author: "jeff",
  content: "Ozil and Mustafi out this summer."
}
).then(
  console.log('done')
)

