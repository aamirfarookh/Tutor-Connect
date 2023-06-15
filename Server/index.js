//Importing all the required dependencies
const express= require("express")
const app=express()
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
require("dotenv").config()
const {Connection}=require("./config/db")
const { StudentRouter } = require("./routes/studentRoutes")


// Using all the required middlewares in the app
app.use(express.json());
app.use(expressSession());
app.use(cookieParser());


//Defining the student route
app.use("/student",StudentRouter);



// Basic route to check if server is running fine
app.get("/",(req,res)=>{
    res.send("everything is going fine")
})





// connecting to the database
app.listen(process.env.PORT, async () => {
    try {
      console.log(`Server is running on port ${process.env.PORT}`);
      await Connection;
      console.log("Connection established to database");
    } catch (error) {
      console.log(error);
    }
  });