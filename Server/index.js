const express= require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const {Connection}=require("./config/db")
const { StudentRouter } = require("./routes/studentRoutes")



app.get("/",(req,res)=>{
    res.send("everything is going fine")
})

app.use("/student",StudentRouter)



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