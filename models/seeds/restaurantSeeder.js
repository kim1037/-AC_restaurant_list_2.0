const mongoose = require("mongoose");
const Restaurant = require("../restaurant");
const restaurantList = require("./restaurant.json").results;
const db = require("../../config/mongoose");

db.once("open", () => {
  Restaurant.create(restaurantList)
    .then(() => console.log("done"))
    .catch((e) => console.log(e));
});
