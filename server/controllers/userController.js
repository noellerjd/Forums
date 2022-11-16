const User = require("../models/User");

module.exports = {
  // get users, get a user, update user, create user, delete a user
  createUser(req, res) {
    User.create(req.body)
      .then((user_db) => res.json(user_db))
      .catch((err) => res.status(500).json(err));
  },
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getUser(req, res) {
    User.findOne({ _id: req.params.userId }).then((user) =>
      !user
        ? res.status(404).json({ message: "Invalid user ID" })
        : res.json(user)
    );
  },
  // get user posts, get a user post, create user post, update user post?, delete user post,
  // get replies, get a user reply, create user reply, update user reply?, delete user reply
};
