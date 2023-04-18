const mongoose = require("mongoose");

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//connet to mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//set connect error and success message
db.on("error", () => {
  console.log("MongoDB error!");
});

db.once("open", () => {
  console.log("Connect success!");
});

module.exports = db;
