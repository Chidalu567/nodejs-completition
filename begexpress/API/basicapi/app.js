const express = require("express"); //require express from the module
const app = express(); //create an express app
const data = require("./data"); //require data from the module

//middleware
app.use(express.urlencoded({ extended: false })); //middleware to use urlencided in all methods
app.use(express.json()); //use express json middleware

//methods
app.get("/api/data", (req, res) => {
  res.status(200).json({ msg: "Request handled", data: data }); //send json as response to user
});

app.post("/api/data", (req, res) => {
  const id = 5; //get the time and parse to string
  console.log(req.body);
  const { name } = req.body; //deconstruct the name key value
  const { age } = req.body; //get the value by deconstruction
  const { company } = req.body; //get the value by deconstructuring
  //const newData = [...data]; //spread the datas in the array
  data.push({ id: id, name: name, age: age, company: company }); //push new object to the end of an array
  res.status(200).json({ msg: "Request handled", data: data }); //send json as response to user
}); //post method

app.put("/api/data/:id", (req, res) => {
  const { id } = req.params; //get the params
  console.log(id);
  console.log(req.body);
  const { name, age, company } = req.body; //get value by deconstruction
  const newData = data.map((param) => {
    if (param.id == Number(id)) {
      param.name = name; //change the value of the key
      param.age = age; //chage the value of the key
      param.company = company; //change the value of the key
    }
    return param; //return the new datas
  }); //map a new array
  res.status(200).json({ msg: "Request handled", data: newData }); //send json as response to user
}); //put  method

app.delete("/api/data/:id", (req, res) => {
  const { id } = req.params; //get the dynamic parameter passed to the url
  const newData = data.filter((param) => {
    param.id !== Number(id);
  }); //filter the array for a condition
  res.status(200).json({ msg: "request handled", data: newData }); //send json as response to
}); //delete method

app.listen(3000, "localhost", () => {
  console.log("Server is listening on port:3000");
});
