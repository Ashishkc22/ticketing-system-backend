const Router = require("express").Router();

Router.get("/", (req, res) => {
  return res.sendData("successful", 400);
});

module.exports = Router;
