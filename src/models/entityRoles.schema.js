const { Schema, Types, model } = require("mongoose");
const { database: databaseEnums } = require("../enums");

const entityRoles = new Schema({
  name: { type: String, enums: Object.keys(databaseEnums.ENTITY.ROLES) },
  features: [{ name: String, id: Types.ObjectId }],
  entityId: Types.ObjectId,
  userId: Types.ObjectId,
});

module.exports = entityRoles;
