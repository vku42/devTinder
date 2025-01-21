const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Atal",
    lastName: "Upadhyay",
    password: "Atal123",
    emilId: "atal@gmail.com",
    age: 26,
    gender: "male",
  };
  // Creating a new instance of the User model
  const newUser = new User(userObj);

  try {
    await newUser.save();
    res.send("User registered successfully");
  } catch (err) {}
  res.status(400).send("Error ");
});

connectDB()
  .then(() => {
    console.log("Databse connection established");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Data base connection problem:", err);
  });
