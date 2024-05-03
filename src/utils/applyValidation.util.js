function applyValidation(validation) {
  return (req, res, next) => {
    let validationBody;
    if (req.method === "POST" || req.method === "DELETE") {
      validationBody = req.body;
    } else {
      validationBody = req.query;
    }
    const { error } = validation.validate(validationBody, {
      abortEarly: false,
    });
    if (error) {
      res.sendData(
        {
          error: error?.details.map((err) => {
            return err.message;
          }),
        },
        400
      );
    } else {
      next();
    }
  };
}
module.exports = {
  applyValidation,
};
