const mongoose = require("mongoose"); //require data from the node module

//schema
const todoSchema = new mongoose.Schema(
  {
    record: { type: String, required: true },
    date: { type: Number, required: true, default: 100 },
  },
  { collection: "database" }
); //create a mongoose schema

const model = mongoose.model("Todomodel", todoSchema); //create the database model

module.exports = model; //export to external file
