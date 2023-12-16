const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
require('dotenv').config();

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/api/payment', paymentRoutes);

mongoose.connect(
  "mongodb+srv://rdgimsil:sYZBc6fouYCYmirf@mern5.9bxibww.mongodb.net/MERN5?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});