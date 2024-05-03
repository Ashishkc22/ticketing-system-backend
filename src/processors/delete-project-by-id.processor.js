const { getModels } = require("../models");
const { Types } = require("mongoose");

module.exports = async ({ entityId, id }) => {
  try {
    const { projects } = await getModels();
    await projects.deleteOne({ entityId:  new Types.ObjectId(entityId),_id: new Types.ObjectId(id) });
  } catch (error) {
    throw error;
  }
};
