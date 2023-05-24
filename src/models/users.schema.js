const { Schema, Types, model } = require("mongoose");

const { database: DBConstants } = require("../constants");

const userSehema = new Schema({
  entity: Types.ObjectId,
  name: String,
  lastName: String,
  userName: { type: String, required: true },
  email: {
    type: String,
    match: [DBConstants.email, "Please fill a valid email address"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("Users", userSehema);
