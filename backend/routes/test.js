let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Test is working properly");
});

module.exports = router;
