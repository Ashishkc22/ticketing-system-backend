const { Schema, Types, model } = require("mongoose");

const entity = new Schema({
  name: { type: String },
  primaryEmail: { type: String, required: true },
});

module.exports = entity;
