const Router = require("express").Router();
const { addEditProject } = require("../../../processors");
async function addEditPorject(req, res, next) {
  try {
  } catch (error) {
    res.sendData({ error: "Something went wrong." }, 400);
  }
}

Router.post("", addEditPorject);

module.exports = Router;
