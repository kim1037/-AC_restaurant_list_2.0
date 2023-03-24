//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const routes = require("./routes");
const app = express();
const port = 3000;
const helpers = require("./public/javascripts/helpers");
require("./config/mongoose");

//set view template
app.engine(
  "hbs",
  exphbs({ defaultLayout: "main", extname: "hbs", helpers: helpers })
);
app.set("view engine", "hbs");

// setting static files & body-parser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(routes);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
