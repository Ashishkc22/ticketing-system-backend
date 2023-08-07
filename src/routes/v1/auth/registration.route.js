const Router = require("express").Router();
const {
  errors: { UserResgistrationError },
} = require("../../../enums");
const { userRegistration } = require("../../../processors");

const { authorization } = require("../../../middlewares");
async function registration(req, res) {
  try {
    const { phone, email, password, entityDetails } = req.body;
    const payload = {
      phone,
      email,
      password,
    };
    const result = await userRegistration({ payload, entityDetails });
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

Router.post("/", authorization, registration);

module.exports = Router;
