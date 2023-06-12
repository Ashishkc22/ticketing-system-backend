module.exports = (req, res, next) => {
  require("dotenv").config();
  const domains = process.env.ALLOW_DOMAINS.split(",");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Orgin,Authorization,Access-Control-Allow-origin,Access-Control-Max-Age"
  );
  console.log("domains", domains);
  if (domains.includes(req.headers.origin)) {
    req.header("Access-Control-Allow-origin", req.headers.origin);
  }
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Max-Age", 604800);
  next();
};
