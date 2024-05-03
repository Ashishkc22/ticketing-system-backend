const Router = require("express").Router();
const { addEditProject } = require("../../../processors");
async function addEditPorject(req, res, next) {
  try {
    const { entityId } = req?.context || {};
    const body = req.body;
    const { name } = body;
    const nameArray = name.split(" ");
    const shortNotation =
      nameArray.length > 1
        ? nameArray.map((word) => word.charAt(0).toUpperCase()).join("")
        : nameArray.join("").toUpperCase();
    res.sendData(
      {
        data: await addEditProject({
          entityId,
          projectDetails: { ...body, shortNotation },
        }),
      },
      200
    );
  } catch (error) {
    res.sendData({ error: "Something went wrong." }, 400);
  }
}

Router.post("", addEditPorject);

module.exports = Router;
