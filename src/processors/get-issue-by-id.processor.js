const { getModels } = require("../models");
const { Types } = require("mongoose");

module.exports = async ({ id,entityId }) => {
  try {
    const { tickets } = await getModels();
    return await tickets.findOne({ _id: new Types.ObjectId(id), entityId: new Types.ObjectId(entityId),})
  } catch (error) {
    throw error
  }
};
