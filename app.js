const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const Sequelize = require("sequelize");
const { database } = require("./config/database");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./utils/swagger");

const app = express();
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

app.listen(PORT, async () => {
  console.log(`working on ${PORT}`);
});

// /**
//  * Post request.
//  *
//  * @route '/users'
//  * @method POST
//  */
// app.post("/user", (req, res) => {
//   console.log(req.body);

//   res.status(201).json({
//     status: "success",
//     data: {
//       users: {
//         name: "",
//       },
//     },
//   });
// });

// /**
//  * Put(Update) request.
//  *
//  * @route '/users'
//  * @method PUT
//  */
// app.put("/user/:userId", (req, res) => {
//   console.log(req.body);

//   res.status(200).json({
//     status: "success",
//     data: {
//       users: {
//         name: "",
//       },
//     },
//   });
// });
// /**
//  * Delete user.
//  *
//  * @route '/user/:userId'
//  * @method POST
//  */
// app.delete("/user/:userId", (req, res) => {
//   console.log(req);
//   res.status(204).json({
//     status: "success",
//   });
// });
