const Router = require("express").Router();

Router.get("/", (req, res) => {
  return res.sendData(
    "successful",

    200
  );
});

module.exports = Router;
