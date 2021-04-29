const http = require("http"); //require http from the http module
const path = require("path"); //require path module
const { readFileSync } = require("fs"); //require readFileSync from nodemodule
const data = require("./data"); //require data from the module
const Homepage = readFileSync(path.resolve("index.html")); //readFileSynchronously

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/api/data") {
    res.writeHead(200, { "content-type": "text/html" }); //writehead for the response
    res.write(Homepage); //write json on response
    res.end();
  }
}); //create server

server.listen(3000, "localhost", () => {
  console.log("Server is running on port: localhost:3000");
}); //server is listening on port 3000
