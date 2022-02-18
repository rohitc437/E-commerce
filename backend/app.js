const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const ErrorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser())


//routes imports
const productRoute = require("./routes/productRoutes");
const userRoute = require("./routes/userRoutes");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);



//Middleware for Error
app.use(ErrorMiddleware);

module.exports = app;
