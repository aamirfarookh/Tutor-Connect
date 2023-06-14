
const {
    registerNewUser,
    NewAccessToken,
    logoutUser,
    loginUser,
    getotp,
    verifyotp,
    resetpassword,
  } = require("../controllers/student.controller");
  const StudentRouter = require("express").Router();

  // const { passport } = require("../config/google_oauth");
  const { StudentModel } = require("../models/StudentModel");
//   const { auth } = require("../middlewares/auth");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const path = require("path");
  
  
  

  
 
  
  StudentRouter.post("/register", registerNewUser);
  StudentRouter.post("/login", loginUser);
  StudentRouter.get("/logout",logoutUser);
  StudentRouter.get("/refresh-token", NewAccessToken);
  StudentRouter.post("/getotp", getotp);
  StudentRouter.post("/verifyotp", verifyotp);
  StudentRouter.post("/resetpassword", resetpassword);
  
//   StudentRouter.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );
  
//   StudentRouter.get(
//     "/auth/google/callback",
//     passport.authenticate("google", {
//       failureRedirect: "/login",
//       session: false,
//     }),
//     async function (req, res) {
//       const fetch_user = await StudentModel.findOne({ email: req.user.email });
//       if (fetch_user) {
//         token_Genretor(res, fetch_user._id);
  
//         // res.redirect("./../../Frontend/leaderboard.html")
//       } else {
//         console.log(req.user)
//         req.user.password = bcrypt.hashSync(req.user.password, 2);
//         // req.user.avatar = fetch_user.avtar;
//         const user = new StudentModel(req.user);
//         await user.save();
//         token_Genretor(res, req.user.name, "login with google");
//         // res.redirect("./../../Frontend/leaderboard.html")
//       }
//     }
//   );
  
//   function token_Genretor(res, id) {
//     let accessToken = jwt.sign(
//       { userId: id },
//       process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
//       { expiresIn: 60 * 60 * 24 }
//     );
//     let refreshToken = jwt.sign(
//       { userId: id },
//       process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
//       { expiresIn: 60 * 60 * 24 * 4 }
//     );
  
//     res.cookie("JAA_access_token", accessToken, { maxAge: 60 * 60 * 24 });
//     res.cookie("JAA_refresh_token", refreshToken, {
//       maxAge: 60 * 60 * 24 * 4,
//     }); 
    
  
  
  
  
  
  // navigate to the "frontend/leaderboard" directory
//   const targetDirectory = path.join(__dirname,"./index.js");
//   res.set('Content-Type', 'text/html');
//   res.sendFile(targetDirectory)
  
  
                                            
// }
  
  module.exports = { StudentRouter };
  