const { AdminModel } = require("../models/AdminModel")
const { TeacherModel } = require("../models/TeacherModel");
const express = require("express")


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// admin login 

const adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isAdminPresent = await AdminModel.findOne({ email });

        // User not present in the database.
        if (!isAdminPresent)
            return res
                .status(400)
                .send({ msg: "Not an Admin, please contact the team" });

        // Password verification
        const isPasswordCorrect = bcrypt.compareSync(
            password,
            isAdminPresent.password
        );

        if (!isPasswordCorrect)
            return res.status(400).send({ msg: "Wrong credentials" });

        // Generating access token
        const accessToken = jwt.sign(
            { userId: isAdminPresent._id },
            process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
            { expiresIn: "24hr" }
        );

        // Generating refresh token
        const refreshToken = jwt.sign(
            { userId: isAdminPresent._id },
            process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
            { expiresIn: "4d" }
        );

        // Storing tokens in cookies.
        res.cookie("JAA_access_token", accessToken);
        res.cookie("JAA_refresh_token", refreshToken);

        res.status(200).send({ msg: " Admin Login successfull", accessToken, refreshToken });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};



// post request ==> (teacher create/ admin create)
const adminRegister = async (req, res) => {
    try {
        const { email, password, name , designation} = req.body;
        const isAdminPresent = await AdminModel.findOne({ email });

        // all fields presence check
        if (!email || !password || !name || !designation) {
            return res.status(400).send({ msg: "All feilds are required" });
        }

        // User already present in database.
        if (isAdminPresent) {
            return res
                .status(400)
                .send({ msg: "Already an Admin" });
        }

        // Hash the password.
        const hashedPassword = bcrypt.hashSync(password, 5);
        const newAdmin = new AdminModel({ ...req.body, password: hashedPassword });
        await newAdmin.save();
        res.status(200).send({ msg: " new Admin Registered successfully", user: newAdmin });
    } catch (error) {
        res.status(500).send({ error: "Registration failed", msg: error.message });
    }
};



//=================================================
// create a new teacher

const createTeacher = async (req, res) => {
    try {

        const { name, subjects, availability, qualification, hourlyRate, email } = req.body;
        const isTeacherPresent = await TeacherModel.findOne({ email });

        // all fields presence check
        if (!email || !subjects || !name || !availability || !hourlyRate || !qualification) {
            return res.status(400).send({ msg: "All feilds are required" });
        }

        // User already present in database.
        if (isTeacherPresent) {
            return res
                .status(400)
                .send({ msg: "teacher with this email is already present" });
        }

        // Hash the password.

        const newTeacher = new TeacherModel({ ...req.body });
        await newTeacher.save();
        res.status(200).send({ msg: " new Teacher Created successfully", user: newTeacher });
    } catch (error) {
        res.status(500).send({ error: " Teacher Registration failed", msg: error.message });
    }
};

// update teacher


const updateTeacher = async (req, res) => {
    try {
        const  teacherId = req.params.id;
        console.log(teacherId)
        if (!teacherId) {
            return res.status(400).send({ msg: "provide the ID of the teacher" })
        }
        const isTeacherPresent = TeacherModel.findOne({ teacherId })
        if (!isTeacherPresent) {
            return res.status(404).send({ msg: "No teacher found with this id" })
        }
        let updateteacher = await TeacherModel.findByIdAndUpdate(teacherId,req.body)
        res.status(200).send({ msg: "Successfuly updated the teacher" });


    } catch (error) {
        res.status(500).send({ msg: error.message });
    }


}

// get teacher

const getTeachers = async(req,res)=>{
    try {
        const teachers = await TeacherModel.find()
        res.status(200).send({teachers})
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
}



// delete teacher
const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id
        if (!teacherId) {
            return res.status(400).send({ msg: "provide the email of the teacher" })
        }
        const isTeacherPresent = TeacherModel.findOne({ teacherId })
        if (!isTeacherPresent) {
            return res.status(404).send({ msg: "no teacher found with this Id" })
        }
        let deleteTeacher = await TeacherModel.findByIdAndDelete(teacherId)
        res.status(200).send({ msg: "Successfuly deleted the teacher"});
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
}

module.exports = {adminlogin,adminRegister,createTeacher,updateTeacher,getTeachers,deleteTeacher}
