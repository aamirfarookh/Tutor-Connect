import * as React from 'react';
import {useState} from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Teachers=({availability, email, hourlyRate,name, qualification, subjects, _id })=> {

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [subject, setSubject] = useState('');

  const MySwal = withReactContent(Swal)

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log({date, startTime, endTime, subject});
    const payload={
      teacherEmail:email,
      starttime: startTime,
      endtime: endTime,
      subject
    }
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('JAA_access_token='))
        .split('=')[1];
        // console.log(token)
      await fetch(`http://localhost:4500/student/bookteacher`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            authorization: token
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        handleClose()
        if(res.msg==="teacher is not available , try another slot" || res.msg==="teacher is not available on this day , try another day"){
          MySwal.fire({
            title: res.msg,
            icon: 'error',
            position: 'center',
            timer: 2500,
            showConfirmButton: true,
            didOpen: () => {
              MySwal.showLoading()
            },
          })
        }else{
          MySwal.fire({
            title: res.msg,
            icon: 'success',
            position: 'center',
            timer: 2500,
            showConfirmButton: true,
            didOpen: () => {
              MySwal.showLoading()
            },
          })
        }
      })


      .then(err=>console.log(err))
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
    <React.Fragment>
      {/* <Title>Recent Deposits</Title> */}
      <Typography component="p" variant="h5" sx={{fontWeight: 600}}>
        {name}
      </Typography>
      <Typography component="p" color="text.secondary" sx={{fontWeight: 600}}>
        Qualifications:- {qualification}
      </Typography>
      <Typography variant="p" sx={{outline: '1px solid', backgroundColor: 'green', color: 'white', padding:"0.5rem 0.4rem", borderRadius: '0.5rem', fontSize: 'small',mt:2}} >
        Hourly Rate: {hourlyRate}/-
      </Typography>
      <Typography component="p" color="text.secondary" sx={{fontWeight: 600,mb: 2}}>
        {email}
      </Typography>
      <div>
        <Button onClick={handleClickOpen} variant="outlined">Book Now</Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>


              <FormControl action="" style={{ m: 1, minWidth: 120 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <label htmlFor="">Select Date</label>
                  <DatePicker onChange={(e)=>{
                    setDate(e.$d.toISOString())
                  }}/>
                  <label htmlFor="">Start Time</label>
                  <TimePicker onChange={(e)=>{
                    setStartTime(e.$d.toISOString())
                  }}/>
                  <label htmlFor="">End Time</label>
                  <TimePicker onChange={(e)=>{
                    setEndTime(e.$d.toISOString())
                  }}/>
                  <Box sx={{display: 'flex', flexDirection: 'column', my:2}}>
                    {subjects.map((el, index)=>(
                      <div key={index}>
                        <input type="checkbox" value={el} onChange={(e)=>setSubject(e.target.value)}/>
                        <label htmlFor="">{el}</label>
                    </div>
                    ))}
                  </Box>
                  <Box>
                    <Button type="submit" variant="outlined" onClick={handleSubmit}>Submit</Button>
                  </Box>
                </LocalizationProvider>
              </FormControl>





            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
    </>
  );
}


export default Teachers
