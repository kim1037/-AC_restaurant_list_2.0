//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant"); //載入 Restaurant model

const methodOverride = require("method-override");
const routes = require("./routes");
const app = express();
const port = 3000;

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//connet to mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;

//set connect error and success message
db.on("error", () => {
  console.log("MongoDB error!");
});

db.once("open", () => {
  console.log("Connect success!");
});

//set view template
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// setting static files & body-parser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routes);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
