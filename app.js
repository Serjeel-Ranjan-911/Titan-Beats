const path = require("path");

const express = require("express");
//const bodyParser = require("body-parser");

const app = express();

const router = express.Router();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res, next) => {
    res.sendFile("./index.html");
});

app.listen(process.env.PORT || 3000);
