if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const Restaurant = require("../restaurant");
const User = require("../user");
const restaurantList = require("./restaurant.json").results;
const db = require("../../config/mongoose");
const bcrypt = require("bcryptjs");
const SEED_USERS = [
  { name: "user1", email: "user1@example.com", password: "12345678" },
  { name: "user2", email: "user2@example.com", password: "12345678" },
];

db.once("open", () => {
  const promises = SEED_USERS.map((USER) => {
    return bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(USER.password, salt))
      .then((hash) =>
        User.create({ name: USER.name, email: USER.email, password: hash })
      )
      .then((user) => {
        const userId = user._id;
        const name = user.name;
        let restaurant = [];
        if (name === "user1") {
          restaurant = restaurantList.slice(0, 3);
        } else {
          restaurant = restaurantList.slice(3);
        }
        return Restaurant.create(
          restaurant.map((r) => Object.assign(r, { userId }))
        ); //create可傳入array
      })
      .catch((e) => console.log(e));
  });
  Promise.all(promises)
    .then(() => {
      console.log("done.");
      process.exit();
    })
    .catch((e) => console.log(e));
});
