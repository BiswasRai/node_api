const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const Sequelize = require("sequelize");
const { database } = require("./config/database");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./utils/swagger");

const app = express();
app.use(cors());
const { PORT } = process.env;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", routes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

async function connectDatabase() {
  const sequelize = new Sequelize(database.development);
  sequelize
    .authenticate()
    .then(console.log("Connection has been established successfully"))
    .catch((error) => {
      console.error("Unable to connect to the database", error);
    });
}
connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/api/v1/`);
});

exports.module = { app, server };
