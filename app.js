//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const restaurantList = require("./restaurant.json");
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
