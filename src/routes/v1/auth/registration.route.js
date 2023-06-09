const Router = require("express").Router();
const {
  errors: { UserResgistrationError },
} = require("../../../enums");
const { userRegistration } = require("../../../processors");

async function registration(req, res) {
  try {
    const result = await userRegistration(req.body);
    res.sendData(
      {
        message: result,
        error: null,
      },
      200
    );
  } catch (err) {
    res.sendData({ error: err.message }, UserResgistrationError.code);
  }
}

Router.post("/", registration);

module.exports = Router;
