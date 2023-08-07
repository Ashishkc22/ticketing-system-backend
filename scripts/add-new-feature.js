// cd srcipt && node add-new-permission PERMISSION_NAME

require("dotenv").config();
const mongoose = require("mongoose");
const { getModels } = require("../src/models");
(async function () {
  try {
    let featureName = process.argv[2];
    const id = process.argv[3];
    const allowedPermission = ["VIEW-PROJECTS", "ADD-PROJECT", "EDIT-PROJECTS"];
    if (!featureName) {
      throw new Error("Permission name is required");
    }
    featureName = featureName.toLocaleUpperCase();
    const { features, permissions } = await getModels();

    const _permissions = await permissions.find(
      {
        name: { $in: allowedPermission },
      },
      { name: 1 }
    );

    console.log("_permissions", _permissions);

    features
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: featureName,
            permissions: _permissions,
          },
        },
        {
          upsert: true,
        }
      )
      .then((data) => {
        console.log(`${featureName} entry successfully....`);
        process.exit();
      })
      .catch((err) => {
        console.log("error", err);
        console.log(`${featureName} entry falied....`);
        process.exit();
      });
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();
