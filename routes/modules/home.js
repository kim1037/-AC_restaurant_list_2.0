const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

router.get("/", (req, res) => {
  Restaurant.find() //取出model裡的資料
    .lean() //轉換成JS array
    .then((restaurants) => {
      res.render("index", { restaurants });
    })
    .catch((e) => console.log(e));
});

module.exports = router;
