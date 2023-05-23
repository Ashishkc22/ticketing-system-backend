const Router = require("express").Router();
const { userRegistration } = require("../../../processors");

function registration(req, res) {
  try {
    console.log("req.body", req.body);
    // const result = userRegistration()
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
