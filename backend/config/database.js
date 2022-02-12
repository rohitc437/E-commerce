const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://rohitc_437:Rohitc43711@cluster0.nuyg3.mongodb.net/Ecommerce?retryWrites=true&w=majority";

mongoose.connect(connectString).then(() => {
  console.log("connected to the db");
}).catch((err)=>{
    console.log(err)
})


