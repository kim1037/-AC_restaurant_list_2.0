//require modules
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 300;

//set view template
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// setting static files
app.use(express.static("public"));

//set route

app.get("/", (req, res) => {
  res.send("this is a restarunt recommandation website");
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
