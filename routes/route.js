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

router.get("/.well-known/pki-validation/63F92C3136A0ED7B8730AB065FE87B1A.txt", (req,res,next)=> {
    res.send("D3C18673A523391C3B9D755CACD302B4C9BB62F9F0E21F095173254C36130D5Fcomodoca.comb0f3f0108b7f340");
});

module.exports = router;
