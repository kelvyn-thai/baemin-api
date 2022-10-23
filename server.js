const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const category = require("./src/category");
const item = require("./src/item");
const merchant = require("./src/merchant");
const authen = require("./src/authen");
const order = require("./src/order");
const PORT = process.env.PORT || 3000;
const env = require("./src/configs/env");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static("public"));
app.use("/api", category, merchant, item, order, authen);
app.get("/", (req, res) => {
  res.json(env);
});
app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
module.exports = app;
