module.exports = (req, res, next) => {
  res.sendData = (data, code, options) => {
    if (typeof data === "string") {
      res.setHeader("Content-Type", "text/html");
    } else if (typeof data === "object") {
      res.setHeader("Content-Type", "application/json");
    } else {
      res.setHeader("Content-Type", options.contentType);
    }
    res.status(code).send(data);
  };
  next();
};
