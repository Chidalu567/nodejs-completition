//We are going to read and write to a file asynchronously

const { readFile, writeFile } = require("fs"); //require data from the fs module

readFile("./data.txt", "utf-8", (err, data) => {
  if (!data) {
    error = new Error(err);
    console.log(error);
  } else {
    console.log(data);
  }
}); //read file Asynchronously with a callback

//Writing to a file asynchronously
console.log("#---|||||||||||||||||||||||||||||||||||||||||||||||---#)");
readFile("./data.txt", "utf-8", (err, data) => {
  try {
    writeFile(
      "./data.txt",
      "This is written newly",
      "utf8",
      { flag: "a" },
      (err, data) => {}
    );
  } catch {
    console.log(new Error(err));
  }
});
