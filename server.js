require("./models/db");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const employeeController = require("./controllers/employeeController");
const bodyParser = require("body-parser");

//console.log("ExpHbs is: ", exphbs);
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "./views"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("express server started at port 3000");
});

app.use("/employee", employeeController);
