const { getModels } = require("../models");
const { Types } = require("mongoose");
module.exports = async ({ entityId, projectDetails }) => {
  try {
    const { projects } = await getModels();
    if (projectDetails.id) {
      const payload = {
        ...projectDetails,
      };
      delete payload.id;
      delete payload.startDate;
      delete payload.name;
      return await projects.findOneAndUpdate(
        { _id: new Types.ObjectId(projectDetails.id) },
        {
          $set: payload,
        }
      );
    } else {
      const payload = {
        entityId: new Types.ObjectId(entityId),
        ...projectDetails,
      };
      return await projects(payload).save();
    }
  } catch (error) {
    throw error;
  }
};
