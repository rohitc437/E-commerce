const express = require("express");
const app = express();

const ErrorMiddleware = require("./middleware/error");
app.use(express.json());

//routes imports
const product = require("./routes/productRoutes");

app.use("/api/v1", product);

//Middleware for Error
app.use(ErrorMiddleware);

module.exports = app;
