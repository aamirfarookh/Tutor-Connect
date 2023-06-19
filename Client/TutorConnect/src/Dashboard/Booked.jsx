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


const Booked=({booking, teacher})=> {

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');




  return (
    <>
    <React.Fragment>
      {/* <Title>Recent Deposits</Title> */}
      <Typography component="p" variant="h5" sx={{fontWeight: 600}}>
        Tutor: {teacher.name}
      </Typography>
      <Typography component="p" color="text.secondary" sx={{fontWeight: 600,mb: 2}}>
      <span style={{fontWeight: 800, color: 'black'}}>Email:- </span>{teacher.email}
      </Typography>
      <Typography component="p" color="text.secondary" sx={{fontWeight: 600}}>
        <span style={{fontWeight: 800, color: 'black'}}>Starts At:- </span>
        {`${new Date(booking.startTime)}`}
      </Typography>
      
      <Typography component="p" color="text.secondary" sx={{fontWeight: 600}}>
      <span style={{fontWeight: 800, color: 'black'}}>Ends At: -</span>{`${new Date(booking.endTime)}`}
      </Typography>
      <Button variant="outlined"> Join Class </Button>
    </React.Fragment>
    </>
  );
}


export default Booked
