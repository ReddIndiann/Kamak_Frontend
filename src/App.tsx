
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Greeting from "./Pages/Greeting";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from "./Pages/landing";





const App: React.FC =()=>{

  return(
    <Router>  <Routes>
    <Route path="greet" element={<Greeting name="fuck you"/>}></Route>
    <Route path="/" element={<LandingPage />}></Route>
  </Routes></Router>
  
  );
}

export default  App;