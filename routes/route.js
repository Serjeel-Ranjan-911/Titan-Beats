const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("menu");
});

router.get("/desert/:mood", (req, res, next) => {
    res.render("desert", {
        mood: req.params.mood,
    });
});

router.get("/lite/:mood", (req, res, next) => {
    res.render("lite", {
        mood: req.params.mood,
    });
});

router.post("/music", (req, res, next) => {
    console.log(req.body.mood);
    let mood = req.body.mood;
    files = fs.readdirSync(`./public/music/${mood}/`);
    res.send(JSON.stringify({ path: files[parseInt(Math.random() * files.length)] }));
});
module.exports = router;
