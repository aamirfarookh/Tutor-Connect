// import React, { Component } from "react";
import Box from "@mui/material/Box";
import SignupImg from "./images/signup-image.jpg";

const Signup=()=> {
  
  return (
    <>
      <Box sx={{outline: '1px solid', width: '80%'}}>
        
      </Box>


      <section style={{ marginTop: "80px" }} className="signup">
        <div>
          <div >
            <div >
              <h2 >Sign up</h2>
              <form >
                <div>
                  <label htmlFor="name">
                    <i></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    />
                </div>
                <div >
                  <label htmlFor="email">
                    <i></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    />
                </div>
                <div >
                  <label htmlFor="pass">
                    <i ></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    />
                </div>
                <div >
                  <label htmlFor="re-pass">
                    <i ></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Repeat your password"
                    />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                    />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div>
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    />
                </div>
              </form>
            </div>

            <div>
              <figure>
                <img src={SignupImg} alt="sing up image" />
              </figure>
              <a href="#" className="signup-image-link">
                I am already member
              </a>
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  );
  
}

export default Signup