const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const Sequelize = require("sequelize");
const { database } = require("./config/database");
const routes = require("./routes");

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", routes);

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
  // await sequelize.sync({ alter: true });
});
// /**
//  * Get individual user.
//  * @route '/users/:userId'
//  * @method GET
//  */
// app.get("/users/:userId", (req, res) => {
//   console.log(req.params);

//   res.status(200).json({
//     status: "success",
//     data: {
//       users: {
//         id: 1,
//         name: "",
//         age,
//         gender,
//         role,
//       },
//     },
//   });
// });

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
