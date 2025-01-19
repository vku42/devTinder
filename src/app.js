const express = require("express");

const app = express();

// This will only handel GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Vikash", lastName: "Upadhyay" });
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
