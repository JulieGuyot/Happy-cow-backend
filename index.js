const express = require("express");
const formidableMiddleware = require("express-formidable");
const axios = require("axios");

const app = express();
app.use(formidableMiddleware());

const mongoose = require("mongoose");

const User = require("./models/User");
const Restaurant = require("./models/Restaurant");

const UserRoutes = require("./routes/user");

app.use(UserRoutes);

const restaurants = require("./restaurants.json");

mongoose.connect("mongodb://localhost:27017/happy-cow-backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const response = async () => {
//   await Restaurant.insertMany(restaurants, { ordered: false });
//   console.log(restaurants);
// };

// response();

app.listen(3000, () => {
  console.log("Server has started");
});
