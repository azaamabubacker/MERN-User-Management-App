const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserModel = require("./models/Users");

const app = express();

app.use(express.json());

// API GET
app.get("/getUsers", (req, res) => {
  UserModel.find({}).then((result) => {
    res.json(result).catch((err) => {
      res.json(err);
    });
  });
});

// API POST
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

//DB
mongoose
  .connect(
    "mongodb+srv://user123:123@users-cluster.igufzqa.mongodb.net/mern-user-management-app?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
