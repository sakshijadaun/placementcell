const mongoose = require("mongoose");
var dotenv = require("dotenv").config();

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://sakshijadaun080:12345@cluster0.mflofvh.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in Connect with DB"));

db.once("open", function () {
  console.log("Successfuly connected into db");
});

module.exports = db;
