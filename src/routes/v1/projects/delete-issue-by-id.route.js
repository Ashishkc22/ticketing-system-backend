const Router = require("express").Router();
const { deleteIssueById } = require("../../../processors");

async function DeleteIssueById(req, res) {
  try {
    const { entityId } = req?.context;
    const { id } = req?.query;
    res.sendData({ data: await deleteIssueById({ entityId, id }) });
  } catch (error) {
    res.sendData(
      { error: "Something went wrong whiling deleting issue." },
      400
    );
  }
}

Router.get("", DeleteIssueById);

module.exports = Router;
