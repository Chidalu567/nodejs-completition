const express = require("express"); //require exxpress from node module
const mongoose = require("mongoose"); //requiess()nm.llzlmz;nre mongoose from the nodemodule
const body_parser = require("body-parser"); //require body parser from the nodemodule
const app = express(); //ceate an express app
const path = require("path"); //require from node module
const actionRouter = require(path.join(__dirname, "router", "action")); //require dfile from node module


//middleware
app.use(express.json()); //middleware in all the router
app.use(express.urlencoded({ extended: false })); //middle ware to use
app.use("/api/action", actionRouter); //middleware to use external router

app.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
