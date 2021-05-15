const express = require("express"); //require express from node moduules
const app = express(); //create an express application
const auth = require("./authorize"); //require a data from a module

app.use(express.json()); //json middleware
app.use("/", auth); //middleware to put the function in all my methods

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Success", data: req.user }); //send json as response to user
}); //get method

app.listen(3000, "localhost", () => {
  console.log("Server is running on port: 3000");
});
