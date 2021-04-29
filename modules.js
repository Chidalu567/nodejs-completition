//We can configure our default export from a file or module using the module function

const name = "chidalu"; //variable definition in javascript
const age = 14; //variable ddefinition in jaascript

const country = {
  name: ["Austrialia", "Nigeria", "China", "Portugal"],
};

module.exports.Person = { name: name, age: age }; //assign value o the dictionary
module.exports.Country = country; //assign a key and value to the exports dictionary in module

//setting a key and value to the export dictionary in the module
