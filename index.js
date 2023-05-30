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
  const { cors } = require("./src/middlewares");
  app.use(cors);

  // Routes
  app.use("/api", require("./src/routes"));

  const server = require("http").createServer(app);
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log("application running on Port: ", PORT || 3000);
  });
}

startServer();
