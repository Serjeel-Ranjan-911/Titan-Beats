const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("menu");
});

router.get("/desert/:mood", (req, res, next) => {
    console.log(req.params);
    res.render("desert");
});

module.exports = router;
