import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Landing/Landing'
import Signup from './LoginSignUp/Login'


import './App.css'
function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/signup" element={<Signup />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
