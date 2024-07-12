const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

//middleware
app.use(express.static("public"));

//view engine
app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://Vu2112003:Vu2112003@cluster0.4pzhicj.mongodb.net/node_auth";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => {
  res.render("smoothies");
});
app.use(authRoutes);
