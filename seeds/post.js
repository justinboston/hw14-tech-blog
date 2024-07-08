const { Post } = require('../models');
const postData = [
  {
    "title": "Test Post #1",
    "body": "This is a test post to the tech blog"
  },

  {
    "title": "Test Post #2",
    "body": "This is a second test post to the tech blog"
  },
  
]
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;