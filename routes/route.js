const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("menu");
});

router.get("/desert/:mood", (req, res, next) => {
    res.render("desert");
});

router.post("/music", (req, res, next) => {
    files = fs.readdirSync("./public/music");
    res.send(JSON.stringify({ path: files[parseInt(Math.random() * files.length)] }));
});
module.exports = router;
