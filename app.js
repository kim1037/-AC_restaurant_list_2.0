//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const usePassport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
const helpers = require("./public/javascripts/helpers");
require("./config/mongoose");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config;
}

//set view template
app.engine(
  "hbs",
  exphbs({ defaultLayout: "main", extname: "hbs", helpers: helpers })
);
app.set("view engine", "hbs");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// setting static files & body-parser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

usePassport(app);
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
