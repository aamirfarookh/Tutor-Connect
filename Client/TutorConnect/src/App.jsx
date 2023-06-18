import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Landing/Landing'
import Signup from "./LoginSignUp/signup";
import Login from "./LoginSignUp/Login";
import Dashboard from "./Dashboard/Dashboard";


import { UserContextProvider } from "./UserContext"; 

// import './App.css'


function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/dashboard" element={<Dashboard/>} /> 
      </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
