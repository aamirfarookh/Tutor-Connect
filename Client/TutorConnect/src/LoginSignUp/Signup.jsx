// import React, { Component } from "react";
import { useContext  } from "react";
import { UserContext } from "../UserContext";

import SignupImg from "./images/signup-image.jpg";
import Logo from '../Landing/media/logo.png'
import {styled}  from "@mui/material";
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleButton from 'react-google-button'
import { Link as LinkR } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        TutorConnect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();


const Signup=()=> {

  const {setName, setId, setEmail, setIsVarified}=useContext(UserContext)
  const navigate= useNavigate()
  const MySwal = withReactContent(Swal)


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userDetails={
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('firstName')+' '+data.get('lastName'),
    };

    await fetch(`http://localhost:4500/student/register`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
    .then(res=> res.json())
    .then(res=>{
      // console.log(res)
      if(res.msg === "Registration successful"){
        
        setName(res.user.name)
        setId(res.user._id)
        setEmail(res.user.email)
        setIsVarified(res.user.isVerified)

         //redirect
         MySwal.fire({
          title: res.msg,
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          didOpen: () => {
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            MySwal.showLoading()
          },
        }).then(() => {
          return MySwal.fire({
            title: <p>Redirecting to Login Page...</p>
          })
        })

        setTimeout(() => {
          //redirect
          navigate("/login")
        }, 1500);
         
      }else{
        MySwal.fire({
          title: res.msg,
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          icon: 'error',
          didOpen: () => {
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            MySwal.showLoading()
          },
        })
      }
    })
    .catch((err)=>{
      console.log(err)
    })


  };
  
  const CustomBox=styled(Box)(({theme})=>({
    // outline: '1px solid', 
    width: '60%',
    margin: '1rem auto', 
    display: 'flex', 
    padding: '0rem 3rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '2rem',
    [theme.breakpoints.down('md')]:{
      width: '100vw',
      margin: 0,
      // height: '100vh'
    },
    [theme.breakpoints.down('sm')]:{
      width: '100vw',
      margin: 0,
      padding: 0
    }
  }))
  const CustomBox1=styled(Box)(({theme})=>({
    flex: 1, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    [theme.breakpoints.down('md')]:{
      display: 'none'
    }
  }))

  return (

    <CustomBox>
        <Box sx={{flex: 1}}>
          <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            > 
              <LinkR to='/'>
                <img src={Logo} alt="" />
              </LinkR>
              
              <Typography component="h1" variant="h5" sx={{fontWeight: 600}}>
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I agree all statements in Terms of service"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                 <GoogleButton label="Sign in" type='dark' style={{display: 'block',margin: '0.1rem auto', width: '35%',color:'gray', fontSize:'90%', fontWeight:500,backgroundColor:'#FFFFFF'}}/>
                <Grid container justifyContent="center" sx={{marginTop: '1rem'}}>
                  <Grid item>
                    <LinkR to='/login'>
                    <Link variant="body2">
                      Already have an account? Log in
                    </Link>
                    </LinkR>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 3,mb:2 }} />
          </Container>
          </ThemeProvider>
        </Box>
        
        <CustomBox1 sx={{}}>
          <figure>
            <img src={SignupImg} alt="sing up image" />
          </figure>
        </CustomBox1>
    </CustomBox>

  );

}

export default Signup