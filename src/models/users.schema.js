const { Schema, Types, model } = require("mongoose");
const crypto = require("crypto")
const moment = require("moment")
const { database: DBEnums } = require("../enums");

const userSehema = new Schema({
  entityId: Types.ObjectId,
  firstName: String,
  lastName: String,
  userName: { type: String },
  email: {
    type: String,
    match: [DBEnums.REGEX.Email, "Please fill a valid email address"],
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  // emailSendLimit: { type:  },
  resetPasswordToken : { type: String },
  resetPasswordTokenExpires: { type: Date }
});

userSehema.methods.generateResetPasswordToken = function(){
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordTokenExpires = moment().add(10,'m').format()

  return resetToken
}

userSehema.index({ email: 1 }, { unique: true });

module.exports = userSehema;
