const Router = require("express").Router();
const { addEditIssue } = require("../../../processors");

async function addEditIssues(req, res) {
  try {
    const { entityId } = req?.context;
    return res.sendData({data : await addEditIssue({
      entityId,
      issueId: req.body.issueId,
      data: req.body.data,
    })});
  } catch (error) {
    console.log('error', error);
    res.sendData({ error: "Failed to add/edit issue." }, 400);
  }
}
Router.post("", addEditIssues);

module.exports = Router;
