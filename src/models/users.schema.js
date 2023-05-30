const { Schema, Types, model } = require("mongoose");

const { database: DBConstants } = require("../constants");

const userSehema = new Schema({
  // entityId: Types.ObjectId,
  // entityRoles: [
  //   {
  //     id: Types.ObjectId,
  //     name: String,
  //   },
  // ],
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

module.exports = userSehema;
