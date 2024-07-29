const Router = require("express").Router();
const { getUserByEmail } = require("../../../processors");
const sendEmail = require("../../../utils/build-email-message.util");
const { isEmpty } = require("lodash");

async function sendEmailToResetPassword(req, res) {
  try {
    // check If email exists or not
    const user = await getUserByEmail({
      email: req.body.email,
    });
    if (!isEmpty(user)) {
      const resetToken = user.generateResetPasswordToken();
      let passwordResetUrl = "";
      if (process.env.ENVIRONMENT == "dev") {
        passwordResetUrl = `${process.env.CLIENT_PROTOCOL}://${process.env.CLIENT_DOMAIN}:${process.env.CLIENT_PORT}/auth/password-reset/${resetToken}`;
      } else {
        passwordResetUrl = `${process.env.CLIENT_PROTOCOL}://${process.env.CLIENT_DOMAIN}/auth/password-reset/${resetToken}`;
      }
      await user.save();
      sendEmail.sendNodemailerEmail({
        to: user.email,
        from: "Ticketing system",
        subject: "Passowrd reset",
        data: { url: passwordResetUrl },
        templateName: "forget-password.template",
      });
      res.sendData({ message: "successfull" }, 200);
    } else {
      res.sendData({ message: "email does not exists" }, 200);
    }
  } catch (error) {
    res.sendData({ error: "something went wrong." }, 400);
  }
}

Router.post("", sendEmailToResetPassword);
module.exports = Router;
