// Require necessary npm packages
const express = require("express");  //routing
const logger = require("morgan");    //logging
const mongoose = require("mongoose");   //ODM (Object Document Mapper) for MongoDB NoSQL DB
const compression = require("compression");

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//MongoDB connection setup including for Heroku
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false});

// routes
app.use(require("./routes/api.js"));
// Logging message upon successfully App listening on the PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});