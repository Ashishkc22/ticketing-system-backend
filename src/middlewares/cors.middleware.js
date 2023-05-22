module.exports = (req, res, next) => {
  require("dotenv").config();
  const domains = process.env.ALLOW_DOMAINS.split(",");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Orgin,Authorization,Access-Control-Allow-origin,Access-Control-Max-Age"
  );
  if (domains.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-origin", req.headers.origin);
  }
  res.header("Access-Control-Max-Age", 604800);
  next();
};
