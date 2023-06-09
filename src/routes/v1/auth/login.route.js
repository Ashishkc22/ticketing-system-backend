const { loginUser } = require("../../../processors");

module.exports = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const result = await loginUser({ userName, password });
    if (!result) {
      throw new Error("Incorrect password.");
    }
    res.sendData({ token: result }, 200);
  } catch (error) {
    res.sendData(error.message, 402);
  }
};
