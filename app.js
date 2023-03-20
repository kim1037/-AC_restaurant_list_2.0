//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const restaurantList = require("./restaurant.json");
const recommendRestaurants = require("./random_restaurant");
const app = express();
const port = 3000;

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//connet to mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;

//set connect error and success message
db.on("error", () => {
  console.log("MongoDB error!");
});

db.once("open", () => {
  console.log("Connect success!");
});

//set view template
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// setting static files
app.use(express.static("public"));

//set route
//首頁
app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantList.results });
});

//餐廳詳細的route
app.get("/restaurants/:restaurant_id", (req, res) => {
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === req.params.restaurant_id
  );
  res.render("show", { restaurant: restaurant });
});

//搜尋結果的route
app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  const restaurants = restaurantList.results.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.includes(keyword)
  );
  const noResults = restaurants.length ? false : true;
  const recommend = recommendRestaurants(restaurantList.results);

  //如果有搜尋結果回傳restaurants，如果沒有則會顯示recommend
  res.render("index", { restaurants, keyword, noResults, recommend });
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
