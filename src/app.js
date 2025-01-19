const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello from the server");
});

app.use("/", (req, res) => {
  res.send("Hello home page");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
