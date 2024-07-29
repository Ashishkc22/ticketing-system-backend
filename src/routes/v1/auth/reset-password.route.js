const Router = require("express").Router();
const { isEmpty } = require("lodash");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../../../processors");

async function resetPassword(req, res) {
  try {
    const { password, token } = req.body;
    const encryptedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    const user = await getUserByEmail({
      otherMatch: {
        resetPasswordToken: encryptedToken,
        resetPasswordTokenExpires: { $gt: new Date().toISOString() },
      },
    });

    if (!isEmpty(user)) {
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);
      user.resetPasswordToken = undefined;
      user.resetPasswordTokenExpires = undefined;
      await user.save();
      res.sendData({ message: "successfull", error: null }, 200);
    } else {
      res.sendData(
        { message: "Invalid token or token is expired.", error: null },
        200
      );
    }
  } catch (error) {
    res.sendData({ error: "something went wrong." }, 400);
  }
}

Router.post("", resetPassword);

module.exports = Router;
