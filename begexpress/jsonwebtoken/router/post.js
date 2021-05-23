const express = require("express"); //require express from node module
const router = express.Router(); //create an express router
const mongoose = require("mongoose"); //require mongoose from node module
const register = require("../model/model_post"); //require data from a module
const Joi = require("joi"); //require data from node modules
const bcrypt = require("bcryptjs"); //require data from node module
const jwt = require("jsonwebtoken"); //require data from node module
const dotenv = require("dotenv"); //require data from node module

//configuration for environment
dotenv.config(); //configute environment

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
}); //create a validation schema

//database connection
mongoose.connect(
  "mongodb://localhost:27017/JWT",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
); //connect to database useNewUrlParser

//all our routes
router.get("/", async (req, res) => {
  const { name } = req.query; //get the query string
  console.log(name);
  const result = await register.findOne({ name: name }); //find a data in database with the name
  res.status(200).json({ msg: "Data is found", data: result }); //send json as response to user
}); //get request

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body; //deconstructuring to get value from a dictionary

  //validate the user
  const { error } = schema.validate(req.body); //validate the data before creating data in database
  if (error) return res.status(400).json({ msg: error.details[0].message }); //return json as response to user

  //check for user data existence
  const emailExist = await register.findOne({ email: email }); //findOne data in database
  if (emailExist)
    return res.status(400).json({ msg: "Email already taken and exist" }); //send json as response to user

  //hashing user password
  const salt = await bcrypt.genSalt(10); //generate salt for password
  const hashedPassword = await bcrypt.hash(password, salt); //hash password

  //create user in database
  const result = await register.create({
    name: name,
    password: hashedPassword,
    email: email,
  }); //create value in database

  //signing token for the user
  const user = await register.findOne({ name: name }); //findOne data in database
  const token = jwt.sign({ id: user.id }, "123449909jfjfj"); //sign token for user

  res
    .header("auth_token", token)
    .status(200)
    .json({ msg: "Data created successfully" }); //send json as response to user
}); //post request

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
}); //create a Joiobject schema

//Login router
router.post("/login", async (req, res) => {
  const { email, password } = req.body; //assign value to variable by deconstructing

  //validate the data
  const { error } = loginSchema.validate(req.body); //validate user data with schema
  if (error)
    return res
      .header("auth_token", token)
      .status(400)
      .json({ msg: error.details[0].message }); //send json as response to user

  //check for existence of email
  const emailExist = await register.findOne({ email: email }); //findOne data in database
  if (!emailExist)
    return res
      .status(400)
      .json({ msg: "Please sign up for account doest not exist" }); //send json as response to user
  //password check
  const passcheck = await bcrypt.compare(password, emailExist.password); //compare the password
  if (!passcheck) return res.status(400).json({ msg: "Error in password" }); //send response to user as json

  res.status(200).json({ msg: "Logged in successfully" }); //send json as response to user
}); //post request

module.exports = router; //export data to external file
