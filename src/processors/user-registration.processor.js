const { getModels } = require("../models");
const bcrypt = require("bcrypt");
const addEditEntity = require("./add-edit-entity.processor");
const addEditEntityRoles = require("./add-edit-entity-roles.processor");
module.exports = async function userResgistration({ payload, entityDetails }) {
  try {
    const models = await getModels();
    const userExists = await models.users.findOne({
      $or: [{ email: payload.email }, { phone: payload.phone }],
    });
    if (userExists) {
      throw new Error("User with email already exists.");
    }
    const entity = await addEditEntity({ entityDetails });
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);
    const savedUser = await models
      .users({ ...payload, entityId: entity._id || entity.id })
      .save();
    await addEditEntityRoles({
      entityDetails,
      userId: savedUser.id || savedUser._id,
      entityId: entity._id || entity.id,
    });
    return savedUser;
  } catch (error) {
    throw error;
  }
};
