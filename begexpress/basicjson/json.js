const express = require("express"); //require express from the node module package
const app = express(); //create an express object
const { data } = require("./data.js"); //require the destructed data from a module

app.get("/", (req, res) => {
  res.status(200).json({ msg: "the server responded successfully" }); //send json as a response to the user
}); //create a get response from the server

app.get("/api/data", (req, res) => {
  res.status(200).json(data); //send json as response for the request
}); //get method

//dynamic routing
//this is used to handle parameters in url
app.get("/api/data/:id", (req, res) => {
  console.log(req.params);
  const query = data.find((dat) => {
    return dat.id === Number(req.params.id);
  });
  res.status(200).json({ msg: "request is handled successfully", data: query }); //send json as respone to user
}); //get method

///urlparameter is handled using req.query to handle the query parameter
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name, limit } = req.query; //destructure the object to get value
  const specificName = data.filter((param) => {
    //filter for datas that pass the condition
    return param.name.startsWith(name);
  });
  res.status(200).json(specificName); //send json as response to user
}); //get methods

app.listen(3000, "localhost", () => {
  console.log("Server listen on port localhost:3000"); // the server runs and shows this on the server
}); //listen whenever the user makes a response
