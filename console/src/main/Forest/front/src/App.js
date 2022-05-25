import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/index"




function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Login" exact element={<LoginPage/>}/>


    </Routes>



  </Router>



  );
}

export default App;
