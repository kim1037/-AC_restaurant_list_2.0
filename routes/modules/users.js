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
    failureFlash: true,
  })
);

router.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];
  if (!email || !password || !confirmPassword) {
    errors.push({ message: "All fields are required, except name." });
  }
  if (password !== confirmPassword) {
    errors.push({ message: "Password and confirm Password mustt be same." });
  }
  if (errors.length) {
    return res.render("register", {
      name,
      email,
      password,
      confirmPassword,
      errors,
    });
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        errors.push({
          message: "This email already exists.",
        });
        return res.render("register", {
          name,
          email,
          password,
          confirmPassword,
          errors,
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
  req.flash("success_msg", "你已經成功登出。");
  res.redirect("/users/login");
});

module.exports = router;
