const Router = require("express").Router();
const moment = require("moment");
const { getIssuesByDateRange } = require("../../../processors");

async function getIssuesByDate(req, res) {
  try {
    const { projectId, rangeType } = req.query;
    const { entityId } = req.context;
    const startDate = moment().startOf(rangeType).toISOString();
    const endDate = moment().endOf(rangeType).toISOString();
    console.log('startDate',startDate);
    console.log('endDate',endDate);
    return res.sendData({data: await getIssuesByDateRange({
      entityId,
      projectId,
      startDate,
      endDate,
    })});
  } catch (error) {
    console.log('error', error);
     return res.sendData({ error: "Failed to get issue by date range" }, 400);
  }
}
Router.get("", getIssuesByDate);
module.exports = Router
