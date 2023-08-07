const { Schema, Types, model } = require("mongoose");

const { database: DBEnums } = require("../enums");

const userSehema = new Schema({
  entityId: Types.ObjectId,
  name: String,
  lastName: String,
  userName: { type: String },
  phone: { type: String },
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
});

userSehema.index({ email: 1 }, { unique: true });

module.exports = userSehema;
