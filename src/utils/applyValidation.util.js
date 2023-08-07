function applyValidation(validation) {
  return (req, res, next) => {
    let validationBody;
    if (req.method === "POST") {
      validationBody = req.body;
    } else {
      validationBody = req.params;
    }
    const { error } = validation.validate(req.body, { abortEarly: false });
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
