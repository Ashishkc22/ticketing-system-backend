const { getModels } = require("../models");
const { Types } = require("mongoose");
module.exports = async ({ entityId, projectDetails }) => {
  try {
    const { projects } = await getModels();
    const payload = {
      entityId: new Types.ObjectId(entityId),
      ...projectDetails,
    };
    return await projects(payload).save();
  } catch (error) {
    throw error;
  }
};
