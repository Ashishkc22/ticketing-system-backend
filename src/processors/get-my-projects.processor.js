const { getModels } = require("../models");
const { Types } = require("mongoose");

module.exports = async ({ entityId, id, projection = {}, type = "find" }) => {
  try {
    const { projects } = await getModels();
    if (type != "find" && type != "findOne") {
      throw new Error("Invalid type");
    }
    return await projects[type](
      {
        ...(entityId && { entityId: new Types.ObjectId(entityId) }),
        ...(id && { _id: new Types.ObjectId(id) }),
      },
      projection
    );
  } catch (error) {
    throw error;
  }
};
