const { isEmpty } = require("lodash");
const { getModels } = require("../models");
const { Types } = require("mongoose");
module.exports = async ({ entityId, projectId, startDate, endDate }) => {
  try {
    const { tickets } = await getModels();
    let query = {
      $and: [
        { entityId: new Types.ObjectId(entityId) },
        { projectId: new Types.ObjectId(projectId) },
        {
          dueDate: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      ],
    };
    console.log('query',query['$and'] );
    return await tickets.find(query);
  } catch (error) {
    throw error;
  }
};
