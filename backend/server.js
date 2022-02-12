const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
require("./config/database");

/*
mongodb+srv://rohitc_437:<password>@cluster0.nuyg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
app.listen(process.env.PORT, () => {
  console.log("Server is working");
});
