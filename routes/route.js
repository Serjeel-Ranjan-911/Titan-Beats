const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("menu");
});

router.get("/desert", (req, res, next) => {
    res.render("desert");
});

module.exports = router;
