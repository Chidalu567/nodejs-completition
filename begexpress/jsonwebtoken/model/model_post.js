const mongoose = require("mongoose"); //require mongoose from node module

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min:6
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    email: {
      type: String,
      required: true,
      min:6
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "JWT" }
); //create a database schema

const postModel = mongoose.model("postModel", postSchema); //create a model

module.exports = postModel; //export data to external file
