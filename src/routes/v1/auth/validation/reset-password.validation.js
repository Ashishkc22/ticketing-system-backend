const joi = require("joi");
const { regex } = require("../../../../enums");
module.exports = joi.object({
  password: joi.string().regex(regex.password).required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
  token: joi.string().hex().required(),
  // email: joi.string().regex(regex.email).required(),
});
