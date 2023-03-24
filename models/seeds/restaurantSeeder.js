const Restaurant = require("../restaurant");
const restaurantList = require("./restaurant.json").results;
const db = require("../../config/mongoose");

db.once("open", () => {
  Restaurant.create(restaurantList) //create可傳入array,因此無須再用forEach
    .then(() => console.log("done")) //用then來控制創立完再印出done
    .catch((e) => console.log(e));
});
