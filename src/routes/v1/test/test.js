const Router = require("express").Router();

Router.get("/", (req, res) => {
  return res.status(200).json({
    test: "successful",
  });
});

module.exports = Router;
