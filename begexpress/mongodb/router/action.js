const express = require("express"); //require express from node module
const router = express.Router(); //import express router
const db = require("mongoose"); //require data from the node module
const Todo = require("../model/model"); //require data from node module

//use expressAsyncHandler to wrap all the functions that has anything to do with mongodb.
//in index.js use a middleware to get the error.

//connection of database
db.connect("mongodb://localhost:27017/TODO"); //connect to database

router.post("/", async (req, res) => {
  const { record, date } = req.body; //collect data from post request
  console.log(record, date);
  const result = await Todo.create({ record: record, date: date }); //create value in database
  res.status(200).json({ msg: "data collected from body" }); //send response to user
}); //post method

router.get("/", async (req, res) => {
  const { act } = req.body; //get data from request body
  const result = await Todo.findOne({ record: act }); //find all data in the database
  res.status(201).json({ msg: "a success", data: result }); //send json response to user
}); //get method

router.put("/:id", async (req, res) => {
  const { id } = req.params; //get the parameters to the request
  const { act } = req.body; //get the act from the body of request
  const result = await Todo.updateOne({ date: id }, { $set: { record: act } });
  res.status(200).json({ msg: "success in updating database", data: result }); //send response as json to user
}); //put request to update a database

router.delete("/:id", async (req, res) => {
  const { id } = req.params; //get the parameters
  const result = await Todo.deleteOne({ date: id }); //delete the data whose date is equal to id
  res.status(200).json({ msg: "data is deleted already", data: result }); //send response as json to user
});

module.exports = router; //export data to external file

/*Mongodb is used to store data and mongoose is used to interact with the database engine*/
