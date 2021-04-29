//the path module allows us to get access to the directory
const path = require("path"); //require path module from the nodemodule

// console.log(__dirname); //gives the directpry name of the file
// console.log(__filename); //gives the exact directory to the file

var result = path.join(__dirname, "explicit", "stop"); //joins paths together
console.log(result);

var result = path.resolve("pathmods"); //gives the absolute path;
//adding the base directpry for you
console.log(result);
