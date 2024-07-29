const Router = require("express").Router();
const loginValidation = require("./validation/login.validation");
const { applyValidation } = require("../../../utils/applyValidation.util");

// function applyValidation(validation) {
//   return (req, res, next) => {
//     let validationBody;
//     if (req.method === "POST") {
//       validationBody = req.body;
//     } else {
//       validationBody = req.params;
//     }
//     const { error } = validation.validate(req.body, { abortEarly: false });
//     if (error) {
//       res.sendData(
//         {
//           error: error?.details.map((err) => {
//             return err.message;
//           }),
//         },
//         400
//       );
//     } else {
//       next();
//     }
//   };
// }

Router.use("/registration", require("./registration.route"));
Router.use(
  "/login",
  applyValidation(loginValidation),
  require("./login.route")
);

Router.use(
  "/forgot-password",
  applyValidation(require("./validation/forgot-password.validation")),
  require("./forgot-password.route")
);

Router.use(
  "/reset-password",
  applyValidation(require("./validation/reset-password.validation")),
  require("./reset-password.route")
);

module.exports = Router;
