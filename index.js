const {
  initiateNodemailerInstance,
} = require("./src/config/email-transporter.config");
const { initiateCache } = require("./src/config/node-cache.config");
async function startServer() {
  const app = require("express")();
  require("dotenv").config();

  try {
    const { connectDB } = require("./src/config/db.config");
    await connectDB();
  } catch (error) {
    throw error;
  }

  //body parser
  const bodyParser = require("body-parser");
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // load middlewares
  const helmet = require("helmet");
  const cors = require("cors");
  const { response } = require("./src/middlewares");
  app.use(helmet());
  app.use(cors());
  app.use(response);

  // Routes
  app.use("/api", require("./src/routes"));
  initiateNodemailerInstance();
  initiateCache();
  const server = require("http").createServer(app);
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log("application running on Port: ", PORT || 3000);
  });
}

startServer();
