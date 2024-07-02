const { Types } = require("mongoose");
const { getModels } = require("../models");

async function chnageIssueStatus({ id, projectId,status }) {
  try {
    const { tickets } = await getModels();
    await tickets.findOneAndUpdate({
      _id: new Types.ObjectId(id),
      projectId: new Types.ObjectId(projectId),
    },{
        status
    });
  } catch (error) {
    throw error;
  }
}

module.exports = chnageIssueStatus;
