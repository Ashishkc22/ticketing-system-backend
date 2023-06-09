const jwt = require("jsonwebtoken");

function createToken({ data = {}, algorithm = "RS256" }) {
  return jwt.sign(data, process.env.TOKEN_PRIVATE_KEY, { algorithm });
}

function verifyJWTToken({ token }) {
  return jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
}

module.exports = {
  createToken,
  verifyJWTToken,
};
