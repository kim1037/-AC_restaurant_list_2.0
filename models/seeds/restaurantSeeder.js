const mongoose = require("mongoose");
const Restaurant = require("../restaurant");
const restaurantList = require("./restaurant.json").results;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
  restaurantList.forEach((rest) => createRest(rest));

  console.log("done");
});

function createRest(rest) {
  Restaurant.create({
    name: `${rest.name}`,
    name_en: `${rest.name_en}`,
    category: `${rest.category}`,
    image: `${rest.image}`,
    location: `${rest.location}`,
    phone: `${rest.phone}`,
    google_map: `${rest.google_map}`,
    rating: `${rest.rating}`,
    description: `${rest.description}`,
  });
}
