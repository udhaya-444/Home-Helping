import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Maintenance from "./Pages/Maintenance";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
import Cleaning from "./Pages/Cleaning";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Maintenance" element={<Maintenance/>}/>
         
       
          <Route path="/Cleaning" element={<Cleaning/>}/>

        </Routes>
   
      </BrowserRouter>
    </>
  );
}

export default App;