const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// API
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

// DB
mongoose
  .connect(
    "mongodb+srv://azaam:123@users-cluster.igufzqa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
