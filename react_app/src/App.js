import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Home from "./Home/home";
import Draw from "./Draw/draw";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/draw" element={<Draw />} />
      </Routes>
    </Router>
  ); 
}

export default App;
