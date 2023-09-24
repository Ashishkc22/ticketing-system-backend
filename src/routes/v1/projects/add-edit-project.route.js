const Router = require("express").Router();
const { addEditProject } = require("../../../processors");
async function addEditPorject(req, res, next) {
  try {
    const { entityId } = req?.context || {};
    const body = req.body;
    res.sendData(
      { data: await addEditProject({ entityId, projectDetails: body }) },
      200
    );
  } catch (error) {
    res.sendData({ error: "Something went wrong." }, 400);
  }
}

Router.post("", addEditPorject);

module.exports = Router;
