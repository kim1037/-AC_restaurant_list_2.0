const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/user");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })
);

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.render("register", {
          name,
          email,
          password,
          message: "此email已註冊",
        });
      }
      User.create({ name, email, password })
        .then(() => res.redirect("/"))
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/users/login");
});

module.exports = router;
