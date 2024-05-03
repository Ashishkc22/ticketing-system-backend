const { getModels } = require("../models");
const getAllFeatures = require("./get-all-features.processor");
module.exports = async ({ entityDetails, userId, entityId }) => {
  try {
    const { entityRoles } = await getModels();
    const features = await getAllFeatures();
    console.log(features, "features");
    const payload = {
      name: entityDetails.name,
      features,
      userId,
      entityId,
    };
    return await entityRoles(payload).save();
  } catch (error) {
    throw error;
  }
};
