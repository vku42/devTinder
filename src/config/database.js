const mongoose = require("mongoose");

// To connect with mongo Cluster
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vikash:PsFcc9BjqfQHphz5@cluster0.j2axa.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

// we can also use try catch insted of then and catch
