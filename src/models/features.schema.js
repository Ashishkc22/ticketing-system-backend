const { Schema, Types, model } = require("mongoose");

const featrueSehema = new Schema({
  name: String,
  permissions: { type: Array, required: true },
});

module.exports = featrueSehema;
