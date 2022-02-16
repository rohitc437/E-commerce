const express = require("express");
const app = express();

const ErrorMiddleware = require("./middleware/error");
app.use(express.json());

//routes imports
const productRoute = require("./routes/productRoutes");
const userRoute = require("./routes/userRoutes");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);

//Middleware for Error
app.use(ErrorMiddleware);

module.exports = app;
