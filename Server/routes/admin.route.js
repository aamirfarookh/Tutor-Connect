const express = require("express");
const { adminlogin, adminRegister, createTeacher, updateTeacher, deleteTeacher, getTeachers } = require("../controllers/adminController");
const { logoutUser, NewAccessToken } = require("../controllers/student.controller");
const { adminAuth } = require("../middlewares/adminAuth.middleware");

const adminRouter = express.Router();





adminRouter.post("/login",adminlogin);
adminRouter.post("/register",adminAuth,adminRegister);
adminRouter.post("/createteacher",adminAuth,createTeacher);
adminRouter.patch("/updateteacher/:id",adminAuth,updateTeacher);
adminRouter.delete("/deleteteacher/:id",adminAuth,deleteTeacher);
adminRouter.get("/getteachers",adminAuth,getTeachers)
adminRouter.get("/logout",adminAuth,logoutUser);
adminRouter.get("/refresh-token",adminAuth,NewAccessToken);


module.exports = {adminRouter}


// {
//     "name":"Amir Bhat",
//     "email":"Amir@gmail.com",
//     "subjects":["Mathematics","English"],
//     "qualification":"Phd Mathematics",
//     "availability":["Monday","Tuesday","Wednesday"],
//     "hourlyRate":1000
//   }

// {
//     "starttime":"2023-06-19T18:30:00+05:30",
//     "endtime":"2023-06-19T19:00:00+05:30",
//     "subject":"Physics"
//    }