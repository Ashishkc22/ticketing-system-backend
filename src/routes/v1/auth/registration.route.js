const Router = require("express").Router();
const {
  errors: { UserResgistrationError },
} = require("../../../enums");
const { userRegistration } = require("../../../processors");

// const { authorization } = require("../../../middlewares");
async function registration(req, res) {
  try {
    const { email, password } = req.body;
    const result = await userRegistration({ email, password });
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
