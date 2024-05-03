const { getModels } = require("../models");
const { startSession } = require("mongoose");
const bcrypt = require("bcrypt");

// Note: uncommet this code when working with permissions and entityroles
// const addEditEntity = require("./add-edit-entity.processor");
// const addEditEntityRoles = require("./add-edit-entity-roles.processor");

module.exports = async function userResgistration(payload) {
  let session;
  try {
    session = await startSession();
    session.startTransaction();
    const models = await getModels();
    const userExists = await models.users.findOne({ email: payload.email });
    if (userExists) {
      throw new Error("User with email already exists.");
    }
    // Starting session

    // creating new entity
    // entity --> users
    const entity = await models
      .entities({ primaryEmail: payload.email })
      .save({ session });

    // add default entity Roles and permissions
    //  await addEditEntityRoles({
    //   entityDetails,
    //   userId: savedUser.id || savedUser._id,
    //   entityId: entity._id || entity.id,
    // });

    // passsword salt
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    // inserting new user
    const savedUser = await models
      .users({ ...payload, entityId: entity._id || entity.id })
      .save({ session });

    // commiting changes and ending session
    await session.commitTransaction();
    session.endSession();
    return savedUser;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
