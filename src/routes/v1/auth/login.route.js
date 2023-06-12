const Router = require("express").Router();
const { loginUser } = require("../../../processors");

const loginRoute = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });
    if (!result) {
      throw new Error("Incorrect password.");
    }
    res.sendData({ data: { token: result } }, 200);
  } catch (error) {
    res.sendData({ error: error.message }, 402);
  }
};
Router.post("/", loginRoute);
module.exports = Router;
