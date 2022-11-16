const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  pfp: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
