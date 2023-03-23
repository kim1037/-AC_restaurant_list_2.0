const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant"); //載入 Restaurant model

//set create page
router.get("/create", (req, res) => {
  res.render("create");
});

//餐廳詳細的route
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((e) => console.log(e));
});

//set create new restaurant route
router.post("/", (req, res) => {
  const data = req.body;
  Restaurant.create(data)
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
});

//set edit page
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((e) => console.log(e));
});

//edit restaurant
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch((e) => console.log(e));
});

//delete restaurant
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Restaurant.findById(id)
    .then((rest) => {
      return rest.remove();
    })
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
});

module.exports = router;
