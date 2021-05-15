const express = require("express"); //require express from the node module
const router = express.Router(); //express router
const path = require("path"); //require path from the node module
const data = require("../data"); //require data from a module

router.get("/", (req, res) => {
  res.status(200).json(data); //respones json
}); //get method

router.post("/", (req, res) => {
  const { name, age, company } = req.body; //get the value decondtructed from the body
  const newData = [...data]; //spread operator
  const date = new Date().getTime().toString(); //convert time to string
  newData.push({ id: date, name: name, age: age, company: company }); //add to the end of an array
  res.status(200).json(newData); //send response to user as json
}); //post method

router.put("/:id", (req, res) => {
  const { id } = req.params; //request dynamic parameters
  const { name, age, company } = req.body; //decontruct from the body
  const newData = data.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
      person.company = company;
      person.age = age;
    }
    return person; //return updated person
  });
  res.status(200).json(newData); //send response to user as json
}); //put method

router.delete("/", (req, res) => {
  const { name } = req.query; //get the query
  const newData = data.filter((person) => {
    return person.name !== String(name); //filter for a condition
  });
  res.status(200).json(newData); //send json as response to user
}); //delete method

module.exports = router; //export data to external file
