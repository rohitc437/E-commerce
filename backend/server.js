const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
// require("./config/database");
connectDatabase()

/*
mongodb+srv://rohitc_437:<password>@cluster0.nuyg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
 const server = app.listen(process.env.PORT, () => {
  console.log("Server is working");
});

process.on("unhandledRejection",(err)=>{
  console.log(`Error :- ${err.message}`)
  console.log("Shutting down the server deu to unhandel promise rejection")

  server.close(()=>{

  })
})