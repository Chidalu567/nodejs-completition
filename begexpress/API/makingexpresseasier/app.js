const express = require("express"); //require express from node-modules
const app = express(); //create an express app
const path = require("path"); //require path from the node modules
const peopleRouter = require(path.resolve(__dirname, "router", "people.js")); //require a router from a module

//middleware
app.use(express.json()); //use express.json() middleware
app.use(express.urlencoded({ extended: false })); //use express urlencoded middleware
app.use("/api/data", peopleRouter); //middleware to use router for a specific url

app.listen(3000, "localhost", () => {
  console.log("server is listening on port:3000");
});
