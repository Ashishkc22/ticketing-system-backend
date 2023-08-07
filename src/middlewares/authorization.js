const { verifyJWTToken } = require("../utils/token.util");
module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const isTokenVerified = verifyJWTToken({ token: authorization });
      req.context = isTokenVerified;
      next();
    } else {
      res.sendData({ error: "Missing access token." }, 403);
    }
  } catch (error) {
    res.sendData({ error: "Invalid access token." }, 403);
  }
};
