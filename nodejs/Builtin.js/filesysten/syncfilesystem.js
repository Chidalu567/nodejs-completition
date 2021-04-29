//We are going to read and write a file synchronously
const { readFileSync, writeFileSync } = require("fs"); //require destructured data from fs module
const path = require("path"); //require the path module

const data = readFileSync(path.resolve("data.txt"), "utf-8"); //read the file synchronously
console.log(data);

writeFileSync(
  path.resolve("data.txt"),
  "This is to be read in khan academy competition",
  { flag: "a" }
); //write data to a file in append mode
