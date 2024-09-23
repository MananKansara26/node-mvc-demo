const express = require("express");
const mongoose = require("mongoose");
const indexRoutes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));
app.use("/", indexRoutes);

mongoose.connect(MONGODB_URL).then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
