const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Love it!",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "I like this!",
        user_id: 2,
        post_id: 1,
        
    },
    
    {
        comment_text: "I'm sharing this!",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;