const Router = require("express").Router();

function registration(req, res) {
  try {
    console.log("reg");
    return res.send({
      message: "ok",
      error: null,
    });
  } catch (err) {
    console.log("erro", err);
  }
}

Router.post("/", registration);

module.exports = Router;
