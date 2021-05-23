const express = require("express"); //require express from node module
const app = express(); //create an express application
const path = require("path"); //require path from node modules
const postRoute = require(path.join(__dirname, "router", "post.js")); //require data from a module

//set middleware
app.use(express.json()); //use express json
app.use(express.urlencoded({ extended: false })); //middleware to put urlencodedd in all routes
app.use("/api/", postRoute); //middleware for external route

app.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
