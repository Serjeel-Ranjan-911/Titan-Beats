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

router.get("/.well-known/pki-validation/95E9C10D8B87A486952201BB264B324C.txt", (req,res,next)=> {
    res.download('./public/ssl/95E9C10D8B87A486952201BB264B324C.txt');
});

module.exports = router;
