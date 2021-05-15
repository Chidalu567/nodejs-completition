const express = require("express"); //require express from the node modules
const app = express(); //create an express application
const path = require("path"); //requre the path from the node modules

/*We have the .all() for handling all the request made by the user we normally use it for 404 making a request that is not handled in the server
.use() this is a middleware that store a function  in all the methods
*/

app.use(express.static("./public")); //middleware to put the static file in all the methods
app.use(express.json()); //use express json  midleware

app.get("/", (req, res) => {
  //   res.status(200).json({ message: "no error occured" }); //send json as response
  res.sendFile(path.join(__dirname, "public", "index.html")); //send a file as response
}); //a get requiest

app.all("*", (req, res) => {
  res.status(404).json({ msg: "There is no page found" }); //send json response to user
});

app.listen(3000, "localhost", () => {
  console.log("server is listening on port: 3000");
}); //listen for a event to occur on port 3000
