const { User } = require('../models');

const userData =
[
  {
    "username": "Justin",
    "password": "password123"
  },
  {
    "username": "Jimmy",
    "password": "johns123"
  },
  {
    "username": "Subway",
    "password": "eatfresh123"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;