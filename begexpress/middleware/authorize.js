const { data } = require("./data"); //require data from a module
const auth = (req, res, next) => {
  const { name } = req.query; //query value from url
  if (name === "chidalu") {
    const username = data.find((user) => {
      return user.name === name;
    }); //find object whose key value is given
    req.user = username; //create a request key with value
  } else {
    res.status(404).json({ msg: "Authentication required" }); //send response to user as json
  }
  next(); //passing to next middleware
};

module.exports = auth; //export data to external file
