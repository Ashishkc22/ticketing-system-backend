const { Schema, model } = require("mongoose");

const permissions = new Schema({
  name: { type: String, required: true },
  description: String,
});

module.exports = permissions;
