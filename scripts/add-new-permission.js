// cd srcipt && node add-new-permission PERMISSION_NAME

require("dotenv").config();
const { getModels } = require("../src/models");
(async function () {
  let permissionName = process.argv[2];
  if (!permissionName) {
    throw new Error("Permission name is required");
  }
  permissionName = permissionName.toLocaleUpperCase();
  const { permissions } = await getModels();

  permissions({
    name: permissionName,
    description: "",
  })
    .save()
    .then((data) => {
      console.log(`${permissionName} entry successfully....`);
      process.exit();
    })
    .catch((err) => {
      console.log("error", err);
      console.log(`${permissionName} entry falied....`);
      process.exit();
    });
})();
