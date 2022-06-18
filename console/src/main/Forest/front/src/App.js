import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/index"
import SigninPage from "./Pages/SigninPage";
import VolantorPage from "./Pages/VolantorPage";




function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Login" exact element={<LoginPage/>}/>
      <Route path="/Signin" exact element={<SigninPage/>}/>
      <Route path="/Volantor" exact element={<VolantorPage/>}/>


    </Routes>



  </Router>



  );
}

export default App;
