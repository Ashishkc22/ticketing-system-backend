module.exports = (req, res, next) => {
  res.sendData = (data, code, options) => {
    if (typeof data === "string") {
      res.header("Content-Type", "text/html");
    } else if (typeof data === "object") {
      res.header("Content-Type", "application/json");
    } else {
      res.header("Content-Type", options.contentType);
    }
    res.status(code).send(data);
  };
  next();
};
