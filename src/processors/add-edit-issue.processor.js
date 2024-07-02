const { getModels } = require("../models");
const { Types } = require("mongoose");
module.exports = async ({ entityId, issueId, data }) => {
  try {
    const { tickets, projects } = await getModels();
    const { shortNotation } = await projects.findOne({
      entityId: new Types.ObjectId(entityId),
      _id: new Types.ObjectId(data.projectId),
    });

    const payload = {
      ...(data?.name && { name: data.name }),
      ...(entityId && { entityId: new Types.ObjectId(entityId) }),
      ...(data?.description && { description: data?.description }),
      ...(data?.dueDate && { dueDate: data?.dueDate }),
      ...(data?.summary && { summary: data?.summary }),
      ...(data?.issueType && { issueType: data?.issueType }),
      ...(data?.status && { status: data?.status }),
      // ...(shortNotation && { shortNotation: `${shortNotation}-` }),
    };
    if (!issueId && data?.projectId) {
      payload.projectId = new Types.ObjectId(data.projectId);
      const count = await tickets.count({
        entityId: new Types.ObjectId(entityId),
        projectId: new Types.ObjectId(data.projectId),
      });
      payload.issueId = `${shortNotation}-${count + 1}`;
    }
    console.log("payload --->>>>>", JSON.stringify(payload));
    if (issueId && data?.projectId) {
      return await tickets.findOneAndUpdate(
        {
          _id: new Types.ObjectId(issueId),
          projectId: new Types.ObjectId(data.projectId),
        },
        {
          $set: payload,
        }
      );
    }
    return await tickets(payload).save();
  } catch (error) {
    throw error;
  }
};
