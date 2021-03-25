const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(route);

app.listen(process.env.PORT || 3000);
