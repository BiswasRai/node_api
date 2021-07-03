const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/api/v1", routes);

exports.module = app;
