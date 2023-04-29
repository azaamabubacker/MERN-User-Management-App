const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserModel = require("./models/Users");

const app = express();

// DB
mongoose.connect(
  "mongodb+srv://user123:123@users-cluster.igufzqa.mongodb.net/mern-user-management-app?retryWrites=true&w=majority"
);

// API
app.get("/getUsers", (req, res) => {
  UserModel.find({}).then((result) => {
    res.json(result).catch((err) => {
      res.json(err);
    });
  });
});

app.listen(8080, () => {
  console.log("SERVER RUNS SUCCESSFULLY!");
});
