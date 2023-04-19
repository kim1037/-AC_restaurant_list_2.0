const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant"); //載入 Restaurant model

//set create page
router.get("/create", (req, res) => {
  res.render("create");
});

//餐廳詳細的route
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((e) => console.log(e));
});

//set create new restaurant route
router.post("/", (req, res) => {
  const userId = req.user._id;
  let data = req.body;
  data = Object.assign(data, { userId });
  Restaurant.create(data)
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
});

//set edit page
router.get("/:id/edit", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((e) => console.log(e));
});

//edit restaurant
router.put("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOneAndUpdate({ _id, userId }, req.body)
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch((e) => console.log(e));
});

//delete restaurant
router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;
  Restaurant.findOne({ _id, userId })
    .then((rest) => {
      return rest.remove();
    })
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
});

module.exports = router;
