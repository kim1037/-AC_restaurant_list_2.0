const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");
const recommendRestaurants = require("../../random_restaurant");

router.get("/", (req, res) => {
  
  Restaurant.find() //取出model裡的資料
    .lean() //轉換成JS array
    .then((restaurants) => {
      res.render("index", { restaurants });
    })
    .catch((e) => console.log(e));
});

//搜尋結果的route
router.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  Restaurant.find()
    .lean()
    .then((restaurantsData) => {
      let restaurants = restaurantsData.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(keyword) ||
          restaurant.category.includes(keyword)
      );
      const noResults = restaurants.length === 0;
      //如有搜尋到則維持原本的restaurant array, 沒有執行推薦3間餐廳的function
      restaurants = restaurants.length
        ? restaurants
        : recommendRestaurants(restaurantsData);

      res.render("index", { restaurants, keyword, noResults });
    })
    .catch((e) => console.log(e));
});

module.exports = router;
