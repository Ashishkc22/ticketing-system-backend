const Router = require("express").Router();
const { userRegistration } = require("../../../processors");

async function registration(req, res) {
  try {
    const result = await userRegistration(req.body);
    return res.send({
      message: result,
      error: null,
    });
  } catch (err) {
    console.log("erro", err);
  }
}

Router.post("/", registration);

module.exports = Router;
