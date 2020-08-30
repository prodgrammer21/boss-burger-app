const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res, next) => {
  const { name, age, gender } = req.query;

  res.render("login", {
    data: [name, age, gender],
  });
});

router.get("/registration", (req, res, next) => {
  res.render("register");
});

module.exports = router;
